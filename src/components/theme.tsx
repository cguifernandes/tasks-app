import { useTheme } from "@/context/theme-provider";
import { SunIcon } from "./ui/sun";
import { MoonIcon } from "./ui/moon";
import { Button } from "./ui/button";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
      {theme === "dark" ? (
        <SunIcon className="text-primary" size={20} />
      ) : (
        <MoonIcon className="text-primary" size={20} />
      )}
    </Button>
  );
};

export default Theme;
