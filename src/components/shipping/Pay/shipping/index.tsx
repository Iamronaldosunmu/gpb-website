import { useState } from "react";
import Button from "../Button";
import Payment from "../index";
import Form from "../../Form/index";

interface Props {
  email: string;
  address: string;
  shippingAddressDetails: string;
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
        <div className="w-[27rem] ml-auto max-w-md pt-4 flex-grow ">
          <div className="mx-auto border text-sm border-black font-semibold w-full mb-12 ">
            <div className=" flex p-4 pt-0 m-2 justify-between items-center">
              {" "}
              <p>Contact</p>
              <p>{email}</p>
              <div>
                <a href="">change</a>
                <div className="border-b border-black"></div>
              </div>
            </div>
            <div className="border-b mx-auto border-b-black"></div>
            <div className="flex p-4 pt-0 m-2 justify-between items-center">
              <p>ship to</p>
              <p>{address}</p>
              <div>
                <a href="">change</a>
                <div className="border-b border-black"></div>
              </div>
            </div>
          </div>
          <div className="mb-20">
            <h2 className="text-2xl pb-5 mb-2 font-bold">Shipping Method</h2>
            <div className="border border-black pt-7 px-7 h-[8rem] w-full">
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
