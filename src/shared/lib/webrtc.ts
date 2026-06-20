export function createPeerConnection(config?: RTCConfiguration): RTCPeerConnection {
  return new RTCPeerConnection(
    config ?? {
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    },
  );
}

export function createMediaStream(stream: MediaStream): MediaStream {
  return new MediaStream(stream.getTracks());
}
