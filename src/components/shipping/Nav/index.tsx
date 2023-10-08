import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navItems = ["Cart", "Information", "Shipping", "Payment"];
  return (
    <nav className="md:p-4  pl-0">
      <div className="container ml-auto flex items-center justify-center relative">
    
          <button className=" absolute top-0 py-2 group lg:absolute lg:left-0 ">
            <FontAwesomeIcon
              className="mr-2 transition-transform transform translate-x-0  group-hover:translate-x-[-4px]"
              icon={faChevronLeft}
            />
            Continue Shipping
          </button>
      
        <div className="mt-14 lg:mt-0">
          <h2 className="font-bold mb-1 mx-4 flex justify-center">GRAPES PATTERN BANK</h2>
          <div className="text-xs md:text-lg flex justify-center ">
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

