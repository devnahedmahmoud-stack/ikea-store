import z from "zod";

const NATIONALITIES = [
  "Egyptian",
  "American",
  "British",
  "Canadian",
  "French",
  "German",
  "Italian",
  "Spanish",
  "Dutch",
  "Swedish",
  "Norwegian",
  "Danish",
  "Finnish",
  "Polish",
  "Czech",
  "Austrian",
  "Swiss",
  "Belgian",
  "Greek",
  "Portuguese",
  "Irish",
  "Australian",
  "New Zealand",
  "South African",
  "Indian",
  "Chinese",
  "Japanese",
  "South Korean",
  "Thai",
  "Vietnamese",
  "Malaysian",
  "Singaporean",
  "Indonesian",
  "Filipino",
  "Pakistani",
  "Bangladesh",
  "Turkish",
  "Israeli",
  "Saudi Arabian",
  "UAE",
  "Kuwaiti",
  "Qatari",
  "Lebanese",
  "Other",
];

export const IkeaFamilySchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name can only contain letters, spaces, hyphens, and apostrophes")
    .transform(val => val.trim()),
  
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name can only contain letters, spaces, hyphens, and apostrophes")
    .transform(val => val.trim()),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters")
    .transform(val => val.toLowerCase().trim()),
  
  gender: z
    .enum(["female", "male"], {
      message: "Please select a gender",
    }),
  
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 13;
      }
      return age >= 13;
    }, "You must be at least 13 years old"),
  
  postcode: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[+]?[0-9]{10,15}$/, "Phone number must be 10-15 digits (with optional + prefix)")
    .transform(val => val.trim()),
  
  address: z
    .string()
    .min(1, "Address is required")
    .max(100, "Address must be less than 100 characters")
    .transform(val => val.trim()),
  
  nationality: z
    .enum(NATIONALITIES as [string, ...string[]], {
      message: "Please select a valid nationality",
    }),
  
  terms: z
    .boolean()
    .refine(
      (value) => value === true,
      "You must agree to the terms and conditions"
    ),
});

export type IkeaFamilyFormData = z.infer<typeof IkeaFamilySchema>;
export { NATIONALITIES };
