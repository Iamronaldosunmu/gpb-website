import { useState, ChangeEvent } from "react";
import OnlinePaymentForm from "./OnlinePayment";
import OfflinePayment from "./OfflinePayment";
import Button from "./Button";
import OrderReview from "./OrderReview";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [showPayment, setShowPayment] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const [showReview, setShowReview] = useState(false);


  const handleSelectedPayment = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  const handleLeftButtonClick = () => {
    setShowPayment(false)

  };

  const handleRightButtonClick = () => {
    setShowReview(true);
    setShowButton(false);
    
  };

  return (
    <>
      {showPayment && (
        <div className="w-full p-4">
          <div className="w-full my-8">
            <h2 className="font-semibold md:text-3xl text-2xl mb-9 ">Payment</h2>
            <div className="border border-black text-xs font-semibold">
              <div className="flex p-2 m-2 justify-between ">
                <div>
                  <input
                    id="onlinePayment"
                    type="radio"
                    className="mr-2"
                    value="online"
                    name="paymentOption"
                    checked={selectedPayment === "online"}
                    onChange={handleSelectedPayment}
                  />
                  <label htmlFor="onlinePayment">Credit/debit cards</label>
                </div>
                <div className="mx-2">
                  <img
                    src="/assets/images/online.png"
                    alt=""
                    className="w-20 sm:w-full object-fit h-full "
                  />
                </div>
              </div>
              <div className="border-b border-b-black m-2"></div>
              <div className="flex m-2 p-2 justify-between">
                <div>
                  <input
                    type="radio"
                    id="offlinePayment"
                    className="mr-2"
                    value="offline"
                    name="paymentOption"
                    checked={selectedPayment === "offline"}
                    onChange={handleSelectedPayment}
                  />
                  <label htmlFor="offlinePayment">Offline Payment</label>
                </div>
                <div className="mx-2">
                  <img src="/assets/images/offline.png " alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="w-full">
        {selectedPayment === "online" && <OnlinePaymentForm />}
        {selectedPayment === "offline" && <OfflinePayment />}
        {showButton && (
          <Button
            leftButtonLabel="return to shipping"
            rightButtonLabel="continue to payment"
            onLeftButtonClick={handleLeftButtonClick}
            onRightButtonClick={handleRightButtonClick}
            className=""
          ></Button>
        )}
        {showReview && <OrderReview />}
      </div>
    </>
  );
};

export default Payment;

