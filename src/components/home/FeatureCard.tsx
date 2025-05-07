interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  style?: React.CSSProperties; // Add the optional style prop
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-glass p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glassmorphism">
      <div className="text-5xl mb-6 text-accent">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-primary-dark">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};