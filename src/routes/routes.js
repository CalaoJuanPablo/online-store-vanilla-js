import { Home, ProductDetails, Cart } from '../pages'

export const routes = [
	{
		path: '/',
		template: Home
	},
	{
		path: '/product/:id',
		template: ProductDetails
	},
	{
		path: '/cart',
		template: Cart
	}
]
