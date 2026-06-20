import { createFileRoute } from "@tanstack/react-router";
import { RecordingList } from "../features/recordings/components/RecordingList";
import { Timeline } from "../features/recordings/components/Timeline";

export const Route = createFileRoute("/recordings")({
  component: RecordingsPage,
});

function RecordingsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Recordings</h2>
      <Timeline />
      <RecordingList />
    </div>
  );
}
