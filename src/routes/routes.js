import { Home, ProductDetails, Cart } from '../pages'

export const routes = [
	{
		path: '/',
		getTemplate: (params) => Home(params)
	},
	{
		path: '/product/:id',
		getTemplate: (params) => ProductDetails({ productId: params.id })
	},
	{
		path: '/cart',
		getTemplate: (params) => Cart(params)
	}
]
