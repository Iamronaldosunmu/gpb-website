import Container from "../components/container";
import Nav from "../components/nav";
import TextContainer from "../components/textcontainer";

const Clients = () => {
  return (
    <main className="mt-[169px]">
      <Nav />
      <div className="bg-[#F2D9D8] pt-[112px] pb-[70px]">
        <Container>
          <p className="flex items-center gap-[20px]">
            <img src="/assets/images/backarrow.svg" />
            <span className="text-[27px] text-[#BE3F00]">clients</span>
          </p>
          <TextContainer>
            <h1
              className="text-center font-semibold text-[40px]
                  "
            >
              PAULA LONDON
                      </h1>
                      <p className="text-[24px] mt-[20px] text-center">Prints exclusively designed by GRAPES PATTERN BANK</p>
          </TextContainer>
        </Container>
      </div>
    </main>
  );
};

export default Clients;
