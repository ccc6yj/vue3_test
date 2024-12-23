import { computed, onMounted, reactive, ref, watch } from "vue";
import axios from "axios";

export default function () {
  // 数据
  let sum = ref(0);
  let bigSum = computed(() => {
    return sum.value * 10;
  });

  // 方法
  function add() {
    sum.value += 1;
  }

  //钩子
  onMounted(() => {
    add();
  });

  //向外提供东西
  return { sum, add, bigSum };
}
