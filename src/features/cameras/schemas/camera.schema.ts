import { z } from "zod/v4";

export const cameraSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Name is required"),
  status: z.enum(["online", "offline", "error"]),
  streamUrl: z.string().url("Must be a valid URL"),
  location: z.string().optional(),
  model: z.string().optional(),
});

export const cameraFormSchema = cameraSchema.omit({ id: true, status: true });

export type Camera = z.infer<typeof cameraSchema>;
export type CameraFormData = z.infer<typeof cameraFormSchema>;
