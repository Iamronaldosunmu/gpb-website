import BillingAddress from "../BillingAddress";
import SaveInfo from "../SaveInfo";

const OfflinePayment = () => {
  return (
    <>
      <div className="pt-7 w-full ml-auto">
        <div className="rounded-lg border mb-8 bg-gray-200 ml-auto w-full px-9 pt-9 pb-3  font-semibold">
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
    </>
  );
};

export default OfflinePayment;
