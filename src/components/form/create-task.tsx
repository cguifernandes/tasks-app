import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { useModal } from "@/context/modal-provider";
import { toast } from "sonner";
import type { TaskResponse } from "@/types/types";
import { Loader2Icon } from "lucide-react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    setError(null);
    setIsLoading(true);

    const token = localStorage.getItem("token");

    if (!token) {
      setError("Token não encontrado");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao criar tarefa");
      }

      const data: TaskResponse = await response.json();
      toast.success(data.message || "Tarefa criada com sucesso");
      closeModal();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao criar tarefa";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex relative flex-col gap-4">
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <Loader2Icon className="size-10 text-primary animate-spin" />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          type="text"
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          className="resize-none"
          rows={4}
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit">Criar Tarefa</Button>
    </form>
  );
};

export default CreateTask;
