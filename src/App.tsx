import { Button } from "./components/ui/button";
import Header from "./components/layout/header";
import TasksView from "./components/layout/tasks-view";
import CreateTaskModal from "./components/modals/create-task-modal";
import LoginModal from "./components/modals/login-modal";
import RegisterModal from "./components/modals/register-modal";
import { useModal } from "./context/modal-provider";

const App = () => {
  const { openModal } = useModal();

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-medium text-primary">Tarefas</h2>
            <p className="text-sm text-muted-foreground">
              Crie suas tarefas e organize seu dia a dia
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Button onClick={() => openModal("createTask")}>
              Adicionar Tarefa
            </Button>
          </div>
        </div>
        <TasksView />
      </div>
      <CreateTaskModal />
      <LoginModal />
      <RegisterModal />
    </main>
  );
};

export default App;
