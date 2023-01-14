<template>
  <main>
    <div class="title">
      RenHou Resume
      <!-- <span style="padding-left: 10px">
        <button @click="click(true)">日本語</button>
        ・
        <button @click="click(false)">简体中文</button>
      </span> -->
    </div>

   <ResumeJa />

    <!-- <div v-if="isJa">
      <ResumeJa />
    </div>

    <div v-else>
      <ResumeCn />
    </div> -->
  </main>
</template>

<script lang="ts" setup>
import ResumeCn from './views/resumeCn.vue'
import ResumeJa from './views/resumeJa.vue'
import { ref } from 'vue'

const isJa = ref<boolean>(true)
const click = (e: boolean): void => {
  isJa.value = e
}
</script>

<style scoped>
main {
  max-width: 1000px;
  padding: 5px;
  margin: 0 auto;
  font-family: '游ゴシック', 'Microsoft YaHei', '微软雅黑', Helvetica, 'sans-serif';
  font-weight: 500;
  color: #1e293b;
}

button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #93c5fd;
}
</style>
