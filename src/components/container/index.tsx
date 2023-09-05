interface ContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={"max-w-[1220px] mx-auto w-full " + className}>{children}</div>
  );
};

export default Container;
