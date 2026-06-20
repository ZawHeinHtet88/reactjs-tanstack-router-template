import { Link } from "@tanstack/react-router";
import { cn } from "../../lib/utils";
import { useAppStore } from "../../store/appStore";

const navItems = [
  { to: "/", label: "Live View" },
  { to: "/cameras", label: "Cameras" },
  { to: "/recordings", label: "Recordings" },
  { to: "/events", label: "Events" },
];

export function Sidebar() {
  const open = useAppStore((s) => s.sidebarOpen);

  return (
    <aside
      className={cn(
        "flex h-full flex-col border-r bg-sidebar transition-all",
        open ? "w-56" : "w-14",
      )}
    >
      <nav className="flex flex-col gap-1 p-2">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "bg-sidebar-accent text-sidebar-accent-foreground" }}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
