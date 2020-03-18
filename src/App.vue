<template>
<div>
   <HelloWorld/>
   <Categories/>
</div>
 

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Categories from './components/Categories.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Categories
  }
}
</script>

<style>

</style>
