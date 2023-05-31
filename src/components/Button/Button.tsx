interface ButtonProps {
  className: string;
  text: string;
  isDisable: boolean;
}

const Button = ({
  className,
  text,
  isDisable,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} disabled={isDisable}>
      {text}
    </button>
  );
};

export default Button;
