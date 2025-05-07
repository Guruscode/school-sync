import Image from 'next/image';

export const Partners: React.FC = () => {
  const partners = [
    { name: "Partner 1", logo: "/assets/avatar.png" },
    { name: "Partner 2", logo: "/assets/avatar.png" },
    { name: "Partner 3", logo: "/assets/avatar.png" },
    { name: "Partner 4", logo: "/assets/avatar.png" },
  ];

  return (
    <section id="partners" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Our Trusted Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-16 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};