import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[color:var(--color-primary)] text-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        {/* Left Column */}
        <div>
          <h4 className="font-heading text-lg mb-2">GraceCity</h4>
          <p className="text-[0.875rem] opacity-80">
            A place of excellence, purpose, and divine transformation.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/sermons" className="hover:underline">
                Sermons
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="font-semibold mb-2">Visit Us</h4>
          <p>GraceCity Church, Abuja</p>
          <p>Sunday Services: 9:00 AM</p>
          <p>Wednesdays: 6:00 PM</p>
        </div>
      </div>

      <div className="bg-[color:var(--color-primary)] border-t border-white/10 text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} RCCG GraceCity Church Abuja. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
