import { FaBars } from "react-icons/fa6";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">

      <div className="container mx-auto h-16 px-4">

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative flex h-full items-center lg:hidden">

          {/* Hamburger */}
          <button
            className="btn btn-ghost btn-circle"
            aria-label="Open menu"
          >
            <FaBars className="text-2xl text-gray-600" />
          </button>

          {/* Center Logo */}
          <a
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src={logo}
              alt="DevStack"
              className="w-26.25 h-auto"
            />
          </a>

          {/* Right Buttons */}
          <div className="ml-auto flex items-center gap-2">
            <button className="font-medium text-gray-700 hover:text-pink-600 transition">
              Sign In
            </button>

            <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-5">
              Sign Up
            </button>
          </div>

        </div>


        {/* ================= LARGE SCREEN ================= */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] h-full items-center">

          {/* Logo - Left */}
          <div className="justify-self-start">
            <a href="/">
              <img
                src={logo}
                alt="DevStack"
                className="w-32.5 h-auto"
              />
            </a>
          </div>


          {/* Navigation - Exact Center */}
          <ul className="flex items-center gap-7">

            <li>
              <a
                href="/"
                className="text-pink-600 hover:text-pink-700 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/technologies"
                className="text-gray-600 hover:text-pink-600 transition"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="/projects"
                className="text-gray-600 hover:text-pink-600 transition"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-pink-600 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-gray-600 hover:text-pink-600 transition"
              >
                Contact
              </a>
            </li>

          </ul>


          {/* Right Buttons */}
          <div className="justify-self-end flex items-center gap-3">

            <button className="font-medium text-gray-700 hover:text-pink-600 transition">
              Sign In
            </button>

            <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-5">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;