import {
  socialLinks,
  gettingStarted,
  explore,
  resources,
  community,
} from "../../data/footerMenu";
import { IoBagHandle } from "../../assets";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="max-w-screen-xl mx-auto py-20 grid grid-cols-5 text-slate-600 text-[15px]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start items-center text-xl gap-2 font-[600] text-slate-900">
            <div className="text-2xl pb-1">
              <IoBagHandle />
            </div>
            <span className="">Dokan.</span>
          </div>
          <div>
            <ul className="flex flex-col gap-3 pt-2">
              {socialLinks.map(({ id, name, icon }) => (
                <li
                  key={id}
                  className="cursor-pointer hover:text-slate-800 flex flex-center items-center gap-2"
                >
                  <span>{icon}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-slate-800 font-[600] pb-4">Getting started</h3>
          <ul className="flex flex-col gap-3">
            {gettingStarted.map(({ id, name }) => (
              <li key={id} className="cursor-pointer hover:text-slate-800">
                {" "}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-slate-800 font-[600] pb-4">Explore</h3>
          <ul className="flex flex-col gap-3">
            {explore.map(({ id, name }) => (
              <li key={id} className="cursor-pointer hover:text-slate-800">
                {" "}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-slate-800 font-[600] pb-4">Resources</h3>
          <ul className="flex flex-col gap-3">
            {resources.map(({ id, name }) => (
              <li key={id} className="cursor-pointer hover:text-slate-800">
                {" "}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-slate-800 font-[600] pb-4">Community</h3>
          <ul className="flex flex-col gap-3">
            {community.map(({ id, name }) => (
              <li key={id} className="cursor-pointer hover:text-slate-800">
                {" "}
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
