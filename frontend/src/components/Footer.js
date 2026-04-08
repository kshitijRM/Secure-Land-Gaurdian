import { Shield, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: 'https://ethereum.org/en/security/' },
    { label: 'Roadmap', href: 'https://ethereum.org/en/roadmap/' },
  ],
  Company: [
    { label: 'About', href: 'https://www.worldbank.org/en/topic/land' },
    { label: 'Careers', href: 'https://www.linkedin.com/jobs/' },
    { label: 'Blog', href: 'https://blog.ethereum.org/' },
    { label: 'Press', href: 'https://www.transparency.org/en/press' },
  ],
  Resources: [
    { label: 'Documentation', href: 'https://ethereum.org/en/developers/docs/' },
    { label: 'API Reference', href: 'https://docs.ethers.org/' },
    { label: 'Partners', href: 'https://www.hyperledger.org/about/members' },
    { label: 'Community', href: 'https://discord.com/invite/ethereum-org' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: 'https://ethereum.org/en/privacy-policy/' },
    { label: 'Terms of Service', href: 'https://ethereum.org/en/terms-of-use/' },
    { label: 'Compliance', href: 'https://www.iso.org/iso-27001-information-security.html' },
    { label: 'Cookie Policy', href: 'https://ethereum.org/en/cookie-policy/' },
  ],
};

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <Shield className="w-5 h-5 text-[#007AFF] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <span className="text-white font-bold text-base tracking-tight">LandSecure</span>
            </a>
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
                {links.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                        className="group inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        {isExternal && (
                          <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" strokeWidth={1.5} />
                        )}
                      </a>
                    </li>
                  );
                })}
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
            <a href="https://ethereum.org/en/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy
            </a>
            <a href="https://ethereum.org/en/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms
            </a>
            <a href="https://ethereum.org/en/cookie-policy/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
