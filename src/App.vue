<template>
  <div id="nav">
    <app-header/>
    <div class="container">
      <router-view />
    </div>
    <notification-list/>
  </div>
</template>

<script>
import AppHeader  from "./components/AppHeader";
import NotificationList from './components/NotificationList.vue';
export default {
  name: "app",
  components: {
    AppHeader, NotificationList
    
  },
  
};
</script>
<style>
</style>
