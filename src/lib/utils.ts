type ClassValue = string | null | undefined | false | Record<string, boolean>

export function cn(...classes: ClassValue[]): string {
  const result: string[] = []

  for (const cls of classes) {
    if (!cls) continue

    if (typeof cls === "string") {
      result.push(cls)
    } else {
      for (const [key, value] of Object.entries(cls)) {
        if (value) result.push(key)
      }
    }
  }

  return result.join(" ")
}
