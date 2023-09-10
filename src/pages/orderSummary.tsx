import Nav from "../components/shipping/Nav";
import Form from "../components/shipping/Form";
import BottomFooter from "../sections/Footer/BottomFooter";
import Container from "../components/container";
import Cart from "../components/shipping/Cart";

const OrderSummary: React.FC = () => {
  const items = [
    {
      name: "Item 1",
      color: "Change",
      exclusivity: true,
      imageUrl: "item1.jpg",
      price: 100000,
      isFree: true,
      shippingFee: 0,
    },
    {
      name: "Item 2",
      color: "Change",
      exclusivity: false,
      imageUrl: "item2.jpg",
      price: 15000,
      isFree: false,
      shippingFee: 5,
    },
  ];
  return (
    <>
    <Nav />{" "}
      <Container className="mb-[5rem]">
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="cols-span-1 justify-end">
            <Form />
          </div>

          <div className="cols-span 1 h-full">
            {" "}
            <Cart items={items} />
          </div>
        </div>
      </Container>
      <BottomFooter />
    </>
  );
};

export default OrderSummary;
