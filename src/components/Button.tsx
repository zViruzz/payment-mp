'use client'
import type React from 'react'
import { type ButtonHTMLAttributes, useState } from 'react'
import { css } from '../../styled-system/css'
import type { SystemStyleObject } from '../../styled-system/types'

// interface Props {
// 	onClick?: () => void
// 	children: React.ReactNode
// }

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	css?: SystemStyleObject
}

export default function Button({ children, ...props }: ButtonProps) {
	const [buttonSize, setButtonSize] = useState('normal')
	return (
		<button
			type='button'
			className={css(styles.button, {
				scale: buttonSize === 'normal' ? '1' : '0.99',
			})}
			onMouseDown={() => setButtonSize('small')}
			onMouseUp={() => setButtonSize('normal')}
			{...props}
		>
			{children}
		</button>
	)
}

const styles = {
	button: css.raw({
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
