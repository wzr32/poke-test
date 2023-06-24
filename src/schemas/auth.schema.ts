import { z } from "zod";
import { formValidationsErrors } from "@/models";

const { EQUAL_PASS, MIN_PASS, NON_EMPTY, REQUIRED_FIELD, VALID_EMAIL } =
  formValidationsErrors;

export const loginSchema = z.object({
  email: z
    .string({ required_error: REQUIRED_FIELD })
    .email(VALID_EMAIL)
    .nonempty(NON_EMPTY)
    .trim(),
  password: z
    .string({ required_error: REQUIRED_FIELD })
    .nonempty(NON_EMPTY)
    .trim(),
});

export const registerSchema = z
  .object({
    email: z
      .string({ required_error: REQUIRED_FIELD })
      .email(VALID_EMAIL)
      .nonempty(NON_EMPTY)
      .trim(),
    firstName: z
      .string({ required_error: REQUIRED_FIELD })
      .nonempty(NON_EMPTY)
      .trim(),
    lastName: z
      .string({ required_error: REQUIRED_FIELD })
      .nonempty(NON_EMPTY)
      .trim(),
    password: z
      .string({ required_error: REQUIRED_FIELD })
      .min(6, MIN_PASS)
      .nonempty(NON_EMPTY)
      .trim(),
    c_password: z
      .string({ required_error: REQUIRED_FIELD })
      .min(6, MIN_PASS)
      .nonempty(NON_EMPTY)
      .trim(),
  })
  .refine((data) => data.password === data.c_password, {
    path: ["c_password"],
    message: EQUAL_PASS,
  });

export type LoginType = z.infer<typeof loginSchema>;
export type RegisterType = z.infer<typeof registerSchema>;
