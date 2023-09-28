import { useState } from "react";
import Button from "../Button";
import Payment from "../index";
import Form from "../../Form/index";

interface Props {
  email?: string;
  address?: string;
  shippingAddressDetails?: string;
}

const Shipping = ({ email, address, shippingAddressDetails }: Props) => {
  const [showPayment, setShowPayment] = useState(false);
  const [page, setPage] = useState("shipping");
  const [showButton, setShowButton] = useState(true);

  const handleLeftButtonClick = () => {
    setPage("form");
    setShowButton(false);
  };
  const handleRightButtonClick = () => {
    setShowPayment(true);
    setShowButton(false);
  };

  return (
    <>
      {page === "shipping" && (
        <div className="p-4 ">
          <div className=" border sm:text-sm text-xs  border-black font-semibold  mb-12 ">
            <div className="flex justify-between items-center md:p-4 pt-0 m-2 mt-4">
              {" "}
              <p className="mr-3">Contact</p>
              <div className="mr-3">
                  <p className="w-full break-all">{email}</p>
              </div>
              <div>
                <a href="">change</a>
                <div className="border-b border-black"></div>
              </div>
            </div>

            <div className="border-b border-b-black"></div>
            <div className="flex md:p-4 pt-0 m-2 justify-between items-center">
              <p className="mr-2 whitespace-nowrap">ship to</p>
              <p className="mr-2">{address}</p>
              <div>
                <a href="">change</a>
                <div className="border-b border-black"></div>
              </div>
            </div>
          </div>
          <div className="md:mb-20">
            <h2 className="text-2xl pb-5 mb-2 font-bold">Shipping Method</h2>
            <div className="border border-black pt-4 md:pt-7 md:px-7 px-3 h-[8rem]">
              {shippingAddressDetails}
            </div>
          </div>
          <div>
            {showButton && (
              <Button
                leftButtonLabel="return to information"
                rightButtonLabel="continue to payment"
                onLeftButtonClick={handleLeftButtonClick}
                onRightButtonClick={handleRightButtonClick}
                className=""
              ></Button>
            )}
          </div>
        </div>
      )}
      {page === "form" && (
        <div>
          <Form />
        </div>
      )}

      {showPayment && <Payment />}
    </>
  );
};

export default Shipping;
