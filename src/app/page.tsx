import ProductFrom from '@/components/ProductFrom'
import type { Product } from '@/types'
import { auth } from '@/util/auth'
import { sql } from '@vercel/postgres'
import { redirect } from 'next/navigation'
import { css } from '../../styled-system/css'

export default async function Home() {
	const session = await auth()

	if (session === null) {
		redirect('/auth/login')
	}

	const products = await sql`SELECT * FROM Products;`
	const suggestions = products.rows as Product[]

	return (
		<div className={styles.container}>
			<ProductFrom products={suggestions} />
		</div>
	)
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
