import { useWebSocket } from "@/shared/hooks/useWebSocket";

export function useEventSocket(onEvent: (data: unknown) => void) {
  useWebSocket("event", onEvent);
}
