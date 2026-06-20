import { z } from "zod/v4";

export const eventSchema = z.object({
  id: z.string(),
  type: z.string(),
  cameraId: z.string(),
  timestamp: z.string().datetime(),
  data: z.record(z.string(), z.unknown()).optional(),
});

export type Event = z.infer<typeof eventSchema>;
