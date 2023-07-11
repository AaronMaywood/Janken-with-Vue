<script setup>
import { ref } from 'vue'
import UserHand from './components/UserHand.vue'
import Result from './components/Result.vue'

let showResult = ref(false)

function userHand(e){
  showResult.value = true
}
</script>

<template>
  {{showResult}}
  <main>
    <div class="userhand">
	    <UserHand @change="userHand"></UserHand>
	  </div>
    <Result :show="showResult"></Result>
  </main>
</template>

<style scoped>
.userhand {
	display:block;
}
</style>
