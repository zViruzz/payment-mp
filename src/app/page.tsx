import ProductFrom from '@/components/ProductFrom'
import { sql } from '@vercel/postgres'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import type { Product } from '@/types'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { css } from '../../styled-system/css'

export default async function Home() {
	const session = await getServerSession(authOptions)

	if (session === null) {
		redirect('/auth/login')
	}

	const products = await sql`SELECT * FROM Products;`

	console.log('🚀 ~ Home ~ products:', products)
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
