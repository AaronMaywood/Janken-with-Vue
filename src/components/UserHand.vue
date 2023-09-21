<script setup>
const emit = defineEmits(['change'])

function updateUserHand(e){
	emit('change',e.target.value)
}
</script>
<template>
	<div>
		<label><input type="radio" name="hand" value="👊" @click="updateUserHand"><img src="/images/janken_gu.png" width="64" alt=""></label>
		<label><input type="radio" name="hand" value="✌" @click="updateUserHand"><img src="/images/janken_choki.png" width="64" alt=""></label>
		<label><input type="radio" name="hand" value="✋" @click="updateUserHand"><img src="/images/janken_pa.png" width="64" alt=""></label>
	</div>
</template>
<style scoped>
input[type="radio"] {
	display: none;
}
</style>
