import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
}

export const Blog: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: "5 Ways to Improve Parent Engagement",
      excerpt: "Learn how to foster better communication with parents using SchoolSync.",
      image: "/assets/avatar.png",
    },
    {
      title: "The Future of School Analytics",
      excerpt: "Discover how data-driven insights can transform education.",
      image: "/assets/avatar.png",
    },
    {
      title: "Tips for Streamlined Admissions",
      excerpt: "Simplify your admissions process with our platform.",
      image: "/assets/avatar.png",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-neutral p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-dark">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href="/blog" className="text-accent hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};