import Nav from "../components/nav";
import BottomFooter from "../sections/Footer/BottomFooter";
import GetAQuoteForm from "../sections/GetAQuote";

const GetAQuote = () => {
  return (
    <main className="pt-[200px]">
      <Nav />
      <GetAQuoteForm />
      <BottomFooter />
    </main>
  );
};

export default GetAQuote;
