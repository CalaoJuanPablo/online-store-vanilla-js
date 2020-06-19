import { CartComponent } from '../components'
import { MainTemplate } from '../templates'

export function Cart() {
	const view = CartComponent()

	return MainTemplate({ children: view })
}
