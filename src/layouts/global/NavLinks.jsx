import { useState } from "react";
import GiftCard from "../../components/home/GiftCard";
import { mainMenu } from "../../data/menuItems";
import { Link } from "react-router-dom";

import {
  dog,
  MdOutlineKeyboardArrowDown,
  AiOutlineClose,
  RxHamburgerMenu,
} from "../../assets";

const NavLinks = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <ul className="xl:flex sm:hidden items-center gap-10 text-[15px] font-[500]">
        {mainMenu.map(({ id, name, link, subMenu, subLinks }) => (
          <div className="group py-6 text-slate-700" key={id}>
            <li className="">
              <Link to={link}>
                <div className="flexCenter">
                  <div>{name} </div>
                  <div className="text-2xl text-slate-400">
                    {subMenu && <MdOutlineKeyboardArrowDown />}
                  </div>
                </div>
              </Link>
            </li>
            {subMenu && (
              <div className="absolute hidden bg-white group-hover:block hover:block inset-x-0 top-full drop-shadow-md pb-5">
                <div className=" pt-5 max-w-screen-xl mx-auto border-t border-slate-200 flexBetween gap-20">
                  <div className=" grid grid-cols-4 gap-10 w-[62%] text-sm">
                    {subLinks.map(({ title, sublink }) => (
                      <div key={title}>
                        <h1 className="headingSix pb-3">{title}</h1>
                        <div>
                          <ul className="">
                            {sublink.map(({ id, name, link }) => (
                              <li
                                key={id}
                                className="py-2 text-slate-500 hover:text-slate-600"
                              >
                                <Link to={link}>{name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[38%] py-4">
                    <div className="bg-cyan-300 rounded-[15px]">
                      <GiftCard
                        title="Sale Collection"
                        heading="Up to 80% off retail"
                        image={dog}
                      />
                    </div>
                    <div>
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul className="xl:hidden flex flex-1 justify-end items-center py-2">
        <div
          className="pt-1 text-lg cursor-pointer text-slate-700"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col p-6 bg-white absolute top-20 right-0 min-w-[50%]`}
        >
          {mainMenu.map(({ id, name, link, subMenu }) => (
            <div className="group py-6 border-b text-slate-700" key={id}>
              <li className="">
                <Link to={link}>
                  <div className="flexCenter">
                    <div>{name} </div>
                    <div className="text-2xl text-slate-400">
                      {subMenu && <MdOutlineKeyboardArrowDown />}
                    </div>
                  </div>
                </Link>
              </li>
              {/* {subMenu && (
                <div className="absolute hidden bg-white group-hover:block hover:block inset-x-0 top-full drop-shadow-md pb-5">
                  <div className=" pt-5 max-w-screen-xl mx-auto border-t border-slate-200 flex flex-col">
                    <div className=" flex flex-col text-sm">
                      {subLinks.map(({ title, sublink }) => (
                        <div key={title}>
                          <h1 className="headingSix pb-3">{title}</h1>
                          <div>
                            <ul className="">
                              {sublink.map(({ id, name, link }) => (
                                <li
                                  key={id}
                                  className="py-2 text-slate-500 hover:text-slate-600"
                                >
                                  <Link to={link}>{name}</Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </ul>
    </>
  );
};

export default NavLinks;
