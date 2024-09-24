'use client'
import InputAutocomplete from '@/components/InputAutocomplete'
import type { Product } from '@/types'
import { type FormEvent, useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import CardList from './CardList/CardList'
import Detail from './Detail'

interface Props {
	products: Product[]
}

export default function ProductFrom({ products }: Props) {
	const [card, setCard] = useState<Product[]>([])
	const [buttonSize, setButtonSize] = useState('normal')
	const [totalSum, setTotalSum] = useState(0)

	useEffect(() => {
		let result = 0
		for (const element of card) {
			result = result + element.price
		}
		setTotalSum(result)
	}, [card])

	const addProduct = (product: Product) => {
		setCard((prev) => {
			return product ? [...prev, product] : prev
		})
	}

	const removeProduct = (index: number) => {
		const newCard = [...card]
		newCard.splice(index, 1)
		setCard(newCard)
	}

	const handleClickGetLink = () => {
		console.log('get link')
		console.log(process.env.MP_LOCAL)
	}

	return (
		<form
			className={styles.containerForm}
			onSubmit={(event: FormEvent<HTMLFormElement>) => {
				event.preventDefault()
			}}
		>
			<div>
				<h1 className={styles.h1}>Products</h1>
			</div>

			<div>
				<InputAutocomplete
					data={products}
					onProductSelect={addProduct}
				/>
			</div>

			<CardList card={card} removeProduct={removeProduct} />

			<Detail totalSum={totalSum} quantity={card.length} />

			<div>
				<button
					type='button'
					className={css(styles.getLink, {
						scale: buttonSize === 'normal' ? '1' : '0.99',
					})}
					onClick={handleClickGetLink}
					onMouseDown={() => setButtonSize('small')}
					onMouseUp={() => setButtonSize('normal')}
				>
					Get
				</button>
			</div>
		</form>
	)
}

const styles = {
	h1: css({
		textAlign: 'center',
		fontSize: '20px',
		lineHeight: 'none',
		marginBottom: '13px',
	}),
	containerForm: css({
		border: '1px solid',
		borderColor: 'gray.600',
		rounded: 'xl',
		padding: '30px',
		width: '30rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
	}),
	getLink: css.raw({
		width: '100%',
		background: '#176fee',
		padding: '10px',
		borderRadius: '.45rem',
		transition: 'all 0.1s  ease',
		_hover: {
			cursor: 'pointer',
			background: '#1965CEFF',
		},
		_active: {
			background: '#1F7CFFFF',
		},
	}),
}
