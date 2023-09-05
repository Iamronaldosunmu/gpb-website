interface TextContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const TextContainer: React.FC<TextContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={"max-w-[1015px] mx-auto w-full " + className}>
      {children}
    </div>
  );
};

export default TextContainer;
