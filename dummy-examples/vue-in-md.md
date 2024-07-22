The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  font-weight: bold;
}
</style>

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
