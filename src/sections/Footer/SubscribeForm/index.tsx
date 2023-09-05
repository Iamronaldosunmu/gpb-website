import { FormEvent } from "react";

const SubscribeForm = () => {
  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="py-[200px] flex flex-col items-center">
      <h2 className="text-[40px] font-semibold">Subscribe Form</h2>
      <p className="text-[24px] font-semibold">Stay up to date</p>

      <form
        onSubmit={onSubscribe}
        className="w-full max-w-[1000px] mx-auto flex flex-col gap-[60px] mt-[64px]"
      >
        <input placeholder="Email" className="w-full py-[20px] focus:outline-none placeholder:text-[24px] placeholder:opacity-[0.87] text-[32px] border-b border-black" />
        <button
          className="w-full text-center text-[32px] py-[18px] bg-black text-white"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default SubscribeForm;
