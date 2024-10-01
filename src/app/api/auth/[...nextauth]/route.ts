import bcrypt from 'bcrypt'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions = {
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			name: 'Credentials',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'jsmith',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				console.log('🚀 ~ authorize ~ credentials:', credentials)
				if (credentials?.password === undefined) {
					return null
				}

				if (process.env.USER_PASSWORD === undefined) {
					throw Error('undefined password')
				}

				const userPassword = await bcrypt.hash(
					process.env.USER_PASSWORD,
					10,
				)

				const resutl = await bcrypt.compare(
					credentials?.password,
					userPassword,
				)

				if (resutl === false) return null

				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				// const res = await fetch('/your/endpoint', {
				// 	method: 'POST',
				// 	body: JSON.stringify(credentials),
				// 	headers: { 'Content-Type': 'application/json' },
				// })
				// const user = await res.json()

				// // If no error and we have user data, return it
				// if (res.ok && user) {
				// 	return user
				// }
				// Return null if user data could not be retrieved
				return {
					id: '9',
					name: 'admin',
					email: credentials.email,
				}
			},
		}),
	],
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
