import img from "../Images/online.png";
import offlineImage from "../Images/offline.png";
const Payment = () => {
  return (
    <>
      <div className="p-4 w-[28rem] mx-auto my-8">
        <h2 className="font-bold text-3xl mb-5">Payment</h2>
        <div className=" border border-black text-sm">
          <div className=" flex p-2 m-2 justify-between">
            <div className="">
              <input id="onlinePayment" type="radio" className="mr-2" />
              <label htmlFor="onlinePayment">Credit/debit cards</label>
            </div>
            <div className="mx-2">
              {" "}
              <img src={img} alt="" />
            </div>
          </div>
          <div className="border-b border-b-black m-2"></div>

          <div className="flex m-2 p-2 justify-between">
            <div>
              <input type="radio" id="offlinePayment" className="mr-2" />
              <label htmlFor="offlinePayment">Offline Payment</label>
            </div>
            <div className="mx-2">
              <img src={offlineImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
