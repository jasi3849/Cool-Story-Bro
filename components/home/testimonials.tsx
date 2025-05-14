export default function Testimonials() {
  const testimonials = [
    {
      name: " Aarav Mehta",
      text: "Cool Story Bro isn’t just another agency — they understood our brand voice better than we did! Their influencer campaign gave us more than reach — it gave us a real community.",
    },
    {
      name: " Anand M",
      text: "What stood out was how seamlessly creativity and performance came together. The campaign didn’t just look good — it sold out our entire product drop in 48 hours.",
    },
    {
      name: "Rohit Jhamble",
      text: "Their team felt like an extension of ours. From web development to content shoots, every deliverable was sharp, on-brand, and ahead of schedule",
    },
    {
      name: " Samrat P",
      text: "They don’t do cookie-cutter campaigns. Cool Story Bro helped us build a unique voice and positioned us as a cultural brand, not just a product.",
    },
    {
      name: " Karan Sinha",
      text: "We went from zero online presence to becoming a viral name in our category, all thanks to their storytelling-first approach.",
    },
    {
      name: " Meenal Jain",
      text: "I’ve worked with big agencies before — none brought the level of attention, creativity, and data-driven results that Cool Story Bro did.",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-[#ffd100]">"</div>
              <p className="mb-6">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
