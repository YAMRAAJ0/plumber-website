"use client";
import "@fontsource/nunito";
import "@fontsource/nunito/700.css";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const handleNavigate = async (courseName: string) => {
    const encodedText = encodeURIComponent(courseName);
    router.push(`/service?service=${encodedText}`);
  };

  const services = [
    {
      label: "Hot Water System",
      drop: ["Gas", "Electric", "Heat Bank"],
    },
    { label: "Leakage Detection" },
    { label: "Commercial Plumbing" },
    { label: "Industrial Plumbing" },
    { label: "Residential Plumbing" },
    { label: "Remote Area Plumbing" },
    { label: "Bathroom Kitchen" },
    { label: "Any Other Requests" },
  ];

  return (
    <header className="bg-[#FCF8E8] shadow-lg  shadow-black-500/50 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between   pl-4 md:pl-6">
        {/* Logo Section */}
        <Link href="/" rel="noopener noreferrer">
          <div className="flex items-center space-x-3">
            <img
              src="HeaderImg/image 197.png"
              alt="Company Logo"
              className="w-16 h-16 md:w-24 md:h-24 object-contain"
            />
            <h2 className="text-[#3E180E] font-bold text-md md:text-sm">
              Central Territory <br /> Plumbing Pty Ltd
            </h2>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3E180E] text-2xl pr-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center text-center text-xl gap-24 py-0">
          <a
            href="about"
            className="relative text-[#3E180E] py-4 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#3E180E] after:transition-all after:duration-300 hover:after:w-full"
          >
            ABOUT
          </a>

          {/* Services Dropdown */}
          <div className="relative">
            {/* Main SERVICES Button */}
            <div
              className="flex text-[#3E180E] text-lg py-4 cursor-pointer"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              SERVICES
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Services Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-56 bg-[#F9F7E9] shadow-xl text-left z-10"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((item, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        item.drop && setOpenSubMenu(item.label)
                      }
                      onMouseLeave={() => item.drop && setOpenSubMenu(null)}
                    >
                      {/* Parent Service */}
                      <div
                        className="block px-4 py-2 text-[#3E180E] text-sm hover:bg-[#FF8239] transition-all cursor-pointer justify-between items-center"
                        onClick={() =>
                          !item.drop &&
                          handleNavigate(
                            item.label
                              .replace(/\s+/g, " ")
                              .trim()
                              .replace(/\s/g, "")
                          )
                        }
                      >
                        <div className="flex items-center justify-between w-full">
                          {item.label} {item.drop && <ChevronRight size={16} />}
                        </div>
                      </div>
                      {/* Nested Dropdown for Hot Water System */}
                      {item.drop && openSubMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute left-full top-0 w-40 bg-[#F9F7E9] shadow-md z-20"
                        >
                          {item.drop.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="px-4 py-2 text-[#3E180E] text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                              onClick={() =>
                                handleNavigate(
                                  subItem
                                    .replace(/\s+/g, " ")
                                    .trim()
                                    .replace(/\s/g, "")
                                )
                              }
                            >
                              {subItem}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="contact"
            className="bg-[#3E180E] text-white font-extralight px-6 py-9  bg-gradient-to-r from-[#76200F] to-[#A53C27]"
          >
            CONTACT US
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="w-full bg-[#FCF8E8] flex flex-col items-center space-y-4 shadow-md">
          <a
            href="about"
            className="text-[#3E180E] font-bold text-lg py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </a>

          {/* Services Dropdown (Mobile) */}
          <div className="relative w-full text-center">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-[#3E180E] font-bold text-lg py-3 w-full"
            >
              SERVICES {isServicesOpen ? "▲" : "▼"}
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-[#FCF8E8]  shadow-md rounded-md w-full px-4 py-2 space-y-2"
                >
                  {services.map((item, index) => (
                    <div key={index} className="text-left">
                      {/* Parent Service */}
                      <div
                        className="flex justify-center text-center items-center  px-4 py-2 text-[#3E180E] text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                        onClick={() => {
                          if (item.drop) {
                            setOpenSubMenu(
                              openSubMenu === item.label ? null : item.label
                            );
                          } else {
                            handleNavigate(
                              item.label.replace(/\s+/g, "").trim()
                            );
                            setIsMenuOpen(false);
                          }
                        }}
                      >
                        {item.label}
                        {item.drop && (
                          <ChevronRight
                            size={16}
                            className={`transition-transform ${openSubMenu === item.label ? "rotate-90" : ""}`}
                          />
                        )}
                      </div>

                      {/* Sub-options */}
                      {item.drop && openSubMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="pl-6 space-y-1"
                        >
                          {item.drop.map((subItem, subIndex) => (
                            <div
                              key={subIndex}
                              className="px-4 py-2 text-[#3E180E] justify-center text-center items-center text-sm hover:bg-[#FF8239] transition-all cursor-pointer"
                              onClick={() => {
                                handleNavigate(
                                  subItem.replace(/\s+/g, "").trim()
                                );
                                setIsMenuOpen(false);
                              }}
                            >
                              {subItem}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="contact"
            className="bg-[#3E180E] text-white font-bold px-4 py-3 w-full text-center bg-gradient-to-r from-[#76200F] to-[#A53C27]"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </a>
        </div>
      )}
    </header>
  );
}
