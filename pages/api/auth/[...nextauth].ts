import NextAuth from "next-auth/next"
import Email from "next-auth/providers/email"

export default NextAuth({
    providers: [],
    pages: {
        signIn: '/signin',
        newUser: '/signup',
    }
})
