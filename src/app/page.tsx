import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { Blog } from "@/components/home/Blog";
import { Partners } from "@/components/home/Partners";
import { Newsletter } from "@/components/home/Newsletter";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Blog />
      <Partners />
      <Newsletter />
      <CTA />
    </div>
  );
}