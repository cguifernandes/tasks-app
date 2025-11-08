import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Register = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" type="text" placeholder="Digite seu nome" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" placeholder="Digite sua senha" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirme a senha</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
      </div>
      <Button type="submit">Registrar</Button>
    </form>
  );
};

export default Register;
