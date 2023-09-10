import { useState, ChangeEvent } from "react";
import OnlinePaymentForm from "./OnlinePayment";
import OfflinePayment from "./OfflinePayment";

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState("");


  const handleSelectedPayment = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  return (
    <>
  
      <div className="w-[27rem] mx-auto">
        <div className="w-full mx-auto my-8">
          <h2 className="font-bold text-3xl mb-9 ">Payment</h2>
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
                  className="ml- h-full"
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
                <img src="/assets/images/offline.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[27rem] mx-auto">
        {selectedPayment === "online" && <OnlinePaymentForm />}
        {selectedPayment === "offline" && <OfflinePayment />}
      </div>
    </>
  );
};

export default Payment;
