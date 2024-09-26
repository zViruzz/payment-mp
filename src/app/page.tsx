import ProductFrom from '@/components/ProductFrom'
import type { Product } from '@/types'
import { css } from '../../styled-system/css'

export default function Home() {
	const suggestions: Product[] = [
		{
			id: '1',
			name: 'Iphone',
			price: 1000,
			url_image:
				'https://th.bing.com/th/id/OIP.f0TxVuQRnOhEoQq9JCmlzwHaHa?rs=1&pid=ImgDetMain',
		},
		{
			id: '2',
			name: 'Mac',
			price: 2000,
			url_image:
				'https://laptopmedia.com/wp-content/uploads/2017/06/macbook_pro_13_a_1143_0_0.jpg',
		},
		{
			id: '3',
			name: 'Asus Rog',
			price: 1800,
			url_image:
				'https://th.bing.com/th/id/OIP.JbrM9IZltyyK0LyF_ED92QHaFj?rs=1&pid=ImgDetMain',
		},
		{
			id: '4',
			name: 'Xiaomi mi 6',
			price: 800,
			url_image:
				'https://top10smartfonov.ru/wp-content/uploads/2018/01/xiaomimi6gbblue2-1000x1000.jpg',
		},
		{
			id: '5',
			name: 'Samsung a32',
			price: 300,
			url_image:
				'https://th.bing.com/th/id/OIP.DS2dCE4Mm2FLFNGBdNGbLQHaHa?rs=1&pid=ImgDetMain',
		},
		{
			id: '6',
			name: 'Samsung a42',
			price: 400,
			url_image:
				'https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_Galaxy_A42.jpg',
		},
		{
			id: '7',
			name: 'Samsung s20',
			price: 300,
			url_image:
				'https://images.samsung.com/is/image/samsung/in-galaxy-s20-plus-sm-g985-sm-g985fzpdinu-frontbpurple-261486035?',
		},
		{
			id: '8',
			name: 'Iphone 12 Pro',
			price: 900,
			url_image:
				'https://th.bing.com/th/id/R.ca22d1ba23f974f3d67fa5c96d74777a?rik=FLjgVzFZkrDeVg&pid=ImgRaw&r=0',
		},
		{
			id: '9',
			name: 'Xiaomi redmit 8',
			price: 500,
			url_image:
				'https://images.frandroid.com/wp-content/uploads/2021/01/xiaomi-redmi-note-9t-officialisation-2.jpg',
		},
	]

	return (
		<div className={styles.container}>
			<ProductFrom products={suggestions} />
			{/* <div
				className={css({
					position: 'absolute',
					p: '10px 20px',
					bg: '#3D3D3DFF',
					rounded: '20px',
					bottom: '8',
				})}
			>
				Notification!
			</div> */}
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
