import { create } from "zustand";
import { dummyCameras } from "../data/dummyCameras";
import type { Camera, CameraFormData } from "../schemas/camera.schema";

interface CameraState {
  cameras: Camera[];
  selectedId: string | null;
  select: (id: string | null) => void;
  addCamera: (data: CameraFormData) => Camera;
  updateCamera: (id: string, data: Partial<CameraFormData>) => void;
  removeCamera: (id: string) => void;
  getCamera: (id: string) => Camera | undefined;
}

let nextId = dummyCameras.length + 1;

export const useCameraStore = create<CameraState>((set, get) => ({
  cameras: dummyCameras,
  selectedId: null,
  select: (id) => set({ selectedId: id }),
  addCamera: (data) => {
    const id = `cam-${String(nextId++).padStart(3, "0")}`;
    const camera: Camera = { id, ...data, status: "offline" };
    set((s) => ({ cameras: [...s.cameras, camera] }));
    return camera;
  },
  updateCamera: (id, data) =>
    set((s) => ({
      cameras: s.cameras.map((c) => (c.id === id ? { ...c, ...data } : c)),
    })),
  removeCamera: (id) => set((s) => ({ cameras: s.cameras.filter((c) => c.id !== id) })),
  getCamera: (id) => get().cameras.find((c) => c.id === id),
}));
