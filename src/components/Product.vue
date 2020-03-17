<template>
	<div class="product">
		<div id="image" v-for="item in description" :key="item.categoryId">
			<img :src="item.path" alt="">
			<h4>{{ item.name }}</h4>
			<small>{{ item.price }}</small> 
			<div id="button">
				<button class="btn btn-primary">Add To Cart</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: 'Product',
	data () {
			return {
			description: [
				{
					categoryId: 1,
					name: 'Sweater',
					price: '₦15,000',
					path: require('../assets/sweater.jpeg')
				},
				{
					categoryId: 2,
					name: 'Gown',
					price: '₦20,000',
					path: require('../assets/gown.jpeg')
				},
				{
					categoryId: 3,
					name: 'Nike Air Max',
					price: '₦56,000',
					path: require('../assets/nike.jpeg')
				},
				{
					categoryId: 4,
					name: 'Shoe',
					price: '₦33,000',
					path: require('../assets/shoes.jpeg')
				},
				{
					categoryId: 5,
					name: 'Apple watch series 3',
					price: '₦135,000',
					path: require('../assets/watch.jpeg')
				},
				{
					categoryId: 5,
					name: 'Iphone 11 pro max',
					price: '₦465,000',
					path: require('../assets/11pro.jpeg')
				},
				{
					categoryId: 6,
					name: 'iPhone 11 pro max',
					price: '₦500,000',
					path: require('../assets/11pro.jpeg')
				},
				{
					categoryId: 7,
					name: 'iWatch',
					price: '₦150,000',
					path: require('../assets/watch.jpeg')
				},
				{
					categoryId: 8,
					name: 'Macbook Air 2014',
					price: '₦450,000',
					path: require('../assets/macbook.jpeg')
				},
				{
					categoryId: 9,
					name: 'JBL Speakers',
					price: '₦70,000',
					path: require('../assets/speaker.jpeg')
				},
								{
					categoryId: 9,
					name: 'Shorts',
					price: '₦10,000',
					path: require('../assets/shorts.jpeg')
				}
			]
			}
	}
	}
</script>

<style scoped>
.product {
	display: grid;
	grid-template-columns: 2fr 2fr 2fr;
	padding-left: 30px;
	padding-right: 30px;
	font-family: Georgia, 'Times New Roman', Times, serif;
	justify-content: space-between;

}

img {
	width: 290px;
	height: 300px;
}

#image {
	width: 290px;
	height: 400px;
	margin-top: 3px;
	margin-bottom: 5px;
	border: 2px solid gold;
	border-radius: 5px;
	box-sizing: content-box;
	margin-right: 20px;
}

#button {
	float: right;
	margin-top: 20px;
	margin-right: 5px;
}

button {
	background-color: gold;
	border: none;
}

button:hover {
	background-color: rgb(19, 15, 15);
}

h4 {
	margin-left: 5px;
	font-weight: bolder;
}

small {
	color: rgb(32, 30, 30);
	margin-left: 5px;
	font-size: 17px;
}
</style>
