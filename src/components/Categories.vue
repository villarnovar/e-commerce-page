<template>
  <div class="category">
    <ul>
      <li v-for="category in allcategories" :key="category.id">
        <h4>
          {{ category.name }}        
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      allcategories: [
        { name: `men's clothes`, id: 1 },
        { name: `women's clothes`, id: 2 },
        { name: `men's shoes`, id: 3 },
        { name: `women's shoes`, id: 4 },
        { name: 'sneakers', id: 5 },
        { name: 'phones', id: 6},
        { name: 'watches', id: 7},
        { name: 'laptops', id: 8},
        { name: 'jewelleries', id: 9}
      ]
    }
  }
}
</script>

<style scoped>
li {
  color: whitesmoke;
  background-color: rgb(46, 41, 41);
  list-style-type: none;
  border: solid 1px black;
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 3px;
  margin-right: 15px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  cursor: pointer;
}
li:hover {
  background-color: rgb(19, 15, 15);
}
h4 {
  margin-left: 20px;
}
.category {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
</style>