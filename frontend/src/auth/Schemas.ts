import { z } from "zod"
 
export const LoginSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(50),

})

 
export const registerSchema = z.object({
  username: z.string().min(5).max(50),
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  Instrument: z.string("required"),
  password: z.string().min(6).max(50),
  confirmPassword: z.string().min(6).max(50),
})