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
    <div className="border-t sm:px-8">
      <div className="max-w-screen-xl mx-auto py-20 grid xl:grid-cols-5 sm:grid-cols-2 sm:gap-8 text-slate-600 text-[15px]">
        <div className="flexCol gap-2">
          <div className="flexStart text-xl gap-2 font-[600] text-slate-900">
            <div className="text-2xl pb-1">
              <IoBagHandle />
            </div>
            <span className="">Dokan.</span>
          </div>
          <div>
            <ul className="flexCol items-start gap-3 pt-2">
              {socialLinks.map(({ id, name, icon }) => (
                <li
                  key={id}
                  className="cursor-pointer hover:text-slate-800 flexCenter gap-2"
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
          <ul className="flexCol gap-3">
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
          <ul className="flexCol gap-3">
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
          <ul className="flexCol gap-3">
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
          <ul className="flexCol gap-3">
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
