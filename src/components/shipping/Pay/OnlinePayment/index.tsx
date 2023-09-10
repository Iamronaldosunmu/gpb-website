import { useState } from "react";
import { FieldValues, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import BillingAddress from "../BillingAddress";
import SaveInfo from "../SaveInfo";
import OrderReview from "../OrderReview";
import Button from "../Button";

const schema = z.object({
  cardNo: z
    .string()
    .min(19, { message: "Card number must be a 16-digit number" })
    .max(19, { message: "Card number must be a 16-digit number" }),
  expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, {
    message: "Expiry date must be in the format MM/YY",
  }),
  verificationValue: z
    .string()
    .min(3, { message: "CVV must be a 3-digit number" })
    .max(4, { message: "CVV must be a 4-digit number" }),
  ownerName: z.string().min(2).max(255),
});

type FormData = z.infer<typeof schema>;

const OnlinePaymentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = (data: FieldValues) => {
    reset();
    console.log(data);
  };

  const [showReview, setShowReview] = useState(false);

  const handleLeftButtonClick = () => {
    console.log("back to shipping page");
  };

  const handleRightButtonClick = () => {
    setShowReview(true);
  };

  const formatCardNumber = (input: string) => {
    const numericInput = input.replace(/\D/g, "").slice(0, 16);
    const formattedInput = numericInput.replace(
      /(.*)(.{4})/,
      (_, prefix, lastFour) => {
        const formattedPrefix = prefix.replace(/(.{4})/g, "$1-");
        return `${formattedPrefix}${lastFour}`;
      }
    );
    return formattedInput;
  };

  const formatExpiryDate = (input: string) => {
    const numericInput = input.replace(/\D/g, "").slice(0, 4);
    const formattedInput = numericInput.replace(/^(.{2})/, "$1/");
    return formattedInput;
  };

  return (
    <>
      <div className="w-[27rem] mx-auto pt-7">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border mb-8 bg-gray-200 mx-auto w-full p-5 text-sm"
        >
          <div className="pt-4 px-2">
            <div className="mb-4 pb-3">
              <label htmlFor="cardNo">Card number</label>
              <Controller
                name="cardNo"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    {...register("cardNo")}
                    className="w-full border py-3 px-4 mt-2 border-black outline-none"
                    placeholder="Enter card number"
                    id="cardNo"
                    onChange={(e) => {
                      const formattedInput = formatCardNumber(e.target.value);
                      field.onChange(formattedInput);
                    }}
                  />
                )}
              />

              {errors.cardNo && (
                <p className="text-red-500">{errors.cardNo.message}</p>
              )}
            </div>
            <div className="flex justify-between">
              <div className="mb-4 pb-3 w-[14rem]">
                <label htmlFor="expiryDate">Expiration</label>
                <Controller
                  name="expiryDate"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="MM/YY"
                      {...register("expiryDate")}
                      className="w-full border py-3 px-4 mt-2 border-black outline-none"
                      id="expiryDate"
                      onChange={(e) => {
                        const formattedInput = formatExpiryDate(e.target.value);
                        field.onChange(formattedInput);
                      }}
                    />
                  )}
                />
                {errors.expiryDate && (
                  <p className="text-red-500">{errors.expiryDate.message}</p>
                )}
              </div>
              <div className="mb-4 pb-3 w-2/3 ml-4">
                <label htmlFor="verificationValue">CVV</label>
                <input
                  type="text"
                  placeholder="XXX"
                  className="w-full border py-3 px-4 mt-2 border-black outline-none"
                  {...register("verificationValue")}
                  id="verificationValue"
                  maxLength={4}
                />
                {errors.verificationValue && (
                  <p className="text-red-500">
                    {errors.verificationValue.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="ownerName">Cardholder name</label>
              <input
                type="text"
                className="w-full border py-3 px-4 mt-2 border-black outline-none"
                {...register("ownerName")}
                id="ownerName"
              />
              {errors.ownerName && (
                <p className="text-red-500">{errors.ownerName.message}</p>
              )}
            </div>
          </div>
        </form>
        <SaveInfo />
        <BillingAddress />
        <Button
          leftButtonLabel="return to shipping"
          rightButtonLabel="continue to payment"
          onLeftButtonClick={handleLeftButtonClick}
          onRightButtonClick={handleRightButtonClick}
          className=""
        ></Button>

        {showReview && <OrderReview />}
      </div>
    </>
  );
};

export default OnlinePaymentForm;
