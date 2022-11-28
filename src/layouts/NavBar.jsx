import { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavButton } from "../components/NavItem";

//logo
import logo from "../assets/truckpng.png";

//components
import ContactUs from "../components/ContactUs";
import Drawer from "./Drawer";
import Footer from "./Footer";

const NavBar = () => {
  //modal schedule
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);

  return (
    <>
      <div className="font-ubuntu">
        <Drawer
          open={openDrawer}
          handleClose={handleCloseDrawer}
          handleOpen={handleOpen}
        />
        <ContactUs open={open} handleClose={handleClose} />
        <nav className="relative z-20 bg-gradient-to-r from-pink-500 to-purple-400 px-2 sm:px-4 border-gray-200 py-2.5 rounded-lg mt-5 mx-5">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="" className="flex items-center">
              <img src={logo} className="h-6 sm:h-9" alt="Delicream Logo" />
              <span className="self-center text-xl font-medium font-pacifico whitespace-nowrap">
                Deli Cream
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={handleOpenDrawer}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#7f00b2"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm">
                <li>
                  <NavButton redirectTo="/" inputName="Inicio"></NavButton>
                </li>
                <li>
                  <NavButton
                    redirectTo="/catalogo"
                    inputName="Catalogo"
                  ></NavButton>
                </li>
                <li>
                  <NavButton
                    redirectTo="/ubicaciones"
                    inputName="Encuentranos"
                  ></NavButton>
                </li>
                <li>
                  {/* esto debe de abrir un modal cambiar */}
                  <a
                    href="#horario"
                    onClick={handleOpen}
                    className="block py-2 pl-3 pr-4 text-white rounded hover:border-b-4 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 font-semibold transition-all duration-400 ease-in-out"
                  >
                    Horario De Atencion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section
          className="mt-20 overflow-x-hidden overflow-auto"
          onClick={handleCloseDrawer}
        >
          <Outlet></Outlet>
        </section>

        <Footer></Footer>
      </div>
    </>
  );
};

export default NavBar;
