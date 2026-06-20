import { createFileRoute } from "@tanstack/react-router";
import { CameraGrid } from "../features/cameras/components/CameraGrid";

export const Route = createFileRoute("/")({
  component: LiveView,
});

function LiveView() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Live View</h2>
      <CameraGrid />
    </div>
  );
}
