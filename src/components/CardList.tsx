import type { Product } from '@/types'
import React from 'react'
import { css } from '../../styled-system/css'
import CloseIcon from './icons/CloseIcon'

interface Props {
	card: Product[]
	removeProduct: (index: number) => void
}

export default function CardList({ card, removeProduct }: Props) {
	return (
		<>
			{card.length !== 0 ? (
				<div className={styles.productList}>
					{card.map((product, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={index} className={styles.productItem}>
							<div>{`${product.id} - ${product.name}`}</div>
							<div
								className={css({
									display: 'flex',
									gap: '20px',
								})}
							>
								<div>{`${product.price} $`}</div>
								<button type='button' onClick={() => removeProduct(index)}>
									<CloseIcon />
								</button>
							</div>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}

const styles = {
	productItem: css({
		border: '1px solid #ffffff',
		borderRadius: '5px',
		padding: '10px',
		display: 'flex',
		justifyContent: 'space-between',
	}),
	productList: css({
		display: 'flex',
		flexDirection: 'column',
		gap: '10px',
	}),
}
