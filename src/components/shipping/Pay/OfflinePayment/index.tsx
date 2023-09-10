import { useState } from "react";
import BillingAddress from "../BillingAddress";
import Button from "../Button";
import OrderReview from "../OrderReview";
import SaveInfo from "../SaveInfo";

const OfflinePayment = () => {
  const [showReview, setShowReview] = useState(false);

  const handleLeftButtonClick = () => {
    console.log("go to a component");
  };
  const handleRightButtonClick = () => {
    setShowReview(true);
  };
  return (
    <>
      <div className="pt-7 w-full">
        <div className="rounded-lg border mb-8 bg-gray-200 mx-auto w-full px-9 pt-9 pb-3  font-semibold text-">
          <div>
            <p>GRAPEHALL LTD</p>
          </div>
          <div>
            <p>DIAMOND BANK</p>
          </div>
          <div>
            <p>0050698843</p>
          </div>
          <div>
            <p>(Please indicate if you would prefer a UK or US bank account)</p>
          </div>
          <div>
            <p>
              Please send an email to <br />
              info.grapespatternbank@gmail.com with the following information:{" "}
            </p>
          </div>
          <div>
            <ol>
              <li>Print name(s)</li>
              <li>Would you want it to be exclusive to you?</li>
              <li>Do you wish to change any background color</li>
            </ol>
          </div>
          <p>Or you could send a screen shot of the order summary page</p>
        </div>
      </div>
      <SaveInfo />
      <BillingAddress />
      <Button
        leftButtonLabel="return to shipping"
        rightButtonLabel="continue to payment"
        onLeftButtonClick={handleLeftButtonClick}
        onRightButtonClick={handleRightButtonClick}
        className=""
      ></Button>

      {showReview && <OrderReview />}
    </>
  );
};

export default OfflinePayment;
