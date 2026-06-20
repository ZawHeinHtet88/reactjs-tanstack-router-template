import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useUpdateCamera() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }: { id: string } & Record<string, unknown>) =>
      api.patch(`/cameras/${id}`, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cameras"] }),
  });
}
