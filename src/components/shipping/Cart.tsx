import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import img from '../Images/item.png'

interface Item {
  name: string;
  color: string;
  exclusivity: boolean;
  imageUrl?: string;
  price: number;
  isFree: boolean;
  shippingFee?: number;
}

const Cart = ({ items }: { items: Item[] }) => {
  const subTotal = items.reduce((total, item) => total + item.price, 0);

  const totalShippingFee = items
    .filter((item) => !item.isFree) // so here i'm dropping items that don;t have shipping fee i.e they are free
    .reduce((total, item) => total + (item.shippingFee || 0), 0);

  const taxRate = 0.1;
  const tax = subTotal * taxRate;

  const totalCost = subTotal + totalShippingFee + tax;

  return (
    <div className="bg-red-100 rounded shadow-lg flex-grow p-4 max-w-md  my-4">
      <div className="flex justify-between mb-1">
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        <a className="underline" href="#">
          Edit cart
        </a>
      </div>
      <div className="border-b border-b-black"></div>

      {items.map((item, index) => (
        <div key={index} className="flex p-4 ">
          <div className="w-1/4">
            <img
              src={img}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
          </div>
          <div className="w-3/4 pl-4">
            <h3 className="text-base font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">COLOR: {item.color}</p>
            <p className="text-sm text-gray-600">
              EXCLUSIVITY: {item.exclusivity ? "YES" : "NO"}
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">N{item.price}</p>
          </div>
        </div>
      ))}

      <div className="mb-7">
        <input
          id="apply"
          className="w-80 border py-3 px-3 mr-1 focus:border-none"
          placeholder="Enter gift code or voucher"
          type="text"
        />
        <button className="bg-black text-white px-5 py-3 text-center hover:cursor-pointer">
          Apply
        </button>
      </div>

      <div className="border-b mb-7 border-b-black"></div>

      <div className="flex justify-between text-lg mb-7 font-semibold">
        <div>
          <p>SubTotal:</p>
          <p>Shipping:</p>
          <p>Tax:</p>
        </div>
        <div>
          <p>N{subTotal}</p>
          <p>{totalShippingFee > 0 ? `N${totalShippingFee}` : "Free"}</p>
          <p>N{tax}</p>
        </div>
      </div>
      <div className="border-b mb-7 border-b-black"></div>

      <div className="flex justify-between text-lg mb-[3rem]  font-semibold">
        <div>
          <p className="text-2xl font-bold">Total</p>
        </div>
        <div>
          <p>N{totalCost}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="font-bold text-lg">
        <FontAwesomeIcon icon={faLock} className="ml-2" />

          Secure Checkout
        </p>
      </div>
    </div>
  );
};

export default Cart;
