import { z } from 'zod';

export const orderSchema = z.object({
  first_name: z.string({ required_error: 'User name is required!' }),
  email: z.string({ required_error: 'Email is required!' }),
  device_number: z.coerce.number({
    required_error: 'Provide desired number of devices!',
  }),
});

export type TOrderSchema = z.infer<typeof orderSchema>;
