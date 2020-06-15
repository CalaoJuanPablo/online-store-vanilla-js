import { MainTemplate } from '../templates'
import { ProductDetails } from '../components'

export function ProductDetails() {
	const view = ProductDetails()

	return MainTemplate({ children: view })
}
