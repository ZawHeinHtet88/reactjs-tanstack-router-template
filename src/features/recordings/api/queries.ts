import { useQuery } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useRecordings() {
  return useQuery({
    queryKey: ["recordings"],
    queryFn: () => api.get("/recordings").then((r) => r.data),
  });
}
