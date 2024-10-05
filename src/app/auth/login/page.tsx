'use client'
import Button from '@/components/Button'
import { Input } from '@/components/ui/Input'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { type FormEvent } from 'react'
import { css } from '../../../../styled-system/css'

export default function loginPage() {
	const router = useRouter()

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const dataForm = new FormData(event.currentTarget)

		const data = {
			email: dataForm.get('email') as string,
			password: dataForm.get('password') as string,
		}

		const resultLogin = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		})

		if (resultLogin === undefined) {
			throw Error('signIn undefined')
		}
		if (resultLogin.ok !== true) {
			alert('Error')
		} else {
			router.refresh()
		}
	}

	return (
		<div className={styles.containerPage}>
			<form className={styles.containerLogin} onSubmit={handleSubmit}>
				<div>
					<h2>Login</h2>
				</div>

				<div>
					<label htmlFor='User'>User</label>
					<Input type='email' name='email' />
				</div>

				<div>
					<label htmlFor='Password'>Password</label>
					<Input type='password' name='password' />
				</div>

				<div className={styles.containerButton}>
					<Button type='submit'>Login</Button>
				</div>
			</form>
		</div>
	)
}

const styles = {
	containerPage: css({
		w: '100vw',
		h: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}),
	containerLogin: css({
		border: '1px solid',
		borderColor: 'gray.600',
		rounded: 'xl',
		padding: '30px',
		width: '30rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '15px',
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
	}),
	containerButton: css({
		mt: '7px',
	}),
}
