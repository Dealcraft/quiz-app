<template>
	<div class="card" :class="hover ? 'card:hover-able' : ''">
		<h3>Hallo Welt</h3>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BaseCard",
	props: {
		hover: {
			type: Boolean,
		},
	},
});
</script>

<style scoped lang="scss"></style>
