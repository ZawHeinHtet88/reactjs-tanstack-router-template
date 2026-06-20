import { useCameraStore } from "../store/cameraStore";
import { CameraForm } from "./CameraForm";

interface CameraSettingsProps {
  cameraId: string;
  onClose: () => void;
}

export function CameraSettings({ cameraId, onClose }: CameraSettingsProps) {
  const camera = useCameraStore((s) => s.cameras.find((c) => c.id === cameraId));
  const updateCamera = useCameraStore((s) => s.updateCamera);

  if (!camera) return <p className="text-sm text-muted-foreground">Camera not found</p>;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Settings</h3>
      <CameraForm
        initial={camera}
        onSubmit={(data) => {
          updateCamera(cameraId, data);
          onClose();
        }}
        onCancel={onClose}
      />
    </div>
  );
}
