const BillingAddress = () => {
  return (
    <>
      <div className=" w-full mx-auto my-8 pb-5">
        <h2 className="font-bold text-3xl mb-9 pb-2">Billing address </h2>
        <div className=" border border-black text-sm font-semibold">
          <div className=" flex p-4 m-2 justify-between">
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
