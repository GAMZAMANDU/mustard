import Button from "./Button";
import Panel from "./layout/Panel";

const Header = () => {
  return (
    <header className="h-full p-8">
      <Panel borderDirection="bottom" className="min-h-[2rem] p-[1rem] flex items-center justify-between">
        <img src="/assets/Logo.svg" alt="Logo" className="h-[1.5rem]"/>
        <div className="flex gap-[1.5rem]">
          {/* <Button text="New Project" /> */}
          <img src="/assets/Avatar.svg" alt="Avatar" className="h-[2.25rem]" />
        </div>
      </Panel>
    </header>
  );
};

export default Header;
