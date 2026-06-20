import { PlayIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface CameraPlayerProps {
  name: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
}

export function CameraPlayer({ name, streamUrl, status }: CameraPlayerProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
      {status === "online" ? (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <PlayIcon className="mx-auto mb-2 size-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Stream: {name}</p>
            <p className="mt-1 text-xs text-muted-foreground/60">{streamUrl}</p>
          </div>
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-xs font-medium",
                status === "offline" && "bg-gray-100 text-gray-500 dark:bg-gray-800",
                status === "error" && "bg-red-100 text-red-600 dark:bg-red-900/30",
              )}
            >
              {status === "offline" ? "Offline" : "Error"}
            </span>
          </div>
        </div>
      )}
      {status === "online" && (
        <div className="absolute top-2 left-2 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          <span className="text-[10px] text-white">LIVE</span>
        </div>
      )}
    </div>
  );
}
