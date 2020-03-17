<template>
  <div class="category">
    <b-list-group v-for="category in categories" :key="category.id">
    <b-list-group-item button class="list">{{ category.name }}  </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>

export default {
  name: 'Category',
  data () {
    return {
      categories: [
        { name: `Shirts`, id: 1 },
        { name: `Gown`, id: 2 },
        { name: `Shoes`, id: 3 },
        { name: `Sneakers`, id: 4 },
        { name: 'Cars', id: 5 },
        { name: 'Books', id: 6},
        { name: 'TV', id: 7},
        { name: 'Laptop', id: 8},
      ]
    }
  }
}
</script>

<style scoped>
.category{
  position: sticky;
}
.list {
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 3px;
  margin-right: 15px;
  font-size: 20px;
  cursor: pointer;

}

.list:hover {
  background-color: grey;
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
