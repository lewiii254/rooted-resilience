import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'The Journey', href: '/#journey' },
  { label: 'The Mission', href: '/#mission' },
  { label: 'The Records', href: '/#records' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Get Involved', href: '/#involved' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link on the same page
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (href: string) => {
    if (href === '/gallery') return location.pathname === '/gallery';
    return location.pathname === '/' && href.startsWith('/#');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'bg-background/80' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="font-serif text-xl font-bold text-foreground tracking-tight">
            <span className="text-accent">T</span>ruphena
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/') && !item.href.includes('#') ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-sans transition-colors organic-underline ${
                    isActive(item.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors organic-underline"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* SDG Colors indicator */}
          <div className="hidden md:flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sdg-red" />
            <span className="w-2 h-2 rounded-full bg-sdg-orange" />
            <span className="w-2 h-2 rounded-full bg-sdg-yellow" />
            <span className="w-2 h-2 rounded-full bg-sdg-green" />
            <span className="w-2 h-2 rounded-full bg-sdg-blue" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-2xl p-6 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith('/') && !item.href.includes('#') ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-lg font-sans text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-sans text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
