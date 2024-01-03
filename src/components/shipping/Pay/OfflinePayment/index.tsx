const OfflinePayment = () => {
  return (
    <>
      <div className="pt-7 p-4 w-full ">
        <div className="rounded-lg border mb-8 bg-gray-200  w-full md:px-9 sm:px-4 px-2 pt-9 pb-5 flex flex-col">
          <div className="md:text-[18px]">
            <p>Hello! Having trouble paying online?</p>
          </div>
          <div className="mt-[10px]">
            <p>Please pay into: </p>
          </div>
          <div className="mt-[10px]">
            <p> Access(diamond) Bank <br /> Grapehall ltd 0050698843 <br /> (naira payments only) </p>
          </div>
          <div className="mt-[10px]">
            <p>Access (diamond) Bank <br /> Grapehall ltd 1480377181 <br /> (dollar payments only) </p>
          </div>
          <div className="mt-[12px]">
            <p className="flex flex-wrap">
              Please send payment receipt to <a className="underline text-[blue]" href="mailto:info@grapespatternbank.com">info@grapespatternbank.com</a>
            </p>
          </div>
          <p className="mt-[20px] text-[18px]">Thank you for shopping with us!</p>
        </div>
      </div>
      
      
    </>
  );
};

export default OfflinePayment;
