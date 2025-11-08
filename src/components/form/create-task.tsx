import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CreateTask = () => {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Título</Label>
        <Input id="title" type="text" placeholder="Título da tarefa" />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          className="resize-none"
          rows={4}
          placeholder="Descrição da tarefa"
        />
      </div>
      <Button type="submit">Criar Tarefa</Button>
    </form>
  );
};

export default CreateTask;
