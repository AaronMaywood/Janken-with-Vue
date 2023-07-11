// 全体の状態管理
import { ref } from 'vue'
export const counter = ref(0)
export const user_win = ref(0)
export const comp_win = ref(0)

export function update(isUserWin){
	counter.value++
	isUserWin ? user_win.value++ : comp_win.value++
}
