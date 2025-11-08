import Theme from "../theme";
import { Button } from "../ui/button";
import { useModal } from "@/context/modal-provider";
import { useUser } from "@/context/user-provider";
import { LogOutIcon, UserIcon } from "lucide-react";
import { toast } from "sonner";

const Header = () => {
  const { openModal } = useModal();
  const { user, isAuthenticated, logout } = useUser();

  const handleLogout = () => {
    logout();
    toast.success("Logout realizado com sucesso");
  };

  return (
    <header className="w-full mb-6 bg-card border-b flex border-border h-16 items-center">
      <div className="container mx-auto flex justify-between px-4 items-center">
        <h1 className="text-xl font-medium text-center text-primary">
          Tasks App
        </h1>
        <div className="flex items-center gap-2">
          <Theme />
          {isAuthenticated && user ? (
            <>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-muted">
                <UserIcon className="size-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {user.name}
                </span>
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={handleLogout}
                title="Sair"
              >
                <LogOutIcon className="size-4" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={() => openModal("register")}>
                Registrar
              </Button>
              <Button onClick={() => openModal("login")}>Login</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
