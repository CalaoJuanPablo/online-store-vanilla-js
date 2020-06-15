import { MainTemplate } from '../templates'
import { ProductDetailsComponent } from '../components'

export function ProductDetails() {
	const view = ProductDetailsComponent()

	return MainTemplate({ children: view })
}
