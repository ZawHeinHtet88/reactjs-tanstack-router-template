import { useEffect } from "react";
import { wsClient } from "../lib/wsClient";

export function useWebSocket(type: string, handler: (data: unknown) => void) {
  useEffect(() => {
    const unsub = wsClient.on(type, handler);
    return unsub;
  }, [type, handler]);
}
