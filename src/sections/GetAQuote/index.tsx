import { AnimatePresence, motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";
import GetAQuoteInput from "../../components/GetAQuoteInput";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const GetAQuoteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data, errors);

  return (
    <div className="w-full mb-[115px]">
      <div className="w-full max-w-[1300px] mx-auto grid grid-cols-2">
        <article className="px-[45px] bg-[#F7B797] pt-[80px] pb-[50px]">
          <h1 className="text-center font-semibold text-[36px]">GET A QUOTE</h1>
          <p className="text-center text-[18px] mt-[34px]">
            Thanks for your interest in Grapes pattern bank. We would send our
            price list as soon as possible. please let us know what kind of
            fabric you are looking for so we could highlight it or similar
            fabrics on the price list before sending it to you. We currently
            have over 150 different types of fabrics we can print on ranging
            from silks to velvets, scuba, cotton, jerseys etc. Please let us now
            if you would be interested in ordering our fabric swatches.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[132px] flex flex-col space-y-[60px]"
          >
            <GetAQuoteInput
              placeholder="Name"
              register={register}
              name="name"
              extendedValidation={{
                minLength: {
                  value: 3,
                  message: "Name Should be a minimum of 3 characters",
                },
              }}
              error={errors.name?.message}
            />
            <GetAQuoteInput
              type="email"
              placeholder="Email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <GetAQuoteInput
              placeholder="Subject"
              register={register}
              name="subject"
              error={errors.subject?.message}
            />
            <div className="w-full">
              <textarea
                className="text-[24px] placeholder:text-[24px] pb-[28px] border-b border-[#181818] focus:outline-none bg-transparent placeholder:text-[#434343] placeholder:opacity-[0.87] w-full h-[300px] resize-none"
                placeholder="Type your message here"
                {...register("message", { required: "Message is required" })}
              />
              <AnimatePresence>
                {errors.message?.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                    exit={{ opacity: 0 }}
                    style={{ color: "red" }}
                    className="mt-[5px]"
                  >
                    {errors.message?.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                onClick={() => console.log(errors)}
                type="submit"
                className="w-[395px] bg-black text-white font-medium text-[32px] py-[20px] mt-[60px]"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
        <figure className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="/assets/images/fabrics.jpg"
          />
        </figure>
      </div>
    </div>
  );
};

export default GetAQuoteForm;
