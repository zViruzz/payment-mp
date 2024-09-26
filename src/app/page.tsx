import ProductFrom from '@/components/ProductFrom'
import { sql } from '@vercel/postgres'

import type { Product } from '@/types'
import { css } from '../../styled-system/css'

export default async function Home() {
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
