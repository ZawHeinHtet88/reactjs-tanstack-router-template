import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftIcon, SettingsIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { CameraPlayer } from "../../features/cameras/components/CameraPlayer";
import { CameraSettings } from "../../features/cameras/components/CameraSettings";
import { useCameraStore } from "../../features/cameras/store/cameraStore";

export const Route = createFileRoute("/cameras/$cameraId")({
  component: CameraDetail,
});

function CameraDetail() {
  const { cameraId } = Route.useParams();
  const camera = useCameraStore((s) => s.cameras.find((c) => c.id === cameraId));
  const [settingsOpen, setSettingsOpen] = useState(false);

  if (!camera) {
    return (
      <div className="space-y-4">
        <Link
          to="/cameras"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" /> Back
        </Link>
        <p className="text-sm text-muted-foreground">Camera not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link
          to="/cameras"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon className="size-4" /> Back
        </Link>
        <Button variant="ghost" size="sm" onClick={() => setSettingsOpen(true)}>
          <SettingsIcon className="mr-1 size-4" /> Settings
        </Button>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{camera.name}</h2>
          <Badge variant={camera.status === "online" ? "default" : "secondary"}>
            {camera.status}
          </Badge>
        </div>
        {camera.location && <p className="text-sm text-muted-foreground">{camera.location}</p>}
      </div>

      <CameraPlayer name={camera.name} streamUrl={camera.streamUrl} status={camera.status} />

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-muted-foreground">Model</span>
          <p>{camera.model ?? "—"}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Stream URL</span>
          <p className="truncate font-mono text-xs">{camera.streamUrl}</p>
        </div>
      </div>

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Camera Settings</DialogTitle>
          </DialogHeader>
          <CameraSettings cameraId={cameraId} onClose={() => setSettingsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
