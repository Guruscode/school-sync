export const Stats: React.FC = () => {
  const stats = [
    { value: "10K+", label: "Schools Served" },
    { value: "1M+", label: "Active Users" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "24/7", label: "Support Availability" },
  ];

  return (
    <section id="stats" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <p className="text-5xl font-extrabold text-accent mb-2">{stat.value}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};