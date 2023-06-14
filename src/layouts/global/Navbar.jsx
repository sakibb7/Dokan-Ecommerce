import {
  IoBagHandle,
  CiSearch,
  AiOutlineUser,
  IoCartOutline,
} from "../../assets";
import NavLinks from "./NavLinks";

const Navabar = () => {
  return (
    <nav className=" sticky top-0 w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex justify-center items-center text-2xl gap-2 font-[600]">
          <div className="text-4xl pb-1">
            <IoBagHandle />
          </div>
          <span className="">Dokan.</span>
        </div>
        <div>
          <NavLinks />
        </div>
        <div className="flex justify-center items-center gap-6 text-2xl">
          <div className="cursor-pointer">
            <CiSearch />
          </div>
          <div className="cursor-pointer text-slate-600">
            <AiOutlineUser />
          </div>
          <div className="relative cursor-pointer text-slate-600">
            <IoCartOutline />
            <div className="text-zinc-50 bg-sky-500/75 absolute bottom-4 left-4 text-xs rounded-full px-2 py-1 font-[600]">
              3
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navabar;
