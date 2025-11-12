import { FileText, Lightbulb, Settings, Clock, Target } from "lucide-react"

export default function ProcessDiagram() {
  const steps = [
    {
      icon: FileText,
      label: "BRIEF",
      color: "border-purple-900",
      textColor: "text-purple-900",
    },
    {
      icon: Lightbulb,
      label: "CONCEPT",
      color: "border-purple-900",
      textColor: "text-purple-900",
    },
    {
      icon: Settings,
      label: "PRODUCTION",
      color: "border-orange-500",
      textColor: "text-orange-500",
    },
    {
      icon: Clock,
      label: "ON-SITE\nMANAGEMENT",
      color: "border-purple-900",
      textColor: "text-purple-900",
    },
    {
      icon: Target,
      label: "POST-EVENT\nREPORT",
      color: "border-purple-900",
      textColor: "text-purple-900",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold tracking-[0.3em] text-orange-500 mb-12 md:mb-16">Process</h2>

      {/* Process Flow */}
      <div className="flex items-center justify-center gap-0">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Circle with Icon and Text */}
            <div className="flex flex-col items-center">
              <div
                className={`w-40 h-40 rounded-full border-4 ${step.color} bg-white flex flex-col items-center justify-center gap-2`}
              >
                <step.icon className={`w-10 h-10 ${step.textColor}`} strokeWidth={1.5} />
                <span
                  className={`text-xs font-semibold ${step.textColor} text-center whitespace-pre-line px-2 leading-tight`}
                >
                  {step.label}
                </span>
              </div>
            </div>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className="flex items-center mx-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M5 20 L25 20 M25 20 L18 13 M25 20 L18 27"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

