import NextAuth from "next-auth";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import { cert } from "firebase-admin/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

export default NextAuth({
  session: {
    strategy: "jwt"
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email"
        },
        password: { label: "Password", type: "password" }
      },
      authorize: async credentials => {
        try {
          if (!credentials) {
            throw new Error("Missing credentials");
          }

          const usersCollectionRef = collection(db, "users");
          const usersQuery = query(usersCollectionRef, where("email", "==", credentials.email));
          const usersSnapshot = await getDocs(usersQuery);

          usersSnapshot.docs.forEach(doc => {
            const userData = doc.data();
            console.log(userData);
          });

          await signInWithEmailAndPassword(auth, credentials.email, credentials.password);

          //returns
          const user = { id: "unique-user-id", email: credentials.email };

          return user;
        } catch (error: any) {
          throw new Error(error);
        }
      }
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || ""
    })
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: privateKey
    })
  })
});
