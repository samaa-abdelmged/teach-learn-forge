import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Moon, Sun, Languages, Bell, Diamond, Search } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';

interface HeaderProps {
  showSearch?: boolean;
}

export const Header = ({ showSearch = false }: HeaderProps) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { userName, userImage, role } = useUser();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-diamond rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L&T</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-diamond bg-clip-text text-transparent">
              Learn & Teach
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/sections" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.sections')}
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          {showSearch && (
            <div className="hidden md:flex relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder={t('common.search')}
                className="pl-10 h-9"
              />
            </div>
          )}

          {/* Premium Button */}
          {role && (
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-diamond hover:opacity-90 text-white font-semibold shadow-glow"
            >
              {t('common.premium')}
            </Button>
          )}

          {/* User Section */}
          {role && (
            <>
              {/* Diamonds (Only for Instructor) */}
              {role === 'instructor' && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-card border rounded-lg">
                  <Diamond className="h-5 w-5 text-diamond diamond-glow" fill="currentColor" />
                  <span className="text-sm font-semibold">1,234</span>
                </div>
              )}

              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>

              {/* User Profile */}
              <div className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-accent transition-colors cursor-pointer">
                <img 
                  src={userImage} 
                  alt={userName}
                  className="w-8 h-8 rounded-full ring-2 ring-primary/20"
                />
                <span className="hidden lg:block text-sm font-medium">{userName}</span>
              </div>
            </>
          )}

          {/* Theme Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="hover:bg-accent"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => i18n.changeLanguage('ar')}>
                العربية
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
