<script setup>
import { ref } from 'vue'
import UserHand from './components/UserHand.vue'
import Result from './components/Result.vue'
import Total from './components/Total.vue'

let showResult = ref(false)
let user = ref("")

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
    <!-- テンプレート中での ref は、showResult.value ではなく showResult という省略形を使用する必要がある -->
    <div :class="showResult !== true ? 'show' : 'hide'">
      <p>じゃーんけん...</p>
	    <UserHand @change="userHand"></UserHand>
	  </div>
    <Result :show="showResult" :user="user" @next="next"></Result>
    <!--
    <div id="gameover">
      <hr>
      <p>ゲーム終了</p>
      <p>ゲームの勝者は ... <span id="winner"></span>です！</p>
      <button type="button" id="restart_game">もう一度プレイする</button>
    </div>
    -->
  </main>
</template>

<style scoped>
.hide {
	display: none;
}
</style>
