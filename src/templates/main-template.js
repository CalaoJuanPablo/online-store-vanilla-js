import { Header } from '../components'
import { Footer } from '../components'

export function MainTemplate({ children }) {
	const view = `
		${Header()}
		${children}
		${Footer()}
	`

	return view
}
