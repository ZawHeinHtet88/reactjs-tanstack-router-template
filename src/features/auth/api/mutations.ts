import { useMutation } from "@tanstack/react-query";
import { api } from "@/shared/lib/api";

export function useLogin() {
  return useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      api.post("/auth/login", data).then((r) => r.data),
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: () => api.post("/auth/logout"),
  });
}
