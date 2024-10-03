import {z} from 'zod'

const signupSchema = z.object({
    username: z.string().min(5).max(50),
    password: z.string()
})