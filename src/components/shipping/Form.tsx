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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-2xl">Contact</h2>
        <div>
          <label htmlFor="login" className="text-sm ">
            Have an account?{" "}
            <input
              id="login"
              className="text-#F7B797 hover:cursor-pointer"
              type="button"
              value="login"
            />
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full border rounded py-2 px-3"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <h2 className="text-2xl mb-4 font-semibold">Customer Details</h2>
        <div className="mb-4">
          <label htmlFor="firstName" className="block">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className="w-full border rounded py-2 px-3"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block">
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className="w-full border rounded py-2 px-3"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div className="flex justify-between">
          <div className="mb-4">
            <label htmlFor="companyName" className="block">
              Company's Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              className="w-full border rounded py-2 px-3"
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="referral" className="block">
              How did you hear about us?
            </label>
            <input
              id="referral"
              type="text"
              {...register("referral")}
              className="w-full border rounded py-2 px-3"
            />
            {errors.referral && (
              <p className="text-red-500">{errors.referral.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="country" className="block">
          Country
        </label>
        <select
          id="country"
          {...register("country")}
          className="w-full border rounded py-2 px-3"
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

      <div className="mb-4 flex justify-between">
        <div className="mb-4">
          <label htmlFor="zipCode" className="block">
            Zip Code
          </label>
          <input
            id="zipCode"
            type="number"
            {...register("zipCode")}
            className="w-full border rounded py-2 px-3"
          />
          {errors.zipCode && (
            <p className="text-red-500">{errors.zipCode.message}</p>
          )}
        </div>
        <div className="mb-4 ">
          <label htmlFor="state" className="block">
            State
          </label>
          <input
            id="state"
            type="text"
            {...register("state")}
            className="w-full border rounded py-2 px-3"
          />
          {errors.state && (
            <p className="text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="cityName" className="block">
          City
        </label>
        <input
          id="cityName"
          type="text"
          {...register("cityName")}
          className="w-full border rounded py-2 px-3"
        />
        {errors.cityName && (
          <p className="text-red-500">{errors.cityName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block">
          Address
        </label>
        <input
          id="address"
          type="text"
          {...register("address")}
          className="w-full border rounded py-2 px-3"
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          className="w-full border rounded py-2 px-3"
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
