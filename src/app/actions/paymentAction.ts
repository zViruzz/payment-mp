'use server'
import type { Product } from '@/types'
import MercadoPagoConfig, { Preference } from 'mercadopago'
import type { Items } from 'mercadopago/dist/clients/commonTypes'
import type { PreferenceRequest } from 'mercadopago/dist/clients/preference/commonTypes'

export async function paymentAction(card: Product[]) {
	if (process.env.MP_ACCESS_TOKEN === undefined) {
		throw new Error('MP_ACCESS_TOKEN is not defined')
	}

	const client = new MercadoPagoConfig({
		accessToken: process.env.MP_ACCESS_TOKEN,
	})

	const listItem = card.map((product) => {
		const result: Items = {
			id: product.id,
			title: product.name,
			description: 'product description',
			picture_url: product.url_image,
			quantity: 1,
			currency_id: 'ARS',
			unit_price: product.price,
		}
		return result
	})

	const payment = new Preference(client)
	const body: PreferenceRequest = {
		items: listItem,
		statement_descriptor: 'statement_descriptor',
		additional_info: 'additional_info',
	}

	const result = await payment.create({ body })

	if (result.init_point === undefined) {
		throw new Error('init_point is not defined')
	}
	return result.init_point
}
