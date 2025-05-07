"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";

interface NewsletterForm {
  email: string;
}

export const Newsletter: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterForm>();

  const onSubmit = (data: NewsletterForm) => {
    console.log("Newsletter signup:", data);
    // Integrate with backend API for newsletter signup
  };

  return (
    <section id="newsletter" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 animate-slide-up">
          Stay Updated with SchoolSync
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Subscribe to our newsletter for the latest tips, updates, and insights.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto flex space-x-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 rounded-lg text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent"
            {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })}
          />
          <Button type="submit" className="bg-accent hover:bg-accent-light px-6 py-3">Subscribe</Button>
        </form>
        {errors.email && <p className="text-red-400 mt-2">{errors.email.message}</p>}
      </div>
    </section>
  );
};