import { Header } from '../components'
import { Footer } from '../components'

export function MainTemplate({ children }) {
	const mainTemplate = document.createElement('div')
	mainTemplate.appendChild(Header())
	mainTemplate.appendChild(children)
	mainTemplate.appendChild(Footer())
	const view = `
		${Header()}
		${children}
		${Footer()}
	`

	return mainTemplate
}
