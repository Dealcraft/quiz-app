<template>
	<div class="card" :class="classList">
		<slot name="default" />
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
		variant: {
			type: String,
		},
	},

	computed: {
		classList() {
			let result = "";

			if (this.hover) result += "card:hover-able ";
			if (this.variant) result += `card-${this.variant} `;

			return result;
		},
	},
});
</script>

<style scoped lang="scss"></style>
