import type { Task } from "@/types/types";
import { Checkbox } from "./ui/checkbox";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div
      key={task.id}
      className="flex items-center gap-4 border-b border-border py-2 px-4 hover:bg-muted transition-colors cursor-pointer first:border-t"
    >
      <Checkbox checked={task.completed} className="shrink-0" />
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <h2 className="truncate text-primary font-medium">
          {task.title || "Tarefa sem título"}
        </h2>
        <p className="text-sm text-muted-foreground truncate">
          {task.description || "Tarefa sem descrição"}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Criado por {task.user?.name || "Usuário não encontrado"}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
