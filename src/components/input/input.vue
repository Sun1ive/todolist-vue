<template>
  <label class="input-label">
    <span class="input-title">
      {{ title }}
    </span>
    <input
      @input="(event) => $emit('input', event.target.value)"
      :value="value"
    />
  </label>
</template>

<script src="./script.js">
</script>

<style lang="scss" src='./styles.scss' scoped>
</style>
