import { auth } from '@/util/auth'
import { redirect } from 'next/navigation'

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth()

	if (session !== null) {
		redirect('/')
	}

	return <div>{children}</div>
}
