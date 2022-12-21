<template>
  <section>
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
