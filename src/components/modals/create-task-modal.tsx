import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CreateTask from "../form/create-task";
import { useModal } from "@/context/modal-provider";

const CreateTaskModal = () => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <Dialog
      open={isModalOpen("createTask")}
      onOpenChange={(open) => !open && closeModal()}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Nova Tarefa</DialogTitle>
          <DialogDescription>
            Adicione uma nova tarefa para organizar suas atividades
          </DialogDescription>
        </DialogHeader>
        <CreateTask />
      </DialogContent>
    </Dialog>
  );
};

export default CreateTaskModal;
