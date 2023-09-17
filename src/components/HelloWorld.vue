
<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div>
    <h1>Unocss icons demo</h1>
    <hr>
    <div class="i-mdi-alarm text-orange-400" />
    <div class="i-assets-bibank text-orange-400" />
    <div class="i-mdi-access-point text-orange-400" />
    <div class="i-assets-BiBank text-orange-400" />
    <div class="i-carbon-3d-cursor text-orange-400" />
    <div i-custom-BiBank />
    <hr>
    <CssIcon name="vscode-icons:file-type-light-pnpm" size="2xl" color="red"></CssIcon>
    <CssIcon name="mdi-alarm" size="2xl" color="orange-400"></CssIcon>
    <CssIcon name="assets-bibank" size="2xl" color="orange-400"></CssIcon> 
    <CssIcon name="mdi-access-point" size="2xl" color="orange-400"></CssIcon>
    <CssIcon name="carbon-area"></CssIcon>
    <CssIcon name="carbon-3d-software"></CssIcon>

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import CssIcon from './CssIcon.vue';

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped>
</style>
