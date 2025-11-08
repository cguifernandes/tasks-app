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
import { useUser } from "@/context/user-provider";

const TasksView = () => {
  const { openModal } = useModal();
  const { isAuthenticated } = useUser();
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
            {isAuthenticated ? (
              <Button
                className="flex-1"
                variant="outline"
                onClick={() => openModal("createTask")}
              >
                Criar Tarefa
              </Button>
            ) : (
              <Button className="flex-1" onClick={() => openModal("login")}>
                Login
              </Button>
            )}
          </div>
        </EmptyContent>
      </Empty>
    </Card>
  );
};

export default TasksView;
