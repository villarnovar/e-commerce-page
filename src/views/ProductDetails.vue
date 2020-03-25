<template>
	<div class="product container">
		<div id="image">
			<img :src="`${product[0].path}`" alt="">
      <div v-for="img in 3" class="flex">
      <img :src="`${product[0].path}`" alt="" class='otherImages'>
      </div>
		</div>
    <div>
    	<h4>{{ product[0].name }}</h4>
			<small>{{ product[0].price }}</small> 
      <p> {{ product[0].desc }} </p>
      <div id="button">
				<b-btn
                 class="btn btn-primary"
                :to="`/product/${product[0].categoryId}-${product[0].name.replace(/[' ']+/g,'-').toLowerCase()}`"
                >Add To Cart
                </b-btn>
			</div>
      </div>
	</div>
</template>

<script>

export default {
  name: 'ProductDetails',
  data () {
    return {
    product: null
  }
},
  created () {
    this.product = this.$store.state.products.filter((item) => {
      return item.categoryId === parseInt(this.$route.params.id)
    })
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
  width: 100%;
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

.flex {
  display: flex;
  flex-direction: row;
}

.otherImages {
  width: 4rem;
  height: 2rem;
  margin: 3px
}
</style>