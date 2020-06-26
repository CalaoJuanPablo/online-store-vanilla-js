import { MainTemplate } from '../templates'
import { ProductDetailsComponent } from '../components'

export function ProductDetails(params, router) {
	const productDetailsView = ProductDetailsComponent(params, router)

	return MainTemplate({ children: productDetailsView })
}
