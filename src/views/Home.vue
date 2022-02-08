<template>
  <div class="home">
    <TshirtCard />
  <li v-for="event in storeTshirts" :key="event.id">
    {{ event }}
  </li>
<div class="justify-center flex bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
      Hello 👋🏼
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TshirtCard from '@/components/TshirtCard.vue'

export default {
  name: 'Home',
  components: {
    TshirtCard
  },
    data(){
    return {
      storeTshirts: [],
    }
  },

}
</script>
