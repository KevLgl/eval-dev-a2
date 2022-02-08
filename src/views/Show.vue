<template>
    <div class="flex bg-white rounded-lg relative">
      <div class="w-1/3">
        <div class=" relative card-image p-4 flex justify-center">
            <div class="flex justify-center items-center rounded-full w-12 h-12 bg-rose-600 rotate-12 absolute top-0 right-0">
              <span class="font-bold text-white"> {{ flag }} </span>
            </div>
            <figure class="image is-4by3">
            <img :src="imgUrl">
            </figure>
        </div>
      </div>
      <div>
        <div class="card-content p-4 w-2/3">
          <h3>
             <span class="font-bold">Nom:</span> {{ title }}
          </h3>
           <h3>
              <span class="font-bold">Prix:</span> {{ price }}
          </h3>
          <h3>
              <span class="font-bold">Description:</span> {{ description }}
          </h3>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Show',
  props: {
    id:String,
    title: String,
    price: String,
    flag:String,
    imgUrl:String,
    description:String,
  }, 
  components: {

  },
    data(){
    return {

    }
  },

}
</script>