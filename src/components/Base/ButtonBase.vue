<template>
	<button class="btn" :class="variant ? 'btn-' + variant : ''">
		<slot name="default" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "ButtonBase",
	props: {
		variant: {
			type: String,
		},
	},
});
</script>

<style scoped lang="scss"></style>
