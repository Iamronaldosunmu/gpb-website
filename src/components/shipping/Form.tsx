import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 2 characters" }),
  companyName: z.string(),
  referral: z.string(),
  country: z.string(),
  zipCode: z.string(),
  state: z.string(),
  cityName: z.string(),
  address: z.string(),
  phone: z.string(),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data); //backend business....
    reset();
    alert('Your form has been submitted!')
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md  ml-auto p-4 text-sm">
      <div className="flex justify-between  mb-5 pb-1">
        <h2 className="font-bold text-2xl">Contact</h2>
        <div>
          <label htmlFor="login" className="text-sm ">
            Have an account?{" "}
            <input
              id="login"
              className="text-#F7B797 hover:cursor-pointer "
              type="button"
              value="login"

            />
          </label>
        </div>
      </div>
      <div className="mb-6 pb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full border border-black py-2 px-3 outline-none"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <h2 className="text-2xl mb-3 font-semibold">Customer Details</h2>
        <div className="mb-7 pb-7">
          <label htmlFor="firstName" className="block mb-2">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="w-full border py-2 px-3 border-black outline-none"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-7 pb-7">
          <label htmlFor="lastName" className="block mb-2">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="w-full border py-2 px-3 border-black outline-none"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          <div className="mb-7 pb-7">
            <label htmlFor="companyName" className="block mb-2">
              Company's Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              className="w-full border py-2 px-3 border-black outline-none"
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </div>
          <div className="mb-7 pb-7">
            <label htmlFor="referral" className="block mb-2">
              How did you hear about us?
            </label>
            <input
              id="referral"
              type="text"
              {...register("referral")}
              className="w-full border py-2 px-3 border-black outline-none"
            />
            {errors.referral && (
              <p className="text-red-500">{errors.referral.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-7 pb-7">
        <label htmlFor="country" className="block mb-2">
          Country
        </label>
        <select
          id="country"
          {...register("country")}

          className="w-full border py-2 px-3 border-black "
        >
          <option value="usa"></option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          {/* {omo and so on and so forth} */}
        </select>
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      <div className="flex justify-between">
        <div className="mb-7 pb-7">
          <label htmlFor="zipCode" className="block mb-2">
            Zip Code
          </label>
          <input
            id="zipCode"
            type="number"
            {...register("zipCode")}
            className="w-full border py-2 px-3 border-black outline-none"
          />
          {errors.zipCode && (
            <p className="text-red-500">{errors.zipCode.message}</p>
          )}
        </div>
        <div className="mb-7 pb-6 ">
          <label htmlFor="state" className="block mb-2">
            State
          </label>
          <input
            id="state"
            type="text"
            {...register("state")}
            className="w-full border  py-2 px-3 border-black outline-none"
          />
          {errors.state && (
            <p className="text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="mb-7 pb-6">
        <label htmlFor="cityName" className="block mb-2">
          City
        </label>
        <input
          id="cityName"
          type="text"
          {...register("cityName")}
          className="w-full border  py-2 px-3 border-black outline-none"
        />
        {errors.cityName && (
          <p className="text-red-500">{errors.cityName.message}</p>
        )}
      </div>
      <div className="mb-7 pb-6">
        <label htmlFor="address" className="block mb-2">
          Address
        </label>
        <input
          id="address"
          type="text"
          {...register("address")}
          className="w-full border  py-2 px-3 border-black outline-none"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-7 pb-7">
        <label htmlFor="phone" className="block mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          className="w-full border  py-2 px-3 border-black outline-none"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="mb-10">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox focus:ring-black-900 checked:bg-black-900"
          />
          <span className="ml-2">Save this information for next time</span>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          disabled={!isValid}
          type="submit"
          className="bg-black text-white px-6 py-2 text-center hover: cursor-pointer hover:scale-105 transform transition-transform"
        >
          continue to shipping
        </button>
      </div>
    </form>
  );
};

export default Form;
