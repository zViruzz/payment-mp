import { auth } from '@/util/auth'
import { redirect } from 'next/navigation'
import { css } from '../../../../styled-system/css'

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	const session = await auth()

	if (session !== null) {
		redirect('/')
	}

	return <div className={styles.containerPage}>{children}</div>
}

const styles = {
	containerPage: css({
		w: '100vw',
		h: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}),
}
