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
    <div className="grid grid-cols-2 pt-6 ">
      <div className="flex justify-start group">
        <div className="inline-block ">
          <FontAwesomeIcon
            className={
              "mr- transition-transform transform translate-x-0 group-hover:translate-x-[-4px]" +
              className
            }
            icon={faChevronLeft}
          />
        </div>
        <button className="w-1/3 group ml-2 text-left" onClick={onLeftButtonClick}>
          {leftButtonLabel}
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={onRightButtonClick}
          className={
            "bg-black text-white px-8 py-3 w-full text-sm text-center font-semibold  hover: cursor-pointer hover:scale-105 transform transition-transform" +
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
