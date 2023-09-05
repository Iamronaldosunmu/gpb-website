import Container from "../../../components/container";

const FeaturedIn = () => {
    return (
        <section className="w-full bg-black pt-[77px] pb-[90px]">
            <Container>
                <h2 className="text-white text-[40px] font-bold text-center">As featured In</h2>
                <div className="w-full flex mt-[50px] justify-between items-center">
                    <img src="/assets/images/vogue.png" />
                    <img src="/assets/images/vogue.png" />
                    <img src="/assets/images/vogue.png" />
                    <img src="/assets/images/vogue.png" />
                    <img src="/assets/images/vogue.png" />
                </div>
            </Container>
        </section>
    );
}

export default FeaturedIn