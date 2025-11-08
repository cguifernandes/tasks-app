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
import { use } from "react";
import type { TaskResponse } from "@/types/types";
import TaskCard from "../task-card";

const getAllTasks = (): Promise<TaskResponse> => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_API_URL}/tasks/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const error = await response.json();
          reject(new Error(error.message || "Erro ao buscar tarefas"));
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(new Error(error.message || "Erro ao buscar tarefas"));
      });
  });
};

const tasksPromise = getAllTasks();

const TasksView = () => {
  const { openModal } = useModal();
  const { isAuthenticated } = useUser();
  const { tasks } = use(tasksPromise);

  return (
    <Card>
      {tasks && tasks.length === 0 ? (
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
      ) : (
        <div className="flex flex-col">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </Card>
  );
};

export default TasksView;
