<script setup>
import { ref } from 'vue'
import UserHand from './components/UserHand.vue'
import Result from './components/Result.vue'

let showResult = ref(false)

function userHand(e){
  showResult.value = true
}

function next(e){
  showResult.value = false
}
</script>

<template>
  <main>
    <div class="userhand">
	    <UserHand @change="userHand"></UserHand>
	  </div>
    <Result :show="showResult" @next="next"></Result>
  </main>
</template>

<style scoped>
.userhand {
	display:block;
}
</style>
