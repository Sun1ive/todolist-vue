<template>
	<button v-on="$listeners" :disabled="disabled" :class="{
      light,
    }" class="button">
		<slot />
	</button>
</template>

<script src="./script.js">
</script>

<style scoped src="./styles.scss" lang="scss">
</style>
