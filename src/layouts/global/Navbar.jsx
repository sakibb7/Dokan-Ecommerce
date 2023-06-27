import { Link } from "react-router-dom";
import {
  IoBagHandle,
  CiSearch,
  AiOutlineUser,
  IoCartOutline,
} from "../../assets";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Navabar = () => {
  const { getTotalCartItem } = useContext(ShopContext);
  const totalItem = getTotalCartItem();
  return (
    <nav className=" sticky top-0 w-full z-50 bg-white border-b py-1">
      <div className="flexBetween max-w-screen-xl mx-auto">
        {/* Desktop menubar */}
        <div className="xl:flex sm:hidden justify-between items-center w-full">
          <Link to="/">
            <div className="flexCenter text-2xl gap-2 font-[600] items-center">
              <div className="text-4xl pb-1">
                <IoBagHandle />
              </div>
              <span className="">Dokan.</span>
            </div>
          </Link>
          <div>
            <NavLinks />
          </div>
          <div className="flexCenter gap-6 text-2xl">
            <div className="cursor-pointer">
              <CiSearch />
            </div>
            <div className="cursor-pointer text-slate-600">
              <AiOutlineUser />
            </div>
            <Link to="/cart">
              <div className="relative cursor-pointer text-slate-600">
                <IoCartOutline />
                <div className="text-zinc-50 bg-sky-500/75 absolute bottom-4 left-4 text-xs rounded-full px-2 py-1 font-[600]">
                  {totalItem}
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile menubar */}
        <div className="flex xl:hidden justify-between itmes-center sm:gap-12 py-4 sm:px-4 w-full">
          <Link to="/">
            <div className="flexCenter text-xl gap-2 font-[600]">
              <div className="text-3xl pb-1">
                <IoBagHandle />
              </div>
              <span className="">Dokan.</span>
            </div>
          </Link>
          <div className="flexCenter gap-6 text-xl">
            <div className="cursor-pointer">
              <CiSearch />
            </div>
            <div className="cursor-pointer text-slate-600">
              <AiOutlineUser />
            </div>
            <Link to="/cart">
              <div className="relative cursor-pointer text-slate-600">
                <IoCartOutline />
                <div className="text-zinc-50 bg-sky-500/75 absolute bottom-4 left-4 text-xs rounded-full px-2 py-1 font-[600]">
                  {totalItem}
                </div>
              </div>
            </Link>
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
