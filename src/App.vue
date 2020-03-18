<template>
  <div id="app">
    <Header />
       
        <div class="container-fluid mt-3 main">
          <div class="row">
            <div class="col-sm-3 cat-div">
              <ul class="list-group li-div">
                <li class="list-group-item active">Categories</li>
              </ul>  
              <Category/>
            </div>
            <div class="col-lg-6 carousel-div">
              <Imageslider />
            </div>
            <div class="col-lg-3 mt-3">
              <div class="card">
        
              </div>
            </div>
          </div>
        </div>

        <div class="container mt-4 product-div">
          </div>
                <Product />
        </div>
  

</template>
  

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Category from '@/components/Category'
import Product from '@/components/Product'
import Imageslider from '@/components/Imageslider'

export default {
  name: 'Home',
  components: {
    Header,
    Category,
    Product,
    Imageslider
    
  }

}
</script>

<style scoped>


</style>
