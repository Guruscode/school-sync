import { Button } from "@/components/common/Button";
import Link from "next/link";

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-cta-gradient text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-6 animate-slide-up">
          Transform Your School Today
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Join thousands of schools revolutionizing education with SchoolSync.
        </p>
        <Link href="/register">
          <Button className="bg-accent hover:bg-accent-light text-lg px-10 py-4 animate-pulse-glow">
            Get Started for Free
          </Button>
        </Link>
      </div>
    </section>
  );
};