import { ClipboardList } from "lucide-react";
import { Card } from "../ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

const TasksView = () => {
  return (
    <Card>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <ClipboardList className="text-primary" />
          </EmptyMedia>
          <EmptyTitle>Nenhuma Tarefa Criada</EmptyTitle>
          <EmptyDescription>
            Você ainda não criou nenhuma tarefa. Comece criando sua primeira
            tarefa.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </Card>
  );
};

export default TasksView;
