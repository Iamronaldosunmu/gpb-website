const BillingAddress = () => {
  return (
    <>
      <div className=" w-full  md:my-8 md:pb-5">
        <h2 className="font-semibold md:text-3xl text-2xl md:mb-9 mb-5 pb-2">Billing address </h2>
        <div className=" border border-black text-sm font-semibold">
          <div className=" flex p-4 md:m-2 justify-between">
            <div className="">
              <input
                id="onlinePayment"
                type="radio"
                className="mr-4"
                value="online"
              />
              <label htmlFor="onlinePayment">same as billing address</label>
            </div>
            <div>
              <a href="">change</a>
              <div className="border-b border-black"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
