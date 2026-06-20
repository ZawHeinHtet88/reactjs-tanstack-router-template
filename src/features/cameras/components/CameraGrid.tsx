import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import type { Camera, CameraFormData } from "../schemas/camera.schema";
import { useCameraStore } from "../store/cameraStore";
import { CameraCard } from "./CameraCard";
import { CameraForm } from "./CameraForm";

export function CameraGrid() {
  const { cameras, addCamera, updateCamera, removeCamera } = useCameraStore();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Camera | null>(null);

  const handleSubmit = (data: CameraFormData) => {
    if (editing) {
      updateCamera(editing.id, data);
    } else {
      addCamera(data);
    }
    setDialogOpen(false);
    setEditing(null);
  };

  const handleEdit = (camera: Camera) => {
    setEditing(camera);
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Delete this camera?")) {
      removeCamera(id);
    }
  };

  const openAdd = () => {
    setEditing(null);
    setDialogOpen(true);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{cameras.length} cameras</p>
        <Button onClick={openAdd} size="sm">
          <PlusIcon className="mr-1 size-4" />
          Add Camera
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cameras.map((cam) => (
          <CameraCard key={cam.id} camera={cam} onEdit={handleEdit} onDelete={handleDelete} />
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Camera" : "Add Camera"}</DialogTitle>
          </DialogHeader>
          <CameraForm
            key={editing?.id ?? "new"}
            initial={editing ?? undefined}
            onSubmit={(data) => handleSubmit(data)}
            onCancel={() => {
              setDialogOpen(false);
              setEditing(null);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
