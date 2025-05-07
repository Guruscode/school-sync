import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const Team: React.FC = () => {
  const team: TeamMember[] = [
    { name: "Alex Carter", role: "Founder & CEO", image: "/assets/avatar.png" },
    { name: "Sarah Lee", role: "CTO", image: "/assets/avatar.png" },
    { name: "Michael Brown", role: "Lead Developer", image: "/assets/avatar.png" },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                  quality={90}
                />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};