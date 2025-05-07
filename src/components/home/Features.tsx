import { FeatureCard } from "./FeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      title: "Student Management",
      description: "Effortlessly manage student profiles, admissions, and academic records.",
      icon: "📚",
    },
    {
      title: "Real-Time Attendance",
      description: "Track attendance with biometric options and instant notifications.",
      icon: "✅",
    },
    {
      title: "Parent Engagement",
      description: "Empower parents with real-time updates on progress and payments.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Advanced Analytics",
      description: "Unlock insights with customizable reports and predictive tools.",
      icon: "📊",
    },
    {
      title: "Financial Management",
      description: "Simplify fee collection and reporting with integrated payments.",
      icon: "💰",
    },
    {
      title: "Mobile Access",
      description: "Access features on the go with native iOS and Android apps.",
      icon: "📱",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Transform Your School with SchoolSync
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};