import { auth } from '@/util/auth'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import { css } from '../../../styled-system/css'

export default async function AddProduct({
	children,
}: { children: React.ReactNode }) {
	const session = await auth()

	if (session === null) {
		redirect('/auth/login')
	}

	const products = await sql`SELECT * FROM Products;`

	return <div className={styles.container}>{children}</div>
}

const styles = {
	container: css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
	}),
}
