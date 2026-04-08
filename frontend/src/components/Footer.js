import { Shield } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Resources: ['Documentation', 'API Reference', 'Partners', 'Community'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Compliance', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
              <span className="text-white font-bold text-base tracking-tight">LandSecure</span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Next-generation land verification powered by AI and blockchain technology.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-white mb-4 tracking-tight">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      data-testid={`footer-link-${link.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            {new Date().getFullYear()} LandSecure. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
