'use server'

import { signUpSchema, SignUpSchemaType } from "@/lib/schemas"

export const signupUser = (data: SignUpSchemaType) => {
  const validatedData = signUpSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  } else {
    console.log("Invalid data", data)
  }
}

import { logInSchema, LogInSchemaType } from "@/lib/schemas"

export const loginUser = (data: LogInSchemaType) => {
  const validatedData = logInSchema.safeParse(data)
  if (validatedData.success) {
    console.log("Valid data", data)
  } else {
    console.log("Invalid data", data)
  }
}