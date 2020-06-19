import { MainTemplate } from '../templates'
import { ProductDetailsComponent } from '../components'

export function ProductDetails(params, router) {
	const view = ProductDetailsComponent(params, router)

	return MainTemplate({ children: view })
}
