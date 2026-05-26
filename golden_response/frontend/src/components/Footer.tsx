import Link from 'next/link';
import NewsletterForm from '@/components/NewsletterForm';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black tracking-tight">LUXE</span>
              <span className="w-2 h-2 rounded-full bg-amber-500" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The pinnacle of luxury real estate. We curate the world&apos;s most
              exceptional properties for discerning clients who demand
              nothing but the extraordinary.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>100 Park Avenue, Suite 4200<br />New York, NY 10017</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+12125550100" className="hover:text-white transition-colors">+1 (212) 555-0100</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello@luxerealty.com" className="hover:text-white transition-colors">hello@luxerealty.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-amber-500 font-semibold text-sm uppercase tracking-wider mb-4">
              Newsletter
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe for exclusive listings and market insights.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} LUXE Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {['𝕏', 'in', 'fb', 'ig'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center text-slate-400 hover:text-white text-xs font-bold transition-all duration-300"
                aria-label={`Social media: ${icon}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
