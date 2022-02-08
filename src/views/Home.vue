<template>
  <div class="home flex flex-wrap">
    <div class="w-1/5 max-h-72 m-8" v-for="event in storeTshirts" :key="event.id">
       <router-link :to="{ name: 'Show', params: { id: event.id, title: event.name, price: event.price, flag: event.flag, imgUrl: event.imageURL } }" > 
          <TshirtCard :id="event.id" :title="event.name" :price="event.price" :flag="event.flag" :imgUrl="event.imageURL"/>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TshirtCard from '@/components/TshirtCard.vue'

export default {
  name: 'Home',
    props: {
    id:String,
    title: String,
    price: String,
    flag:String,
    imgUrl:String
  }, 
  components: {
    TshirtCard
  },
    data(){
    return {
      storeTshirts:[]
    }
  },
   mounted() {
    fetch("http://vps-a47222b1.vps.ovh.net/TShirt")
      .then((res) => res.json())
      .then((data) => {
        this.storeTshirts = data
      });
   }
}
</script>
