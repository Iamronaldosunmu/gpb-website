import { useState } from 'react';

interface Item {
  name: string;
  color: string;
  exclusivity: boolean;
  imageUrl?: string;
  price: number;
  isFree: boolean;
  shippingFee?: number;
}

const Order = ({ items }: { items: Item[] }) => {
  // State to keep track of items
  const [cartItems, setCartItems] = useState(items);

  const subTotal = cartItems.reduce((total, item) => total + item.price, 0);

  const totalShippingFee = cartItems
    .filter((item) => !item.isFree)
    .reduce((total, item) => total + (item.shippingFee || 0), 0);

  const taxRate = 0.1;
  const tax = subTotal * taxRate;

  const totalCost = subTotal + totalShippingFee + tax;

  // Event handler to remove an item
  const removeItem = (index: number) => {
    const updatedItems = [...cartItems];
    updatedItems.splice(index, 1);
    setCartItems(updatedItems);
  };

  return (
    <div className="lg:p-20 lg:border border-black rounded-lg lg:rounded-none">
      {cartItems.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between border border-black rounded-lg mb-3 lg:pb-0 lg:mb-0 sm:p-10 p-5 lg:px-0  lg:border-none ${
            index !== cartItems.length - 1 ? 'pb-9' : ''
          }`}
        >
          <div className="flex">
            <div className="sm:mr-5 mr-2 lg:hidden">
              <input type="checkbox" />
            </div>
            <div className="mr-2 lg:mr-7">
              <img
                src={'/assets/images/item.png'}
                alt={item.name}
                className="sm:w-20 sm:h-20 w-16 h-16 object-cover rounded-md lg:rounded-none"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p className="text-xs">COLOR : {item.color}</p>
              <p className="text-xs">EXCLUSIVITY : {item.exclusivity ? 'YES' : 'NO'}</p>
              <p className="text-sm font-semibold lg:hidden">N{item.price}</p>
            </div>
          </div>
          <div className="flex justify-end relative">
            <p className="text-sm font-semibold hidden lg:block">N{item.price}</p>
            <button
              className="lg:hidden underline underline-offset-4 text-sm absolute top-0"
              onClick={() => removeItem(index)}
            >
              remove
            </button>
          </div>
        </div>
      ))}

      <h2 className="mt-20 lg:hidden text-2xl font-semibold">Order summary</h2>
      <div className="border-b lg:mt-9 mt-2 mb-7 border-b-black"></div>
      <div className="flex justify-between text-lg mb-7">
        <div>
          <p>SubTotal</p>
          <p>Shipping</p>
          <p>Tax</p>
        </div>
        <div>
          <p>N{subTotal}</p>
          <p>{totalShippingFee > 0 ? `N${totalShippingFee}` : 'Free'}</p>
          <p>N{tax}</p>
        </div>
      </div>
      <div className="border-b mb-7 border-b-black"></div>
      <div className="flex justify-between text-lg">
        <div className="font-semibold">
          <p className="text-2xl font-bold">Total:</p>
        </div>
        <div>
          <p>N{totalCost}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;

