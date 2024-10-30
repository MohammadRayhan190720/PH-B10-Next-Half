import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";




const Navbar = () => {

  const [open,setOpen] = useState(false);


  const routes = [
    {
      path: "/",
      exact: true,
      title: "Home Page",
      description: "Welcome to the main landing page.",
    },
    {
      path: "/about",
      title: "About Us",
      description: "Learn more about our company and values.",
    },
    {
      path: "/services",
      title: "Our Services",
      description: "Explore the services we offer to our customers.",
    },
    {
      path: "/products",
      title: "Products",
      description: "Discover our product catalog and find what you need.",
    },
    {
      path: "/contact",
      title: "Contact Us",
      description: "Get in touch with us for any inquiries or support.",
    },
  ];

  return (
    <nav>
      <div
        className="md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? (
          <IoMdClose className="text-2xl" />
        ) : (
          <AiOutlineMenuFold className="text-2xl " />
        )}
      </div>

      <ul className={`md:flex gap-5 duration-1000
      ${open ? "top-24" : "-top-60"}
       
         absolute`}>

        {routes.map((route) => (
          <Link key={route.title} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;