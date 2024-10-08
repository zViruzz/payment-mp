'use client'
import { paymentAction } from '@/app/actions/paymentAction'
import InputAutocomplete from '@/components/InputAutocomplete'
import type { Product } from '@/types'
import { type FormEvent, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { css } from '../../styled-system/css'
import CardList from './CardList/CardList'
import CopyUrl from './CopyUrl'
import Detail from './Detail'

interface Props {
	products: Product[]
}

export default function ProductFrom({ products }: Props) {
	const [card, setCard] = useState<Product[]>([])
	const [buttonSize, setButtonSize] = useState('normal')
	const [totalSum, setTotalSum] = useState(0)
	const [url, setUrl] = useState('')

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

	const handleClickGetLink = async () => {
		const urlToPay = await paymentAction(card)
		setUrl(urlToPay)
	}

	const handleClickUrl = () => {
		navigator.clipboard.writeText(url)
		toast.info('Link copiado en el portapapeles')
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
			<CopyUrl textUrl={url} onClick={handleClickUrl} />

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
		border: 'none',
		rounded: 'xl',
		padding: '30px',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
		sm: {
			borderColor: 'gray.600',
			width: '30rem',
			border: '1px solid',
		},
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
