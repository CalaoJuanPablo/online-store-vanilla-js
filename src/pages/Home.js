import { MainTemplate } from '../templates'
import { Products } from '../components'

export function Home() {
	const view = Products()

	return MainTemplate({ children: view })
}
