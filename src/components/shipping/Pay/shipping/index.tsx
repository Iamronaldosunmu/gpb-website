import { useState } from "react";
import Button from "../Button";
import Payment from "../index";
import { Form } from "react-router-dom";

interface Props {
  email: string;
  address: string;
  shippingAddressDetails: string;
}

const Shipping = ({ email, address, shippingAddressDetails }: Props) => {
  const [showPayment, setShowPayment] = useState(false);
  const [page, setPage] = useState("shipping");

  const handleLeftButtonClick = () => {
    setPage("form");
  };
  const handleRightButtonClick = () => {
    setShowPayment(true);
  };

  return (
    <>
      {page === "shipping" && (
        <div className="w-[27rem] mx-auto max-w-md pt-4 ">
          <div className="mx-auto border text-sm border-black font-semibold w-full mb-12 ">
            <div className=" flex p-4 m-2 justify-between items-center">
              <div>
                {" "}
                <p>Contact</p>
              </div>
              <div>
                <p>{email}</p>
              </div>
              <div>
                <a href="">change</a>
                <div className="border-b border-black"></div>
              </div>
            </div>
            <div className="border-b  border-b-black"></div>
            <div className="flex p-4 m-2 justify-between">
              <div>
                <p>ship to</p>
              </div>
              <div>
                <p>{address}</p>
              </div>
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
          <Button
            leftButtonLabel="return to information"
            rightButtonLabel="continue to payment"
            onLeftButtonClick={handleLeftButtonClick}
            onRightButtonClick={handleRightButtonClick}
            className=""
          ></Button>
        </div>
      )}
      {showPayment && page === "shipping" && <Payment />}

      {page === "form" && (
        <div>
          <Form />
        </div>
      )}
    </>
  );
};

export default Shipping;
