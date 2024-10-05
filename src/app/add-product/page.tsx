'use client'
import Button from '@/components/Button'
import { FormContainer } from '@/components/ui/FormContainmer'
import { Input } from '@/components/ui/Input'
import React, { type FormEvent } from 'react'
import { toast } from 'sonner'
import { css } from '../../../styled-system/css'
import { addProductAction } from '../actions/addProductAction'

export default function page() {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault()
			const formData = new FormData(event.currentTarget)

			const result = await addProductAction(formData)
			console.log('🚀 ~ handleSubmit ~ result:', result)

			if (result.error !== null) {
				toast.error(result.error)
				return
			}

			toast.success(result.message)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<div>
				<h2>Agregar producto</h2>
			</div>

			<div>
				<label htmlFor='name'>Nombre</label>
				<Input name='name' type='text' />
			</div>

			<div>
				<label htmlFor='price'>Precio</label>
				<Input name='price' type='number' />
			</div>

			<div>
				<label htmlFor='image'>Imagen</label>
				<Input name='image' type='file' />
			</div>

			<div>
				<Button type='submit'>Agregar</Button>
			</div>
		</FormContainer>
	)
}

const styles = {}
