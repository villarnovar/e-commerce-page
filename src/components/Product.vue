<template>
	<div class="product">
		<div id="image">
			<img :src="`${product.path}`" alt="">
			<h4>{{ product.name }}</h4>
			<small>{{ product.price }}</small> 
			<div id="button">
				<b-btn
                 class="btn btn-primary"
                :to="`/product/${product.categoryId}-${product.name.replace(/[' ']+/g,'-').toLowerCase()}`"
                >Add To Cart
                </b-btn>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	name: 'Product',
    props: ["product"]
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
