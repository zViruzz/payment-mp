import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions)

	if (session !== null) {
		redirect('/')
	}

	return <div>{children}</div>
}
