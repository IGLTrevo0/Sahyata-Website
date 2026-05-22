import Link from "next/link";
import { Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold text-primary mb-4 block">
              Sahyata
            </Link>
            <p className="text-text-body leading-relaxed">
              Serving humanity with compassion and action. Dedicated to poverty and food relief since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Our Journey", "Events", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-text-body hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-text-body hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-body hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li className="text-text-body">
                80G / FCRA compliant
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((idx) => (
                <Link
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text hover:text-primary transition-colors shadow-sm"
                >
                  <Share2 size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-text-body text-sm">
            © Sahyata 2026 | All Rights Reserved | Built with ❤️ by Sahil
          </p>
        </div>
      </div>
    </footer>
  );
}
