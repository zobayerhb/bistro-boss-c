import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-[#111827] md:py-20 md:px-28">
        <aside className="flex items-center flex-col text-white font-medium">
          <h3 className="uppercas text-3xl">Contact us</h3>
          <p className="text-xl">123 ABS Street, Uni 21, Bangladesh</p>
          <span className="text-xl">+88 123456789</span>
          <span className="text-xl">Mon - Fri: 08:00 - 22:00</span>
          <span className="text-xl">Mon - Fri: 08:00 - 22:00</span>
        </aside>
        <nav className="text-white flex flex-col items-center justify-center">
          <h6 className="text-3xl font-medium">Follow US</h6>
          <span className="text-xl font-medium">Join us on social media</span>
          <div className="grid grid-flow-col gap-4 items-center">
            <a>
              <FaFacebookF size={25} />
            </a>
            <a>
              <FaInstagram size={25} />
            </a>
            <a>
              <FaTwitter size={25} />
            </a>
          </div>
        </nav>
      </footer>
      <aside className="bg-[#151515] text-white text-center py-4">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Zobayer
          Hosen
        </p>
      </aside>
    </>
  );
};

export default Footer;
