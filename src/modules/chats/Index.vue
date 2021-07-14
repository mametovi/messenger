<template>
  <div>    
    <router-view />
  </div>
</template>

<script>
import data from "@/data/chats.json";
import User from "@/components/Chat";

export default {
  name: "Chats"
};
</script>