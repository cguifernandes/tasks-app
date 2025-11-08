import { useTheme } from "@/context/theme-provider";
import { SunIcon } from "./ui/sun";
import { MoonIcon } from "./ui/moon";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button type="button" className="cursor-pointer" onClick={handleTheme}>
      {theme === "dark" ? (
        <SunIcon className="text-primary" size={20} />
      ) : (
        <MoonIcon className="text-primary" size={20} />
      )}
    </button>
  );
};

export default Theme;
