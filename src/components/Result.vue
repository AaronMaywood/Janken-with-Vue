<script setup>
import { computed } from 'vue'
import { update, isGameOver } from '../store.js'

const props = defineProps({
  show: Boolean,
  user: "",
})

const hand = ['👊','✌','✋']
const hand_img = [
  '<img src="./images/janken_gu.png" width="64" alt="">',
  '<img src="./images/janken_choki.png" width="64" alt="">',
  '<img src="./images/janken_pa.png" width="64" alt="">'
]

const result = computed(() => {
  return props.show ? judge_play() : { play: '', judge: '' }
})

function judge_play(){
  let user_win = 0, comp_win = 0
  const comp_index = Math.floor(Math.random()*3)
  const comp = hand[comp_index]

  let judge
  if( props.user === comp ){
    judge = 'あいこ'
    update(false)
  }else if( props.user === '👊' && comp === '✌'){
    judge = 'あなたの勝ち！'
    update(true)
  }else if( props.user === '👊' && comp === '✋'){
    judge = 'コンピューターの勝ち！'
    update(false)
  }else if( props.user === '✌' && comp === '👊'){
    judge = 'コンピューターの勝ち！'
    update(false)
  }else if( props.user === '✌' && comp === '✋'){
    judge = 'あなたの勝ち！'
    update(true)
  }else if( props.user === '✋' && comp === '👊'){
    judge = 'あなたの勝ち！'
    update(true)
  }else if( props.user === '✋' && comp === '✌'){
    judge = 'コンピューターの勝ち！'
    update(false)
  }

  const hand_to_index = {
    '👊': 0,
    '✌': 1,
    '✋': 2
  }
  const user_hand = hand_img[hand_to_index[props.user]]
  return {
    play: `あなた:${user_hand}<br>コンピューター:${hand_img[comp_index]}`,
    judge: judge,
  }
}
</script>
<template>
	<div id="result">
		<p>じゃーんけん...ぽん！</p>
    <p id="play">
      <!--
        htmlを含む文字列を表示するときはマスタッシュ構文の変わりに v-html を使用する
        https://ja.vuejs.org/guide/essentials/template-syntax.html#raw-html
      -->
      <span v-html="result.play"></span>
    </p>
    <hr>
    <p id="judge">
      <span v-html="result.judge"></span>
    </p>
    <div id="restart_button" v-show="!isGameOver">
			<button type="button" id="restart" @click="$emit('next')">次へ</button>
		</div>
	</div>
</template>
