interface Address{
    name: string;
    address: string;
    productNumber: number;
    duration: string

}
interface DeliveryDetailsProps{
    deliveryAddress: Address;
    billingAddress: Address;
    paymentMethod: string;
}

const DeliveryDetails = ({ deliveryAddress, billingAddress, paymentMethod }: DeliveryDetailsProps) => {
  return (
    <div className="p-20">
      <div className="flex">
        
        <div className="w-1/3">
          <h2 className="text-lg mb-4">Delivery Address</h2>
          <p className="text-sm mb-2 break-all">{deliveryAddress.name}</p>
          <p className="text-sm mb-2 break-all">{deliveryAddress.address}</p>
          <p className="text-sm mb-2">{deliveryAddress.productNumber}</p>
          <p className="text-sm mb-2">{deliveryAddress.duration}</p>
        </div>

        <div className="w-1/3 ml-6">
          <h2 className="text-lg mb-4">Billing Address</h2>
          <p className="text-sm mb-2 break-all">{billingAddress.name}</p>
          <p className="text-sm mb-2 break-all">{billingAddress.address}</p>
          <p className="text-sm mb-2">{billingAddress.productNumber}</p>
          <p className="text-sm mb-2">{billingAddress.duration}</p>
        </div>

        <div className="mt-9 ml-6 justify-center">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <p className="text-sm">{paymentMethod}</p>
      </div>


      </div>

      {/* Payment Method */}

    </div>
  );
};

export default DeliveryDetails;
