import type { Product } from '@/types'
import Image from 'next/image'
import React from 'react'
import { css } from '../../../styled-system/css'
import CloseIcon from '../icons/CloseIcon'
import { styles } from './CardListStyle'

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
							<div>
								<Image
									src={product.url_image}
									className={styles.image}
									width={180}
									height={180}
									alt={`Product ${product.name}`}
								/>
							</div>

							<div className={styles.containerDetail}>
								<div className={styles.header}>
									<div>{`id: ${product.id}`}</div>
									<div>
										<button
											type='button'
											onClick={() => removeProduct(index)}
										>
											<CloseIcon width={28} height={28} />
										</button>
									</div>
								</div>

								<div className={styles.detail}>
									<p
										className={css({
											fontWeight: 'semibold',
										})}
									>{`${product.name}`}</p>
									<p
										className={css({
											fontSize: '1.3rem',
										})}
									>{`$ ${product.price}`}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			) : null}
		</>
	)
}
