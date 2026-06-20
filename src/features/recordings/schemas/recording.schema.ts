import { z } from "zod/v4";

export const recordingSchema = z.object({
  id: z.string(),
  cameraId: z.string(),
  startTime: z.string().datetime(),
  endTime: z.string().datetime().optional(),
  url: z.string().url(),
});

export type Recording = z.infer<typeof recordingSchema>;
