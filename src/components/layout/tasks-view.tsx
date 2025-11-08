import { ClipboardList } from "lucide-react";
import { Card } from "../ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { Button } from "../ui/button";
import { useModal } from "@/context/modal-provider";

const TasksView = () => {
  const { openModal } = useModal();
  return (
    <Card>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ClipboardList className="text-primary" />
          </EmptyMedia>
          <EmptyTitle>Nenhuma Tarefa Criada</EmptyTitle>
          <EmptyDescription>
            Não há tarefas criadas ainda. Faça login para criar sua primeira
            tarefa.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2 w-full">
            <Button className="flex-1" onClick={() => openModal("login")}>
              Login
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => openModal("createTask")}
            >
              Criar Tarefa
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </Card>
  );
};

export default TasksView;
