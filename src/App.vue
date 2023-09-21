<script setup>
import { ref } from 'vue'
import { isGameOver } from './store.js'
import UserHand from './components/UserHand.vue'
import Result from './components/Result.vue'
import Total from './components/Total.vue'
import GameOver from './components/GameOver.vue'

const showResult = ref(false)
const user = ref("")

function userHand(e){
  showResult.value = true
  user.value = e
}

function next(e){
  showResult.value = false
}
</script>

<template>
  <main>
    <h1>コンピューター対戦じゃんけん</h1>
    <p><small>最大で20試合し、得点の高い方か、先に10点取った方がゲームの勝者です。</small></p>
    <Total></Total>
    <div v-show="!showResult">
      <p>じゃーんけん...</p>
	    <UserHand @change="userHand"></UserHand>
	  </div>
    <Result v-show="showResult" :show="showResult" :user="user" @next="next"></Result>
    <GameOver v-show="isGameOver" @restart="next"></GameOver>
  </main>
</template>
