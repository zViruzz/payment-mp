import React from 'react'
import { css } from '../../styled-system/css'
import CopyIcon from './icons/CopyIcon'

interface Props {
	onClick: () => void
	textUrl: string
}

export default function CopyUrl({ onClick, textUrl }: Props) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={css(
				{ display: textUrl === '' ? 'none' : 'flex' },
				styles.buttonUrl,
			)}
		>
			{textUrl}
			<CopyIcon width={25} height={25} />
		</button>
	)
}

const styles = {
	buttonUrl: css.raw({
		border: '1px solid #5E5E5EFF',
		rounded: '7px',
		textAlign: 'left',
		p: '5px 15px',
		color: 'sky.500',
		alignItems: 'center',
		transition: 'ease-in .1s',
		_hover: {
			bg: '#222222FF',
			cursor: 'pointer',
		},
		_active: {
			bg: '#161616FF',
		},
	}),
}
