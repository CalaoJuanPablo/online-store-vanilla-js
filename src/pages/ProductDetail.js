import { MainTemplate } from '../templates'
import { ProductDetailsComponent } from '../components'

export function ProductDetails(props) {
	const view = ProductDetailsComponent(props)

	return MainTemplate({ children: view })
}
