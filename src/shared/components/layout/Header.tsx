import { useAppStore } from "../../store/appStore";

export function Header() {
  const toggle = useAppStore((s) => s.toggleSidebar);

  return (
    <header className="flex h-12 items-center border-b px-4">
      <button
        type="button"
        onClick={toggle}
        className="mr-2 text-muted-foreground hover:text-foreground"
      >
        ☰
      </button>
      <h1 className="text-base font-medium">CCTV VMS</h1>
    </header>
  );
}
