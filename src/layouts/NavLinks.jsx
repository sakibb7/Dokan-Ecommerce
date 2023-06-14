import GiftCard from "../components/GiftCard";
import { mainMenu } from "../data/menuItems";
import { Link } from "react-router-dom";

import { dog, MdOutlineKeyboardArrowDown } from "../assets";

const NavLinks = () => {
  return (
    <>
      <ul className="flex justify-center items-center gap-10 text-base font-[500]">
        {mainMenu.map(({ id, name, link, subMenu, subLinks }) => (
          <div className="group py-6 text-slate-700" key={id}>
            <li className="">
              <Link to={link}>
                <div className="flex justify-center items-center">
                  <div>{name} </div>
                  <div className="text-2xl text-slate-400">
                    {subMenu && <MdOutlineKeyboardArrowDown />}
                  </div>
                </div>
              </Link>
            </li>
            {subMenu && (
              <div className="absolute hidden bg-white group-hover:block hover:block inset-x-0 top-full drop-shadow-md pb-10">
                <div className=" pt-10 max-w-screen-xl mx-auto border-t border-slate-200 flex gap-20 justify-between items-center">
                  <div className="flex-1 grid grid-cols-4 gap-10 w-[65%] text-sm">
                    {subLinks.map(({ title, sublink }) => (
                      <div key={title}>
                        <h1 className="font-bold pb-3">{title}</h1>
                        <div>
                          <ul className="">
                            {sublink.map(({ id, name, link }) => (
                              <li key={id} className="py-3">
                                <Link to={link}>{name}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-[35%]">
                    <div>
                      <GiftCard
                        title="Sale Collection"
                        headingFirst="Up to"
                        headingSecond="80% off retail"
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
    </>
  );
};

export default NavLinks;
