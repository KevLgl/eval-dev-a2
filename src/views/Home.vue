<template>
  <div class="home flex flex-wrap">
    <div class="w-1/5 max-h-72 m-14" v-for="event in storeTshirts" :key="event.id">
       <router-link :to="{ name: 'Show', params: { id: event.id, title: event.name, price: event.price, flag: event.flag, imgUrl: event.imageURL, description: event.description } }" > 
          <TshirtCard :id="event.id" :title="event.name" :price="event.price" :flag="event.flag" :imgUrl="event.imageURL"/>
      </router-link>
    </div>
  </div>

<div class="flex flex-col items-center my-12">
    <div class="flex text-gray-700">
        <button @click="changePage('prev')" class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-4 h-4">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <div class="flex h-8 font-medium rounded-full bg-gray-200">
            <button @click="changePage(page -1)" v-if="page>1" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">{{ page -1}}</button>
            <div class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-pink-600 text-white ">{{page}}</div>
            <button @click="changePage(page +1)" class="w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">{{page +1}}</button>
            <div class="w-8 h-8 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-pink-600 text-white">4</div>
        </div>
        <button @click="changePage('next')" class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-4 h-4">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
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
      storeTshirts:[], 
      page:1, 
      baseAPI:"http://vps-a47222b1.vps.ovh.net/TShirt/page/",
    }
  },
  methods:{
    changePage: function(scope){
        if(scope === 'prev'){
            this.page--
            fetch(this.baseAPI + this.page)
            .then((res) => res.json())
            .then((data) => {
            this.storeTshirts = data
        });
        }else if(scope === 'next'){
            this.page++
            fetch(this.baseAPI + this.page)
            .then((res) => res.json())
            .then((data) => {
            this.storeTshirts = data
        });
        }else{
            this.page = scope
            fetch(this.baseAPI + this.page)
            .then((res) => res.json())
            .then((data) => {
            this.storeTshirts = data
        });
      }
      window.scrollTo(0, 0);
      }
  },
   mounted() {
    fetch("http://vps-a47222b1.vps.ovh.net/TShirt/page/" + this.page)
      .then((res) => res.json())
      .then((data) => {
        this.storeTshirts = data
      });
   }
}
</script>
