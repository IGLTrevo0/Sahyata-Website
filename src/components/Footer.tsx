import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-3 block">
              Sahyata
            </Link>
            <p className="text-text-body text-sm leading-relaxed">
              Serving humanity with compassion and action. Dedicated to poverty and food relief since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Our Journey", "Events", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-text-body text-sm hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h4 className="text-base font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-text-body text-sm hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-text-body text-sm hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li className="text-text-body text-sm">80G / FCRA compliant</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5 text-center">
          <p className="text-text-body text-xs">
            © Sahyata 2026 | All Rights Reserved | Built with ❤️ by Sahil
          </p>
        </div>
      </div>
    </footer>
  );
}
