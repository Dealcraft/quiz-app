<template>
	<form :action="action" @submit.prevent="submitted">
		<slot />
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BaseForm",
	props: {
		action: {
			type: String,
			default: "",
		},
	},
	emits: ["submitted"],

	methods: {
		submitted(event: Event) {
			this.$emit("submitted", event);
		},
	},
});
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

form {
	display: flex;
	flex-direction: column;
	gap: 2 * $flex-gap-base;
}
</style>
