import { MainTemplate } from '../templates'
import { Products } from '../components'

export function Home(data) {
	const view = Products(data)

	return MainTemplate({ children: view })
}
