export default function Testimonials() {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $50,000 in unused licenses we did not even know we had! The process was seamless.",
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechCorp Inc."
    },
    {
      quote: "As a small business, every dollar counts. SoftSell provided a fair valuation and quick payment for our surplus Microsoft licenses.",
      name: "Michael Chen",
      role: "CEO",
      company: "StartUp Ventures"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-6">&quot;{testimonial.quote}&quot;</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
