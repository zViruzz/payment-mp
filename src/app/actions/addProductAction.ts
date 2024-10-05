'use server'
import type { Product } from '@/types'
import { put } from '@vercel/blob'
import { sql } from '@vercel/postgres'

export async function addProductAction(formData: FormData) {
	const rawFormData = {
		name: formData.get('name') as string,
		price: formData.get('price') as string,
		image: formData.get('image') as File,
	}

	const { url } = await put(
		rawFormData.image.name,
		rawFormData.image,
		{
			access: 'public',
		},
	)

	const res = await sql`SELECT * FROM Products;`
	const products = res.rows as Product[]
	const isExists = products.some(
		(product) =>
			product.name.trim().toLowerCase() ===
			rawFormData.name.trim().toLowerCase(),
	)

	if (isExists) {
		return {
			status: 'done',
			error: 'Existing product',
		}
	}

	const resBD =
		await sql`INSERT INTO Products (name, price, url_image) VALUES (${rawFormData.name}, ${rawFormData.price}, ${url});`

	return {
		message: 'Producto agregado correctamente',
		status: 'done',
		error: null,
	}
}
