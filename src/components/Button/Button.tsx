interface ButtonProps {
  className: string;
  text: string;
}

const Button = ({ className, text }: ButtonProps): React.ReactElement => {
  return <button className={className}>{text}</button>;
};

export default Button;
