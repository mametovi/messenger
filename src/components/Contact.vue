<template>
  <div class="c-contact">
    
    <div class="c-contact-ava">  
      <img v-if="ava" :src="getImgUrl(ava)" :alt="name">
      <!-- <div v-else>{{ name }}</div> -->
    </div>

    <div class="c-contact-body">
      <div class="c-contact-name">
        {{ name }}
        
        
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Contact",

    props: {
      ava: {
        type: String,
      },
      
      name: {
        type: String,
        required: true
      },

    },

    methods: {
      getImgUrl(pet) {
        var images = require(pet)
        return images
      }
    }
  }
</script>