import Theme from "../theme";
import { Button } from "../ui/button";
import { useModal } from "@/context/modal-provider";

const Header = () => {
  const { openModal } = useModal();

  return (
    <header className="w-full mb-6 bg-card border-b flex border-border h-16 items-center">
      <div className="container mx-auto flex justify-between px-4 items-center">
        <h1 className="text-xl font-medium text-center text-primary">
          Tasks App
        </h1>
        <div className="flex items-center gap-2">
          <Theme />
          <Button className="w-24" onClick={() => openModal("login")}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
