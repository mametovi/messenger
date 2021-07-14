<template>
  <div class="welcome">

    <div class="welcome-text">
      <span>Добро пожаловать в messenger</span>

      <div class="subspnan">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi ab explicabo enim!
      </div>
    </div>

    <div class="welcome-logo">
      <img src="@/assets/logo.png" alt="">
    </div>

    <div class="welcome-btn" @click="$router.push({ name: 'Registration' })">
      <b-button class="primary">Продолжить</b-button>
    </div>

      

  </div>
</template>

<script>
import Animation from "@/components/animation.js"


export default {
  name: 'Home',
  components: {
    'ex-anim': Animation,
  }
}
</script>
