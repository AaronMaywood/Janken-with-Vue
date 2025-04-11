<script setup>
import { counter, user_win, comp_win } from '../store.js'
</script>
<template>
  <p>対戦回数: <span id="game_counter">{{counter}}</span>回目/4回
  あなた：<meter min="0" max="10" :value="user_win" high="8" id="player1_meter"></meter> (<span id="player1_meter_value">{{user_win}}</span>点)
  コンピューター：<meter min="0" max="10" :value="comp_win" high="8" id="player2_meter"></meter> (<span id="player2_meter_value">{{comp_win}}</span>点)</p>
</template>
