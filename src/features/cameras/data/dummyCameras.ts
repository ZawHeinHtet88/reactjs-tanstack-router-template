import type { Camera } from "../schemas/camera.schema";

export const dummyCameras: Camera[] = [
  {
    id: "cam-001",
    name: "Main Entrance",
    status: "online",
    streamUrl: "https://example.com/stream/main-entrance",
    location: "Building A - Ground Floor",
    model: "Hikvision DS-2CD2T47G2-L",
  },
  {
    id: "cam-002",
    name: "Parking Lot A",
    status: "online",
    streamUrl: "https://example.com/stream/parking-a",
    location: "Outdoor - North Side",
    model: "Dahua IPC-HFW5442T-ZE",
  },
  {
    id: "cam-003",
    name: "Server Room",
    status: "online",
    streamUrl: "https://example.com/stream/server-room",
    location: "Building B - 2nd Floor",
    model: "Axis P3247-LV",
  },
  {
    id: "cam-004",
    name: "Loading Dock",
    status: "offline",
    streamUrl: "https://example.com/stream/loading-dock",
    location: "Building A - Rear",
    model: "Hikvision DS-2CD2386G2-I",
  },
  {
    id: "cam-005",
    name: "Lobby",
    status: "online",
    streamUrl: "https://example.com/stream/lobby",
    location: "Building A - Ground Floor",
    model: "Dahua SD6AL433XA-HNR",
  },
  {
    id: "cam-006",
    name: "Rooftop",
    status: "error",
    streamUrl: "https://example.com/stream/rooftop",
    location: "Building B - Rooftop",
    model: "Axis Q3517-LV",
  },
];
