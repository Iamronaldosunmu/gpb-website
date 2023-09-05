import Container from "../../../components/container";
import PrintItem from "../../../components/printItem";

const ShopCollections = () => {
  return (
    <section className="w-full py-[190px]">
      <Container>
        <h2 className="text-[40px] font-medium text-center text-[#A34A21]">
          Shop The Collection
        </h2>
        <div className="mt-[46px] grid grid-cols-4 gap-[27px]">
          <PrintItem />
          <PrintItem />
          <PrintItem />
          <PrintItem />
        </div>
      </Container>
    </section>
  );
};

export default ShopCollections;
