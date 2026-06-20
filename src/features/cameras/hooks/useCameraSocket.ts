import { useWebSocket } from "@/shared/hooks/useWebSocket";

export function useCameraSocket(cameraId: string, onEvent: (data: unknown) => void) {
  useWebSocket(`camera:${cameraId}`, onEvent);
}
