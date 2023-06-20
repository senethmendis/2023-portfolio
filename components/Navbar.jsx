"use client";
import Image from "next/image";
import Link from "next/link";
import profileImg from "../public/gitProfile.png";
import { NavbarItems } from "@/public/Index";
import { SocialIcon } from "../public/Index";
import { useEffect, useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";


export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [bgEffect, setBgEffect] = useState(false);

  useEffect(() => {
    const handleBg = () => {
      if (window.screenY >= 100) {
        setBgEffect(true);
      } else {
        setBgEffect(false);
      }
    };

    window.addEventListener("scroll", handleBg);
  }, []);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div
      className={
        "sticky top-0 left-0 right-0 py-3 px-1 sm:px-5 flex justify-between items-center mx-auto bg-black/20 z-50  border-b backdrop-blur-xl max-w-[1240px]"
      }
    >
      <h1 className="text-2xl font-bold md:3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Seneth <span className=" sm:text-2xl md:3xl">Mendis</span>
      </h1>
      <div className="flex gap-5">
        <ul className="hidden md:flex flex-row gap-8 capitalize items-center">
          {NavbarItems.map((items) => (
            <li
              key={items.id}
              className="hover:border-b duration-500 ease-in-out"
            >
              <Link href={items.link}>{items.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden mx-auto sm:flex justify-center gap-3 items-center">
            <div className="">|</div>
            {SocialIcon.map((items) => (
              <a
                key={items.id}
                target="_blank"
                href={items.profileUrl}
                className="rounded-full hover:bg-purple-600"
              >
                {items.icon}{" "}
              </a>
            ))}
          </div>

          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-t from-purple-600/80 to-purple-950/80 backdrop-blur-lg  p-10 ease-in duration-500"
                : "fixed left-[-100%] h-screen top-0 p-10 ease-in duration-300 "
            }
          >
            <div className="flex w-full items-center justify-end">
              <AiFillCloseSquare
                onClick={handleNav}
                size={50}
                className="cursor-pointer"
              />
            </div>
            <div className="w-full h-[50%] list-none flex flex-col gap-5  items-start capitalize">
              {NavbarItems.map((items) => (
                <li
                  key={items.id}
                  className="hover:border-b duration-300 ease-in-out"
                >
                  <Link href={""}>{items.name}</Link>
                </li>
              ))}
            </div>
          </div>
          
          <Image
            src={profileImg}
            width={40}
            height={40}
            alt="profile img"
            onClick={handleNav}
            priority
            className="rounded-full hover:shadow-md w-auto h-auto cursor-pointer text-white sm:hidden  hover:shadow-purple-600"
          ></Image>
        </div>
      </div>
    </div>
  );
};
