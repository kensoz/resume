<template>
  <section>
    <div class="title">
      RenHou Resume
      <span style="padding-left: 10px">
        日本語 ・
        <router-link to="/cn">简体中文</router-link>
      </span>
    </div>
    <vue-markdown :options="options" :source="source" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import VueMarkdown from 'vue-markdown-render'

const options = { html: true }

const source = ref<string>('')
onMounted(async (): Promise<void> => {
  await fetch('/resume/ja.md')
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
