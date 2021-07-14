<template>
  <div>


      <ul class="nav control mat-ripple tiny">

        <li data-route="list-account" class="list-account">
            <router-link to="/search"><img src="../assets/svg/user.svg" alt=""></router-link>
        </li>
        
        <li data-route="list-text" class="list-text">
          <router-link to="/contacts"><img src="../assets/svg/comment.svg" alt=""></router-link>
        </li>

        <li data-route="list-phone" class="list-phone">
         <router-link to="/phone"><img src="../assets/svg/call.svg" alt=""></router-link>
        </li>

        <li data-route="list-setings" class="list-setings">
          <router-link to="/settings"><img src="../assets/svg/gear.svg" alt=""></router-link>
           
        </li>
        
      </ul>

      <transition name="bounce">
         <router-view></router-view>
      </transition>

  </div>  
</template>

<script>
export default {
  
 
}
</script>