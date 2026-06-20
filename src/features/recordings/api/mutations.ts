import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useDeleteRecording() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/recordings/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["recordings"] }),
  });
}
