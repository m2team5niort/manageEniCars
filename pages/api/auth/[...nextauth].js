import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { MongoClient } from 'mongodb';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        newUser: "/auth/signup"
    },
    database: process.env.MONGODB_URI, 
    callbacks: {
        redirect: async (url, baseUrl) => {
          return Promise.resolve('/')
        },
    },
});