import Link from "next/link";
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
            <img src="/images/logo.png" alt="SchoolSync Logo" className="h-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="hover:text-accent">Student Management</Link></li>
              <li><Link href="#features" className="hover:text-accent">Attendance</Link></li>
              <li><Link href="#features" className="hover:text-accent">Parent Portal</Link></li>
              <li><Link href="#features" className="hover:text-accent">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#team" className="hover:text-accent">About Us</Link></li>
              <li><Link href="#pricing" className="hover:text-accent">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-accent"><FaTwitter size={24} /></a>
              <a href="https://facebook.com" className="hover:text-accent"><FaFacebook size={24} /></a>
              <a href="https://linkedin.com" className="hover:text-accent"><FaLinkedin size={24} /></a>
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