import { MainTemplate } from '../templates'
export function Home() {
	const view = `
		<section class="PageHome">
			<h1>Hello from Home</h1>
		</section>
	`

	return MainTemplate({ children: view })
}
