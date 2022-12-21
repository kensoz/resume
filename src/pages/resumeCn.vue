<template>
  <section>
    <div class="title">
      RenHou Resume
      <span style="padding-left: 10px">
        <router-link to="/">日本語</router-link>
        ・
        <span style="color: #93c5fd">简体中文</span>
      </span>
    </div>
    <vue-markdown :source="source" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import VueMarkdown from 'vue-markdown-render'

const source = ref<string>('')
onMounted(async (): Promise<void> => {
  await fetch('/cn.md')
    .then((res: Response) => res.text())
    .then((text: string) => {
      source.value = text
    })
})
</script>

<style scoped>
.title {
  padding-top: 5px;
  padding-bottom: 10px;
  font-weight: 700;
}

a:visited {
  color: #1e293b;
}
</style>
