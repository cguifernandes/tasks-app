import Login from "../form/login";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useModal } from "@/context/modal-provider";

const LoginModal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <Dialog
      open={isModalOpen("login")}
      onOpenChange={(open) => !open && closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Faça login para continuar</DialogDescription>
        </DialogHeader>
        <Login />
        <DialogFooter>
          <span className="text-sm text-muted-foreground">
            Ainda não tem uma conta?{" "}
            <button
              className="text-primary cursor-pointer underline-offset-4 hover:underline"
              onClick={() => openModal("register")}
            >
              Registre-se
            </button>
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
