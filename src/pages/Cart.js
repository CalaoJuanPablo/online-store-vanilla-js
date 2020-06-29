import { CartComponent } from '../components'
import { MainTemplate } from '../templates'

export function Cart(params, router) {
	const view = CartComponent()

	return MainTemplate({ children: view }, router)
}
