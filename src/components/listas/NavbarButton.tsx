import Button from "../model/Button";

interface NavbarButtonProps {
  button: Button;
}

export default function NavbarButton(props: NavbarButtonProps) {
  const { button } = props;

  return (
      <div className="flex items-center justify-center gap-2">
        <span>{button.nome}</span>
      </div>
  );
}
