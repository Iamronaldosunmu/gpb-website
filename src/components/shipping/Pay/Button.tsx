import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  leftButtonLabel: string;
  rightButtonLabel: string;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
  className?: string;
}

const Button = ({
  leftButtonLabel,
  rightButtonLabel,
  onLeftButtonClick,
  onRightButtonClick,
  className,
}: ButtonProps) => {
  return (
    <div className="grid grid-cols-2 pt-6 px-4 ">
      <div className="flex justify-start group">
        <div className="inline-block mt-1 sm:mt-0">
          <FontAwesomeIcon
            className={
              "mr- transition-transform transform translate-x-0 group-hover:translate-x-[-4px]" +
              className
            }
            icon={faChevronLeft}
          />
        </div>
        <button className="md:w-1/4 lg:w-1/2 sm:w-1/4 group ml-2 w-1/2 md:text-lg lg:text-current text-left" onClick={onLeftButtonClick}>
          {leftButtonLabel}
        </button>
      </div>
      <div className="flex justify-end flex-shrink-0">
        <button
          type="submit"
          onClick={onRightButtonClick}
          className={
            "bg-black text-white px-2 lg:px-2  md:px-8 py-3 w-full md:text-sm lg:text-sm text-xs text-center font-semibold  hover: cursor-pointer hover:scale-105 transform transition-transform" +
            className
          }
        >
          {rightButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default Button;
