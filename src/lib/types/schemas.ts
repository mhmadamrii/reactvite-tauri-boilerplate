import { z } from 'zod';

export const AuthFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z
    .string()
    // .min(8, {
    //   message: 'Password must be at least 8 characters.',
    // })
    // .refine((val) => /[A-Z]/.test(val), {
    //   message:
    //     'Password must contain at least one uppercase letter.',
    // }),
});
