import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        categoryId: 1,
        name: 'Sweater',
        price: '₦15,000',
        path: require('../assets/sweater.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      },
      {
        categoryId: 2,
        name: 'Gown',
        price: '₦20,000',
        path: require('../assets/gown.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 3,
        name: 'Nike Air Max',
        price: '₦56,000',
        path: require('../assets/nike.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
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
        path: require('../assets/watch.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 5,
        name: 'Iphone 11 pro max',
        price: '₦465,000',
        path: require('../assets/11pro.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 6,
        name: 'iPhone 11 pro max',
        price: '₦500,000',
        path: require('../assets/11pro.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 7,
        name: 'iWatch',
        price: '₦150,000',
        path: require('../assets/watch.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 8,
        name: 'Macbook Air 2014',
        price: '₦450,000',
        path: require('../assets/macbook.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
      {
        categoryId: 9,
        name: 'JBL Speakers',
        price: '₦70,000',
        path: require('../assets/speaker.jpeg'),
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      },
              {
        categoryId: 9,
        name: 'Shorts',
        price: '₦10,000',
        path: require('../assets/shorts.jpeg'),
        moreimg : ['https://source.unsplash.com/assets/grid-likes-17d8c9c95aa04afeb7128e2f52893dc46f7e3dc087fa9e2ff37fc8f5a8bafc67.png'],
        desc: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum"
      
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
