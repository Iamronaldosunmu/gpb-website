
import Button from "../Button";

const OrderReview = () => {
  const handleLeftButtonClick = () => {
    console.log("yayyyy");
  };
  const handleRightButtonClick = () => {
    console.log("righty");
  };
  return (
    <div>
      <div className="pb-9 mb-10 p-4">
        <h2 className="font-semibold md:text-3xl text-2xl mb-7 mt-9 pt-9">
          Review and place order
        </h2>
        <p className=" text-sm mb-5">
          Review the order details above, and place your order when you are
          ready.
        </p>

        <div>
          <div className="my-7">
            <input
              type="checkbox"
              id="privacyPolicy"
              className="form-checkbox focus:ring-black-900 checked:bg-black-900 h-6 w-6"
            />
            <label htmlFor="privacyPolicy" className="ml-3">
              I agree to the Privacy Policy and Return Policy
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="communication"
              className="form-checkbox focus:ring-black-900 checked:bg-black-900 h-6 w-6"
            />
            <label htmlFor="communication" className="ml-3">
              I agree to receive marketing communications via email and/or SMS
              to any emails and phone numbers added above
            </label>
          </div>
        </div>
      </div>

      <Button
        leftButtonLabel="return to shipping"
        rightButtonLabel="place order "
        onLeftButtonClick={handleLeftButtonClick}
        onRightButtonClick={handleRightButtonClick}
        className=""
      ></Button>
    </div>
  );
};

export default OrderReview;
