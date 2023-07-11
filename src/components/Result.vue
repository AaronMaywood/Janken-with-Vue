<script setup>
const props = defineProps({
  show: Boolean
})
</script>
<template>
	<div id="result" v-if="show">
		<p>じゃんけん...ぽん！</p>
		<p id="play"></p>
		<p id="judge"></p>
		<div id="restart_button">
			<hr>
			<button type="button" id="restart" @click="$emit('next')">再チャレンジ</button>
		</div>
	</div>
</template>
