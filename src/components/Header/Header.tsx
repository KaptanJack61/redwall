'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#cozumler', label: 'Çözümler' },
    { href: '#yazilim', label: 'Yazılım' },
    { href: '#hakkimizda', label: 'Hakkımızda' },
    { href: '#iletisim', label: 'İletişim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/redwall-logo-noname.svg"
              alt="Redwall"
              width={36}
              height={36}
            />
            <span className="text-xl font-bold text-gray-900">Redwall</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://app.redwall.tr"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Giriş Yap
            </Link>
            <Link
              href="#iletisim"
              className="px-4 py-2 bg-[#c41e3a] text-white text-sm font-medium rounded-lg hover:bg-[#a01830] transition-colors"
            >
              Demo Talep Et
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="https://app.redwall.tr"
                  className="px-3 py-2 text-gray-600 text-center"
                >
                  Giriş Yap
                </Link>
                <Link
                  href="#iletisim"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 bg-[#c41e3a] text-white text-center font-medium rounded-lg"
                >
                  Demo Talep Et
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
