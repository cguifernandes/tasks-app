import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { useModal } from "@/context/modal-provider";
import { useUser } from "@/context/user-provider";
import { Loader2Icon } from "lucide-react";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { closeModal } = useModal();
  const { login } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !password) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      await login(name, password);
      toast.success("Login realizado com sucesso");
      closeModal();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao fazer login";
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
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;
