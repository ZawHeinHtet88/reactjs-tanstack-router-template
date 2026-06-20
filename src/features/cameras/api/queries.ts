import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useCameras() {
  return useQuery({
    queryKey: ["cameras"],
    queryFn: () => api.get("/cameras").then((r) => r.data),
  });
}

export function useCamera(id: string) {
  return useQuery({
    queryKey: ["cameras", id],
    queryFn: () => api.get(`/cameras/${id}`).then((r) => r.data),
  });
}
