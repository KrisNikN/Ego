import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { registerSchema } from "schemas";
import { ApiResponseBase } from "types";
import { z } from "zod";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../../../firebase";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export interface RegisterRequest extends NextApiRequest {
  body: z.infer<typeof registerSchema>;
}

export interface RegisterResponse {
  message: string;
}

const handler = nc<RegisterRequest, NextApiResponse<ApiResponseBase<RegisterResponse>>>({
  onError: (err, req, res, next) => {
    console.log(err.message);
    res.status(err.statusCode || 500).json({ error: err.message });
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page not found");
  }
}).post(async (req, res) => {
  try {
    const { email, password } = registerSchema.parse(req.body);

    // Check if user with the given email already exists
    const usersCollectionRef = collection(db, "users");
    const usersQuery = query(usersCollectionRef, where("email", "==", email));
    const usersSnapshot = await getDocs(usersQuery);

    if (usersSnapshot.empty === false) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    const uid = uuidv4();

    const hash = await bcrypt.hash(password, 12);
    await setDoc(doc(db, "users", uid), {
      email: email,
      password: hash
    });

    return res.status(200).json({ message: "Registration successful" });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors.map(err => err.message).join(", ");
      return res.status(400).json({ error: errorMessage });
    }

    return res.status(500).json({ error: "Internal server error" });
  }
});

export default handler;
