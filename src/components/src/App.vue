<template>
<div id="app">
  
  <Header />
  <div id="container">
    <div id="firstside">
      <category />
    </div>
    
    <product />
  </div>
  
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Category from '@/components/Category'
import Product from '@/components/Product'


export default {
  name: 'Home',
  components: {
    Header,
    Category,
    Product
    
  }

}
</script>

<style scoped>
  #container{
    display: grid;
    grid-template-columns: 50vh 90vh 1fr;
    height: 100vh;

}

</style>
