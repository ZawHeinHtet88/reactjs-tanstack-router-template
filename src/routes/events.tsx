import { createFileRoute } from "@tanstack/react-router";
import { AlertBanner } from "../features/events/components/AlertBanner";
import { EventFeed } from "../features/events/components/EventFeed";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Events</h2>
      <AlertBanner />
      <EventFeed />
    </div>
  );
}
