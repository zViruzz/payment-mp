import { type FormHTMLAttributes, forwardRef } from 'react'
import { css } from '../../../styled-system/css'
import type { SystemStyleObject } from '../../../styled-system/types'

export interface FormContainerProps
	extends FormHTMLAttributes<HTMLFormElement> {
	css?: SystemStyleObject
}

const FormContainer = forwardRef<
	HTMLInputElement,
	FormContainerProps
>(({ css: cssProps, children, ...props }, ref) => {
	return (
		<form
			className={css(style, cssProps)}
			ref={ref as React.Ref<HTMLFormElement>}
			{...props}
		>
			{children}
		</form>
	)
})
FormContainer.displayName = 'FormContainer'

const style = css.raw({
	border: 'none',
	borderColor: 'gray.600',
	rounded: 'xl',
	padding: '30px',
	width: '100vw',
	display: 'flex',
	flexDirection: 'column',
	gap: '15px',
	sm: {
		borderColor: 'gray.600',
		width: '30rem',
		border: '1px solid',
	},
	'& h2': {
		textAlign: 'center',
		fontSize: '20px',
		lineHeight: 'none',
		marginBottom: '13px',
	},
	'& label': {
		color: '#919191FF',
		marginBottom: '4px',
		display: 'block',
	},
})

export { FormContainer }
