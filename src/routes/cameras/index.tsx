import { createFileRoute } from "@tanstack/react-router";
import { CameraGrid } from "../../features/cameras/components/CameraGrid";

export const Route = createFileRoute("/cameras/")({
  component: CamerasPage,
});

function CamerasPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Cameras</h2>
      <CameraGrid />
    </div>
  );
}
