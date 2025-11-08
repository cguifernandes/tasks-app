import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Textarea } from "./ui/textarea";

const CreateTask = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Criar Tarefa</CardTitle>
        <CardDescription>
          Crie uma nova tarefa para organizar seu dia a dia
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          className="resize-none h-24"
          rows={4}
          placeholder="Descreva sua tarefa aqui"
        />
      </CardContent>
    </Card>
  );
};

export default CreateTask;
