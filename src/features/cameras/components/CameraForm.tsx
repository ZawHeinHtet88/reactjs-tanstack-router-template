import { useState } from "react";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";

interface CameraFormProps {
  initial?: { name: string; streamUrl: string; location?: string; model?: string };
  onSubmit: (data: { name: string; streamUrl: string; location: string; model: string }) => void;
  onCancel: () => void;
}

export function CameraForm({ initial, onSubmit, onCancel }: CameraFormProps) {
  const [name, setName] = useState(initial?.name ?? "");
  const [streamUrl, setStreamUrl] = useState(initial?.streamUrl ?? "");
  const [location, setLocation] = useState(initial?.location ?? "");
  const [model, setModel] = useState(initial?.model ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !streamUrl.trim()) return;
    onSubmit({
      name: name.trim(),
      streamUrl: streamUrl.trim(),
      location: location.trim(),
      model: model.trim(),
    });
  };

  const valid = name.trim() && streamUrl.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cam-name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="cam-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cn(
            "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          )}
          placeholder="Camera name"
        />
      </div>
      <div>
        <label htmlFor="cam-url" className="mb-1 block text-sm font-medium">
          Stream URL
        </label>
        <input
          id="cam-url"
          value={streamUrl}
          onChange={(e) => setStreamUrl(e.target.value)}
          className={cn(
            "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          )}
          placeholder="https://example.com/stream"
        />
      </div>
      <div>
        <label htmlFor="cam-location" className="mb-1 block text-sm font-medium">
          Location
        </label>
        <input
          id="cam-location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={cn(
            "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          )}
          placeholder="Where is this camera?"
        />
      </div>
      <div>
        <label htmlFor="cam-model" className="mb-1 block text-sm font-medium">
          Model
        </label>
        <input
          id="cam-model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className={cn(
            "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none",
            "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          )}
          placeholder="Camera model"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!valid}>
          {initial ? "Save" : "Add Camera"}
        </Button>
      </div>
    </form>
  );
}
