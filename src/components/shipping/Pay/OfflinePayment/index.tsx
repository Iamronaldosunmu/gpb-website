// import BillingAddress from "../BillingAddress";
// import SaveInfo from "../SaveInfo";

const OfflinePayment = () => {
  return (
    <>
      <div className="pt-7 p-4 w-full ">
        <div className="rounded-lg border mb-8 bg-gray-200  w-full md:px-9 sm:px-4 px-2 pt-9 pb-5">
          <div>
            <p>Hello! Having trouble paying online?</p>
          </div>
          <div>
            <p>Please pay into </p>
          </div>
          <div>
            <p> Access(diamond) Bank Grapehall ltd 0050698843 (naira payments only) </p>
          </div>
          <div>
            <p>Access (diamond) bank Grapehall ltd 1480377181 (dollar payments only) </p>
          </div>
          <div>
            <p>
              Please send payment receipt to
              <a href="mailto:info@grapespatternbank.com">info@grapespatternbank.com</a>
            </p>
          </div>
          <p>Thank you for shopping with us!</p>
        </div>
        {/* <SaveInfo />
        <BillingAddress /> */}
      </div>
      
      
    </>
  );
};

export default OfflinePayment;
