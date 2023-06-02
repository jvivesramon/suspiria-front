interface ButtonProps {
  className?: string;
  text?: string;
  isDisable?: boolean;
  actionOnClick?: () => void;
  children?: React.ReactElement;
  ariaText?: string;
}

const Button = ({
  className,
  text,
  isDisable,
  actionOnClick,
  children,
  ariaText,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      aria-label={ariaText}
      className={className}
      disabled={isDisable}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
