class API {
	constructor() {
		this.data = [
			{
				id: 1,
				name: 'Headphones',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 199,
				image:
					'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 2,
				name: 'Smartwatch',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 259,
				image:
					'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80'
			},
			{
				id: 3,
				name: 'Coco Oil',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 79,
				image:
					'https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 4,
				name: 'Nice Bike',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 199,
				image:
					'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80'
			},
			{
				id: 5,
				name: 'Retrocam',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 349,
				image:
					'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 6,
				name: 'Desktop Plant',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 39,
				image:
					'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
			},
			{
				id: 7,
				name: 'Colorful cooking',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 69,
				image:
					'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 8,
				name: 'Wazglass Sunglasses',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 99,
				image:
					'https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'
			},
			{
				id: 9,
				name: 'PS4',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 399,
				image:
					'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 10,
				name: 'MacBook Air',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 699,
				image:
					'https://images.unsplash.com/photo-1476170434383-88b137e598bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 11,
				name: 'Casual Watch',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 199,
				image:
					'https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			},
			{
				id: 12,
				name: 'Royal Socks',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida leo a pretium convallis. Nullam eu tristique mi, et cras amet.',
				price: 59,
				image:
					'https://images.unsplash.com/photo-1535486607281-4fc90307a8bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
			}
		]
		this.cart = []
	}

	getProduct(productId) {
		const [productFound] = this.data.filter((product) => {
			return product.id == productId
		})

		return productFound
	}

	setProductInCart(productId) {
		const product = this.getProduct(productId)
		this.cart.push(product)
	}

	dropProductFromCart(productId) {}
}

export const api = new API()
