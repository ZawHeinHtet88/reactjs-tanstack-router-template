import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: () => api.get("/events").then((r) => r.data),
  });
}
