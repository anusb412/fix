import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Anthony
            </span>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-slate-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-slate-300 font-medium">
            <NavLinkItem to="/">Home</NavLinkItem>
            <NavLinkItem to="/projects">Projects</NavLinkItem>
            <NavLinkItem to="/about">About</NavLinkItem>
            <NavLinkItem to="/contact">Contact</NavLinkItem>
          </ul>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="lg:hidden mt-6 flex flex-col gap-6 text-slate-300 font-medium">
            <NavLinkItem to="/" onClick={() => setOpen(false)}>
              Home
            </NavLinkItem>
            <NavLinkItem to="/projects" onClick={() => setOpen(false)}>
              Projects
            </NavLinkItem>
            <NavLinkItem to="/about" onClick={() => setOpen(false)}>
              About
            </NavLinkItem>
            <NavLinkItem to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLinkItem>
          </ul>
        )}
      </nav>
    </header>
  );
}

function NavLinkItem({ to, children, onClick }) {
  return (
    <li>
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `transition hover:text-cyan-400 ${
            isActive ? "text-cyan-400" : ""
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
