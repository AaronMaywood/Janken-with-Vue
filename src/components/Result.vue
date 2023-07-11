<script setup>
const props = defineProps({
  show: Boolean,
  user: "",
})
</script>
<template>
	<div id="result" v-if="show">
		<p>じゃんけん...ぽん！</p>
    <p id="play">
    <span v-if="user === '👊'"><img src="images/janken_gu.png" width="64" alt=""></span>
    <span v-else-if="user === '✌'"><img src="images/janken_choki.png" width="64" alt=""></span>
    <span v-else-if="user === '✋'"><img src="images/janken_pa.png" width="64" alt=""></span>
    </p>
		<p id="judge"></p>
		<div id="restart_button">
			<hr>
			<button type="button" id="restart" @click="$emit('next')">再チャレンジ</button>
		</div>
	</div>
</template>
