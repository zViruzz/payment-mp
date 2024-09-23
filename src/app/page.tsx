import asusrog from '@/assets/asusrog.jpg'
import iphone from '@/assets/iphone.webp'
import mac from '@/assets/mac.jpeg'
import ProductFrom from '@/components/ProductFrom'
import { css } from '../../styled-system/css'
import type { Product } from '@/types'

export default function Home() {
	const suggestions: Product[] = [
		{
			id: 1,
			name: 'Iphone',
			price: 1000,
			url_image: iphone,
		},
		{
			id: 2,
			name: 'Mac',
			price: 2000,
			url_image: mac,
		},
		{
			id: 3,
			name: 'Asus Rog',
			price: 1800,
			url_image: asusrog,
		},
		{
			id: 4,
			name: 'Xiaomi mi 6',
			price: 800,
			url_image: asusrog,
		},
		{
			id: 5,
			name: 'Samsung a32',
			price: 300,
			url_image: asusrog,
		},
		{
			id: 6,
			name: 'Samsung a42',
			price: 400,
			url_image: asusrog,
		},
		{
			id: 7,
			name: 'Samsung s20',
			price: 300,
			url_image: asusrog,
		},
		{
			id: 8,
			name: 'Iphone 12 Pro',
			price: 900,
			url_image: asusrog,
		},
		{
			id: 9,
			name: 'Xiaomi redmit 8',
			price: 500,
			url_image: asusrog,
		},
	]

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
		height: '100vh',
	}),
}
