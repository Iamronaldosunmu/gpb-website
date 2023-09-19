interface TextContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const TextContainer: React.FC<TextContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={"max-w-[1015px] mx-auto w-full px-[20px] md:px-[40px] lg:px-0" + className}>
      {children}
    </div>
  );
};

export default TextContainer;
