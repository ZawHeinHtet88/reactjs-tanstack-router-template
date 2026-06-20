import { useEffect, useState } from "react";
import { createPeerConnection } from "@/shared/lib/webrtc";

export function useWebRTCStream(_url: string) {
  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const pc = createPeerConnection();
    pc.ontrack = (event) => setStream(event.streams[0]);
    return () => {
      pc.close();
      setStream(null);
    };
  }, []);

  return { stream };
}
