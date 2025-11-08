import Register from "../form/register";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useModal } from "@/context/modal-provider";

const RegisterModal = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <Dialog
      open={isModalOpen("register")}
      onOpenChange={(open) => !open && closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registre-se</DialogTitle>
          <DialogDescription>Crie uma conta para continuar</DialogDescription>
        </DialogHeader>
        <Register />
        <DialogFooter>
          <span className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <button
              className="text-primary cursor-pointer underline-offset-4 hover:underline"
              onClick={() => openModal("login")}
            >
              Faça login
            </button>
          </span>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
