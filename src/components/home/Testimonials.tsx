import Image from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "SchoolSync has revolutionized our operations. The parent portal is a game-changer!",
      author: "Jane Doe",
      role: "School Administrator",
      avatar: "/assets/avatar.png",
    },
    {
      quote: "The analytics tools help us support students effectively.",
      author: "John Smith",
      role: "Teacher",
      avatar: "/assets/avatar.png",
    },
    {
      quote: "I love the real-time updates on my child's progress.",
      author: "Emily Johnson",
      role: "Parent",
      avatar: "/assets/avatar.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Trusted by Educators and Parents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="object-cover"
                  quality={85}
                />
              </div>
              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="font-semibold text-primary-dark">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};