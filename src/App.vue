<script setup>
import UserHand from './components/UserHand.vue'
function userHand(e){
	console.log(e)
}
</script>

<template>
  <main>
    <div class="userhand">
	  <UserHand @change="userHand"></UserHand>
	</div>
  </main>
</template>

<style scoped>
.userhand {
	display:block;
}
</style>
