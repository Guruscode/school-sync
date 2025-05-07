import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">SchoolSync</h3>
            <p className="text-gray-300 mb-4">
              Empowering schools with innovative management solutions.
            </p>
            <div className="relative h-8 w-auto">
              <Image
                src="/images/logo.png"
                alt="SchoolSync Logo"
                width={100} // Adjust based on your logo's aspect ratio
                height={32} // h-8 = 32px
                className="object-contain"
                quality={80}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-accent transition-colors">Student Management</Link></li>
              <li><Link href="#features" className="hover:text-accent transition-colors">Attendance</Link></li>
              <li><Link href="#features" className="hover:text-accent transition-colors">Parent Portal</Link></li>
              <li><Link href="#features" className="hover:text-accent transition-colors">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#team" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-accent transition-colors" aria-label="Twitter"><FaTwitter size={24} /></a>
              <a href="https://facebook.com" className="hover:text-accent transition-colors" aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-accent transition-colors" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} SchoolSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};