import { useEffect, useRef, useState } from "react";

export function useMediaStream(stream: MediaStream | null) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !stream) return;
    el.srcObject = stream;
    el.onloadedmetadata = () => {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    };
    return () => {
      el.srcObject = null;
      setPlaying(false);
    };
  }, [stream]);

  return { videoRef, playing };
}
