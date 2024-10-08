import "../styles/components/Button.css";

interface Props {
  text: string;
  eventHandler: () => void;
}

const Button = ({ text, eventHandler }: Props) => {
  return (
    <button id="button" onClick={eventHandler}>
      {text}
    </button>
  );
};

export default Button;
