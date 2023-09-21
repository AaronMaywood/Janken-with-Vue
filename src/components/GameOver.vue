<script setup>
import { ref, computed } from 'vue'
import { user_win, comp_win, init } from '../store.js'

const emit = defineEmits(['restart'])

const winner = computed(() => {
  if(user_win.value === comp_win.value){
    return 'ひきわけ'
  }else{
    return user_win.value > comp_win.value ? 'プレイヤー' : 'コンピューター'
  }
})

function restartGame(){
  init()
  emit('restart')
}
</script>
<template>
  <div>
    <hr>
    <p>ゲーム終了</p>
    <p>ゲームの勝者は ... <span id="winner">{{winner}}</span>です！</p>
    <button type="button" id="restart_game" @click="restartGame">もう一度プレイする</button>
  </div>
</template>
