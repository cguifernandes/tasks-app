import CreateTask from "@/components/create-task";

const App = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="w-full bg-muted mb-6 border-b border-border p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-center">Tasks App</h1>
          <p className="text-muted-foreground text-center">
            Crie suas tarefas e organize seu dia a dia
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <CreateTask />
      </div>
    </main>
  );
};

export default App;
