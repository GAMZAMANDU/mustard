const Button = ({ text }: { text?: string }) => {
  return (
    <div className="px-[1.25rem] h-[36px] rounded-[4px] bg-[#3ECF8E] flex items-center justify-center">
      {text}
    </div>
  );
};

export default Button;
