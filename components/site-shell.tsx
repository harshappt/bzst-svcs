import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services/small-business", label: "Small Business" },
  { href: "/services/enterprise", label: "Enterprise" },
];

export function SiteShell({
  activeHref,
  children,
}: {
  activeHref?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="site">
      <div className="site-shell">
        <header className="topbar">
          <Link href="/" className="brand" aria-label="BZST home">
            <span>BZST</span>
            <span className="brand-dot" />
          </Link>
          <nav className="nav-links">
            {navItems.map((item) => {
              const active =
                activeHref === item.href ||
                (activeHref === "/services" && item.href === "/services");

              return (
                <Link key={item.href} href={item.href} className={active ? "active" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a href="mailto:admin@bazaarstreet.us" className="button button-primary">
            <span>Book a Call</span>
            <span className="arrow">↗</span>
          </a>
        </header>
        <main className="page">{children}</main>
        <footer className="footer">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <span>BZST</span>
                <span className="brand-dot" />
              </div>
              <p className="footer-copy">
                AI systems and services that help businesses operate better and grow faster.
              </p>
              <div className="socials" aria-hidden="true">
                <span>in</span>
                <span>𝕏</span>
                <span>✉</span>
              </div>
            </div>
            <div className="footer-link-group">
              <strong>Pages</strong>
              <Link href="/">Home</Link>
              <Link href="/services/small-business">Small Business</Link>
              <Link href="/services/enterprise">Enterprise</Link>
            </div>
            <div className="footer-link-group">
              <strong>Explore</strong>
              <Link href="/services/small-business">Small Business Solutions</Link>
              <Link href="/services/enterprise">Enterprise Services</Link>
              <Link href="/">Back to Home</Link>
            </div>
            <div className="footer-link-group">
              <strong>Get Started</strong>
              <a href="mailto:admin@bazaarstreet.us">Book a discovery call</a>
              <a href="mailto:admin@bazaarstreet.us">Email BZST</a>
              <Link href="/services/small-business">See example workflows</Link>
            </div>
            <div className="footer-link-group">
              <strong>Contact</strong>
              <a href="mailto:admin@bazaarstreet.us">admin@bazaarstreet.us</a>
              <a href="mailto:admin@bazaarstreet.us">Book a call</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 BAZARSTREET. All rights reserved.</div>
        </footer>
      </div>
    </div>
  );
}
