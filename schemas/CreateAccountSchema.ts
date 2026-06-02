import z, { number } from "zod";

export const CreateAccountSchema = z.object({
    firstName:z.string().min(1, " The  first name field cannot be left empty").max(30, "First name is too long"),
    lastName: z.string().min(1, " The  last name field cannot be left empty").max(30, "Last name is too long"),
    email:z.string().min(1, "Email field cannot be left empty").email("Please enter a valid email"),
    password: z.string().min(1, "Password field cannot be left empty").min(6, "Password must be at least 6 characters long").max(100, "Password is too long"),
    privacy:z.boolean().refine((v) => v === true, "Please confirm that you agree to the Privacy Policy to proceed"),
})