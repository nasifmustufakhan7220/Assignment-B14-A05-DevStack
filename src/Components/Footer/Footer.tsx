import logo from "../../assets/logo-text.png"
export function Footer() {
  return (
    <footer className="border-t border-base-200 bg-base-100">
      <div className="max-w-330 mx-auto px-6 py-12">
        {/* Top area: brand + link columns */}
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left md:gap-6">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <img src={logo} alt="" />
            </div>
 
            <p className="mt-4 text-sm leading-relaxed text-base-content/60">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
 
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-base-content/60 md:justify-start">
              <a href="#" className="link link-hover md:mr-2">
                GitHub
              </a>
              <span className="text-base-content/30 md:hidden">·</span>
              <a href="#" className="link link-hover md:mr-2">
                Twitter
              </a>
              <span className="text-base-content/30 md:hidden">·</span>
              <a href="#" className="link link-hover md:mr-2">
                LinkedIn
              </a>
            </div>
          </div>
 
          {/* Link columns — hidden on mobile, shown from md up */}
          <div className="hidden gap-20 md:flex">
            <nav className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-base-content">
                Product
              </h3>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Home
              </a>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Technologies
              </a>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Projects
              </a>
            </nav>
 
            <nav className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-base-content">
                Company
              </h3>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                About
              </a>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Contact
              </a>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Careers
              </a>
            </nav>
 
            <nav className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-base-content">
                Legal
              </h3>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Privacy Policy
              </a>
              <a href="#" className="link link-hover text-sm text-base-content/60">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
 
        <div className="divider my-8 md:my-10" />
 
        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center gap-3 text-xs text-base-content/50 md:flex-row md:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="link link-hover">
              Privacy
            </a>
            <a href="#" className="link link-hover">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}