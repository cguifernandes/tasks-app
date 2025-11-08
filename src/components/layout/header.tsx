import Theme from "../theme";

const Header = () => {
  return (
    <header className="w-full mb-6 bg-card border-b flex border-border h-14 items-center">
      <div className="container mx-auto flex justify-between px-4 items-center">
        <h1 className="text-xl font-medium text-center text-primary">
          Tasks App
        </h1>
        <Theme />
      </div>
    </header>
  );
};

export default Header;
