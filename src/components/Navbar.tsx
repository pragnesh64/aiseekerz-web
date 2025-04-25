
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Services", to: "/services" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50  bg-background/80 border-b border-border/50">
      <nav className="flex items-center justify-between mx-auto max-w-7xl px-4 py-3" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-neon ${
                location.pathname === item.to 
                  ? 'text-neon after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-neon'
                  : 'text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div> */}
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-1 z-50' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
        
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background/95 backdrop-blur-lg px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-border/10">
          <div className="flex items-center justify-between">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <div className="mt-6 flow-root">
            <div className="space-y-1 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`block rounded-lg px-3 py-2 text-base font-semibold transition-all hover:bg-accent/50 ${
                    location.pathname === item.to ? 'text-neon bg-accent/30' : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="flex items-center justify-between py-6 border-t border-border">
              <span className="text-sm text-muted-foreground">© 2025 AISEEKERZ</span>
              <ThemeToggle />
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
