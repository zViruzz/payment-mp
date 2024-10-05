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
			<div
				className={css({
					textOverflow: 'ellipsis',
					overflow: 'hidden',
					whiteSpace: 'nowrap',
				})}
			>
				{textUrl}
			</div>
			<CopyIcon
				className={css({
					minW: '20px',
					minH: '20px',
				})}
			/>
		</button>
	)
}

const styles = {
	buttonUrl: css.raw({
		border: '1px solid #5E5E5EFF',
		rounded: '7px',
		textAlign: 'left',
		justifyContent: 'space-between',
		alignItems: 'center',

		p: '10px 15px',
		color: 'sky.500',
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
