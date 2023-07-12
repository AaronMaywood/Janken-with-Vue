// 全体の状態管理
import { ref,computed } from 'vue'
export const counter = ref(0)
export const user_win = ref(0)
export const comp_win = ref(0)
export const isGameOver = computed(()=>{
  return (
    counter.value >= 20 ||    // 試合回数が20に到達したか、
    user_win.value >= 10 ||   // user / comp のどちらかが先に10勝したら、ゲーム終了
    comp_win.value >= 10)
    ? true : false
})

export function update(isUserWin){
  counter.value++
  isUserWin ? user_win.value++ : comp_win.value++
}

export function init(){
	counter.value = 0
	user_win.value = 0
	comp_win.value = 0
}
