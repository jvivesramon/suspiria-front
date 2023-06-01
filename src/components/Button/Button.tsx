interface ButtonProps {
  className?: string;
  text?: string;
  isDisable?: boolean;
  actionOnClick: () => void;
  children?: React.ReactElement;
}

const Button = ({
  className,
  text,
  isDisable,
  actionOnClick,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={className} disabled={isDisable} onClick={actionOnClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
