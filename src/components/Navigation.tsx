import { Link, useLocation } from 'react-router-dom';
import { useMood } from '@/contexts/MoodContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Palette } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const location = useLocation();
  const { mood, setMood } = useMood();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/projects', label: 'Projects' },
    { path: '/clients', label: 'Clients' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Blog' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  const moods = [
    { value: 'light', label: 'Light', color: 'bg-gray-100' },
    { value: 'dark', label: 'Dark', color: 'bg-gray-900' },
    { value: 'yellow', label: 'Yellow', color: 'bg-yellow-400' },
    { value: 'red', label: 'Red', color: 'bg-red-500' },
    { value: 'green', label: 'Green', color: 'bg-green-600' },
    { value: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { value: 'golden', label: 'Golden', color: 'bg-amber-500' },
  ];

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Palette className="w-4 h-4 mr-2" />
                  Mood
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {moods.map((m) => (
                  <DropdownMenuItem
                    key={m.value}
                    onClick={() => setMood(m.value as any)}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-4 h-4 rounded-full ${m.color}`} />
                    <span>{m.label}</span>
                    {mood === m.value && <span className="ml-auto">✓</span>}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <p className="text-xs font-semibold mb-2 text-muted-foreground">Change Mood</p>
              <div className="flex flex-wrap gap-2">
                {moods.map((m) => (
                  <Button
                    key={m.value}
                    variant={mood === m.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setMood(m.value as any)}
                  >
                    {m.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
