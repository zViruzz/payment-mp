import type { Product } from '@/types'
import {
	type ChangeEvent,
	type KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from 'react'
import { css } from '../../styled-system/css'
import { Input } from './ui/Input'

interface Props {
	data: Product[]
	onProductSelect: (product: Product) => void
}

export default function InputAutocomplete({
	data,
	onProductSelect,
}: Props) {
	const [searchSuggestions, setSearchSuggestions] = useState<
		Product[]
	>([])
	const [selectedItem, setSelectedItem] = useState(0)
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setSearchSuggestions([])
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const filterSearch = (value: string): Product[] => {
		if (data === null) {
			return []
		}
		const filteredSuggestions = data.filter((product) =>
			product.name.toLowerCase().includes(value.toLowerCase()),
		)

		return filteredSuggestions
	}

	const onSuggestion = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchSuggestions(filterSearch(event.target.value))
		setSelectedItem(0)
		if (event.target.value === '') {
			setSearchSuggestions([])
		}
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		// if (selectedItem < searchSuggestions.length) {
		if (e.key === 'ArrowUp' && selectedItem > 0) {
			e.preventDefault()
			setSelectedItem((prev) => prev - 1)
		} else if (
			e.key === 'ArrowDown' &&
			selectedItem < searchSuggestions.length - 1
		) {
			e.preventDefault()
			setSelectedItem((prev) => prev + 1)
		} else if (e.key === 'Enter' && selectedItem >= 0) {
			// console.log('Enter a ', searchSuggestions[selectedItem])
			// changeProduct(searchSuggestions[selectedItem])
		}
		// }
	}

	const handleClick = () => {
		onProductSelect(searchSuggestions[selectedItem])
		setSearchSuggestions([])
	}

	const handleFocus = (index: number) => {
		setSelectedItem(index)
	}

	return (
		<div className={styles.container} ref={containerRef}>
			<Input
				onChange={onSuggestion}
				placeholder='Search'
				onKeyDown={handleKeyDown}
				css={{ width: '100%' }}
			/>
			{searchSuggestions.length === 0 ? null : (
				<div className={styles.autocompleteContainer}>
					<ul>
						{searchSuggestions.slice(0, 5).map((product, index) => (
							<li key={product.id}>
								<button
									type='submit'
									onFocus={() => handleFocus(index)}
									onClick={handleClick}
									className={css(styles.item, {
										background:
											selectedItem === index ? '#222222FF' : '',
									})}
								>
									{product.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

const styles = {
	container: css({
		position: 'relative',
	}),
	autocompleteContainer: css({
		zIndex: '10',
		width: '100%',
		marginTop: '5px',
		padding: '.6rem',
		position: 'absolute',
		border: '1px solid #333333FF',
		borderRadius: 'xl',
		background: '#141414FF',
	}),
	item: css.raw({
		textAlign: 'left',
		width: '100%',
		borderRadius: '5px',
		padding: '5px 10px',
		border: '0px solid',
	}),
	input: css({
		width: '100%',
	}),
}
