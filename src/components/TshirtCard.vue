
<template>
    <div class="shadow-lg bg-white rounded-lg relative">
        <div v-show="flag" class="flex justify-center items-center rounded-full w-12 h-12 bg-rose-600 rotate-12 absolute top-0 right-0">
            <span class="font-bold text-white"> {{ flag }} </span>
        </div>
        <div class="card-image p-4 flex justify-center">
            <figure class="image is-4by3">
            <img :src="imgUrl">
            </figure>
        </div>
        <div class="card-content p-4">
          <h3>
              {{ title }}
          </h3>
           <h3>
              {{ price }}
          </h3>
        </div>
    </div>

</template>


<script>
export default {
  name: 'TshirtCard',
  props: {
    id:String,
    title: String,
    price: String,
    flag:String,
    imgUrl:String
  }, 
  data(){
    return {

    }
  },
  

}
</script>
