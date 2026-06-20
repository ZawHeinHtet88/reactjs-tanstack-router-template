import { Link } from "@tanstack/react-router";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import type { Camera } from "../schemas/camera.schema";

const statusColor: Record<Camera["status"], string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  error: "bg-red-500",
};

interface CameraCardProps {
  camera: Camera;
  onEdit: (camera: Camera) => void;
  onDelete: (id: string) => void;
}

export function CameraCard({ camera, onEdit, onDelete }: CameraCardProps) {
  return (
    <div className="group rounded-lg border bg-card p-4 shadow-xs transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("h-2 w-2 rounded-full", statusColor[camera.status])} />
          <span className="text-xs capitalize text-muted-foreground">{camera.status}</span>
        </div>
        <div className="flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          <Button variant="ghost" size="icon-xs" onClick={() => onEdit(camera)}>
            <PencilIcon className="size-3.5" />
          </Button>
          <Button variant="ghost" size="icon-xs" onClick={() => onDelete(camera.id)}>
            <Trash2Icon className="size-3.5 text-destructive" />
          </Button>
        </div>
      </div>

      <Link to="/cameras/$cameraId" params={{ cameraId: camera.id }} className="block">
        <div className="mb-2 aspect-video rounded-md bg-muted" />
        <h3 className="text-sm font-medium">{camera.name}</h3>
        <p className="text-xs text-muted-foreground">{camera.location ?? "—"}</p>
      </Link>

      <div className="mt-2 flex items-center gap-2">
        <Badge variant="outline" className="text-[10px]">
          {camera.model ?? "Generic"}
        </Badge>
      </div>
    </div>
  );
}
