import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navItems = ["Cart", "Information", "Shipping", "Payment"];
  return (
    <nav className="p-4 pl-0">
      <div className="container ml-auto flex items-center justify-center relative">
        <button className=" absolute left-[20px] py-2 group">
          <FontAwesomeIcon
            className="mr-2 transition-transform transform translate-x-0  group-hover:translate-x-[-4px]"
            icon={faChevronLeft}
          />
          Continue Shipping
        </button>
        <div>
          <h2 className="font-bold text-lg mb-1 mx-4">GRAPES PATTERN BANK</h2>
          <div className="text-1xl ">
            <ul className="list-none p-0 font-semibold">
              {navItems.map((item, index) => (
                <li className="cursor-pointer inline-block mr-1" key={index}>
                  <span className="hover:text-gray-400">{item}</span>
                  {index !== navItems.length - 1 ? " / " : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
