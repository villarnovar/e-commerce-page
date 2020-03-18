<template>
	<div class="product">
		<div id="image" v-for="item in description" :key="item.categoryId">
			<img :src="item.path" alt="">
			<h4>{{ item.name }}</h4>
			<small>{{ item.price }}</small> 
			<div id="button">
				<button class="btn btn-primary">Buy Now</button>
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
					name: 'Mens Clothes',
					price: '₦10,000',
					path: require('../assets/men-cloth.jpeg')
				},
				{
					categoryId: 2,
					name: 'Gown for women',
					price: '₦50,000',
					path: require('../assets/female-cloth.jpg')
				},
				{
					categoryId: 3,
					name: 'Adidas shoe for men',
					price: '₦250,000',
					path: require('../assets/adidas-shoe.jpeg')
				},
				{
					categoryId: 4,
					name: 'High heel for women',
					price: '₦57,000',
					path: require('../assets/female-shoe.jpeg')
				},
				{
					categoryId: 5,
					name: 'Hair band',
					price: '₦7,000',
					path: require('../assets/hair-accessory.jpeg')
				},
				{
					categoryId: 5,
					name: 'Tiara',
					price: '₦5,000',
					path: require('../assets/hair-accesory-2.jpg')
				},
				{
					categoryId: 6,
					name: 'iPhone 11',
					price: '₦500,000',
					path: require('../assets/iphone.jpeg')
				},
				{
					categoryId: 7,
					name: 'iWatch',
					price: '₦150,000',
					path: require('../assets/iwatch.jpeg')
				},
				{
					categoryId: 8,
					name: 'Dell laptop',
					price: '₦750,000',
					path: require('../assets/laptop.jpeg')
				},
				{
					categoryId: 9,
					name: 'Neck Chain and Earrings',
					price: '₦40,000',
					path: require('../assets/jewelery.jpg')
				}
			]
			}
	}
	}
</script>

<style scoped>
.product {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	padding-left: 3px;
	padding-right: 3px;
	font-family: Georgia, 'Times New Roman', Times, serif;
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
	border: solid grey 3px;
	border-radius: 5px;
	box-sizing: content-box;
}
#button {
	float: right;
	margin-top: 20px;
	margin-right: 5px;
}
button {
	background-color: rgb(46, 41, 41);
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
