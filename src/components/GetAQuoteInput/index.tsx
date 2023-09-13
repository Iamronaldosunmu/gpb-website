import { AnimatePresence } from "framer-motion";
import { UseFormRegister } from "react-hook-form";
import { motion } from "framer-motion";

type GetAQuoteInputProps = {
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: string;
  extendedValidation?: Record<string, number> | object;
} & React.HTMLProps<HTMLInputElement>;

const GetAQuoteInput: React.FC<GetAQuoteInputProps> = ({
  type = "text",
  register,
  name,
  extendedValidation = {},
  error,
  ...props
}) => {
  return (
    <div className="w-full ">
      <input
        {...props}

        className="w-full text-[24px] placeholder:text-[24px] pb-[28px] border-b border-[#181818] focus:outline-none bg-transparent placeholder:text-[#434343] placeholder:opacity-[0.87]"
        type={type}
        {...register(name, {
          required: `${name[0].toUpperCase() + name.slice(1)} is required`,
          ...extendedValidation,
        })}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 5,  }}
                      animate={{ opacity: 1, y: 0, transition: {duration: 0.5} }}
                      exit={{opacity: 0}}
            style={{ color: "red" }}
            className="mt-[5px]"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GetAQuoteInput;
