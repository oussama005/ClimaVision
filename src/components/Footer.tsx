import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" }
  ];

  const supportLinks = [
    { name: "Help Center", path: "/support" },
    { name: "Contact Us", path: "/contact" },
    { name: "API Documentation", path: "/docs" },
    { name: "Status", path: "/status" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "#" },
    { name: "Terms of Service", path: "#" },
    { name: "Cookie Policy", path: "#" }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: "#" },
    { icon: <Twitter className="h-5 w-5" />, url: "#" },
    { icon: <Instagram className="h-5 w-5" />, url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, url: "#" },
    { icon: <Github className="h-5 w-5" />, url: "#" }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">ClimaVision</span>
            </Link>
            <p className="text-muted-foreground mb-4">
            The most accurate weather forecasting platform.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social.icon.type.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ClimaVision. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="#"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="#"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}