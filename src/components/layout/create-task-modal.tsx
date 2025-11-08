import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CreateTask from "../form/create-task";

interface CreateTaskModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateTaskModal = ({ open, onOpenChange }: CreateTaskModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
