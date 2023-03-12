<template>
  <div>Hello! the count is {{ count }}</div>
</template>

<script setup>
  const { data: count } = await useFetch('foo')
</script>
