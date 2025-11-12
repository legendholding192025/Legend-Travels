"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Fuse from "fuse.js"
import { cn } from "@/lib/utils"

type Airport = {
  id?: string
  name: string
  city?: string
  country?: string
  iata?: string
  icao?: string
}

type AirportSearchProps = {
  placeholder?: string
  className?: string
  onSelect?: (airport: Airport, formattedValue: string) => void
  onQueryChange?: (value: string) => void
  value?: string
  inputId?: string
  inputClassName?: string
}

const SEARCH_DEBOUNCE_MS = 300
const MAX_RESULTS = 10

export default function AirportSearch({
  placeholder = "Search by city, airport, or code",
  className,
  onSelect,
  onQueryChange,
  value,
  inputId,
  inputClassName,
}: AirportSearchProps) {
  const [query, setQuery] = useState(value ?? "")
  const [results, setResults] = useState<Airport[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const fuseRef = useRef<Fuse<Airport> | null>(null)
  const airportsRef = useRef<Airport[]>([])
  const isSelectingRef = useRef(false)

  useEffect(() => {
    let isMounted = true

    const loadAirports = async () => {
      try {
        const response = await fetch("/data/airports.json")
        if (!response.ok) {
          throw new Error(`Failed to load airports: ${response.status}`)
        }

        const data: Airport[] = await response.json()
        if (!isMounted) return

        airportsRef.current = data
        fuseRef.current = new Fuse(data, {
          keys: [
            { name: "name", weight: 0.5 },
            { name: "city", weight: 0.3 },
            { name: "iata", weight: 0.2 },
          ],
          threshold: 0.3,
          ignoreLocation: true,
          minMatchCharLength: 2,
        })

        setHasError(false)
      } catch (error) {
        console.error(error)
        if (isMounted) {
          setHasError(true)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadAirports()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (value !== undefined && value !== query) {
      setQuery(value)
      setHasSearched(false)
      setResults([])
    }
  }, [value])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setHasSearched(false)
      return
    }

    const handler = window.setTimeout(() => {
      if (!fuseRef.current) return
      if (isSelectingRef.current) {
        isSelectingRef.current = false
        return
      }

      const fuseResults = fuseRef.current.search(query, { limit: MAX_RESULTS })
      setResults(fuseResults.map((result) => result.item))
      setHasSearched(true)
    }, SEARCH_DEBOUNCE_MS)

    return () => {
      window.clearTimeout(handler)
    }
  }, [query])

  const shouldShowDropdown = useMemo(
    () => query.trim().length > 0 && results.length > 0,
    [query, results]
  )
  const shouldShowNoResults =
    !isLoading && !hasError && hasSearched && results.length === 0

  const handleResultClick = (airport: Airport) => {
    isSelectingRef.current = true
    const formattedValue = formatAirportLabel(airport)
    setQuery(formattedValue)
    setResults([])
    setHasSearched(false)
    onSelect?.(airport, formattedValue)
    onQueryChange?.(formattedValue)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setQuery(value)
    onQueryChange?.(value)
    setHasSearched(false)
    if (!value.trim()) {
      setResults([])
    }
  }

  return (
    <div className={cn("relative w-full", className)}>
      <input
        id={inputId}
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition focus:border-[#EE8900] focus:ring-2 focus:ring-[#EE8900]/40",
          inputClassName
        )}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={shouldShowDropdown}
        aria-controls="airport-search-list"
      />

      {shouldShowDropdown && (
        <ul
          id="airport-search-list"
          className="absolute z-20 mt-2 max-h-72 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
        >
          {results.map((airport) => (
            <li
              key={`${airport.id ?? airport.iata ?? airport.name}`}
              className="cursor-pointer px-4 py-2 text-sm text-gray-800 transition hover:bg-gray-100"
              onMouseDown={(event) => {
                event.preventDefault()
                handleResultClick(airport)
              }}
            >
              <div className="font-medium text-gray-900">
                {formatAirportLabel(airport)}
              </div>
              <div className="text-xs text-gray-500">
                {formatAirportSecondaryLabel(airport)}
              </div>
            </li>
          ))}
        </ul>
      )}

      {shouldShowNoResults && (
        <div className="absolute z-20 mt-2 w-full rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm text-gray-500 shadow-lg">
          No matches found
        </div>
      )}

      {hasError && (
        <div className="absolute z-20 mt-2 w-full rounded-lg border border-red-200 bg-white px-4 py-2 text-sm text-red-600 shadow-lg">
          Unable to load airport data. Please try again later.
        </div>
      )}
    </div>
  )
}

function formatAirportLabel(airport: Airport) {
  const code = airport.iata?.toUpperCase()
  return code ? `${airport.name} (${code})` : airport.name
}

function formatAirportSecondaryLabel(airport: Airport) {
  const parts = [airport.city, airport.country].filter(Boolean)
  return parts.join(", ")
}

