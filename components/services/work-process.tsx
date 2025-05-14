export default function WorkProcess() {
  const steps = [
    {
      title: "Discovery",
      description: "We dive deep into understanding your brand, goals, audience, and competitive landscape to build a foundation for success.",
    },
    {
      title: "Strategy",
      description: "We create a custom-tailored plan, blending creativity and data to craft compelling, sales-driven campaigns..",
    },
    {
      title: "Execution",
      description: "Our team brings the strategy to life with high-quality content, influencer partnerships, and precision-targeted campaigns.",
    },
    {
      title: "Optimization",
      description: "We continually analyze performance and refine strategies to ensure every campaign is driving the best possible results.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Work Process</h2>
        <h3 className="text-xl mb-12 text-center">How We Work</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#ffd100] rounded-full flex items-center justify-center text-[#1a1a1a] font-bold text-xl mx-auto mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
