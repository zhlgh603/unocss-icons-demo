<template>
    <div :class="iconClass"></div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";
  
  interface args {
    name: string;
    size?: string;
    color?: string;
  }
  const props = defineProps<args>();
  const iconClass = computed(() => {
    const { name, size, color } = props;
    // 将name中的:替换成-
    let iconName = name; //name.replace(/:/g, "-");
    iconName = `i-${iconName}`;
    // iconName = color ? `${iconName}?mask` : iconName;
    const sizeClass = size ? `text-${size}` : "";
    const colorClass = color ? `text-${color}` : "";
    return `${iconName} ${sizeClass} ${colorClass}`;
  });
  </script>
  
  <style scoped>
  .css-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    outline: none;
    margin-right: 0.2em;
  }
  </style>
  