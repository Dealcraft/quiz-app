<template>
	<router-view class="p-1" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
	beforeCreate() {
		this.$store.commit("INIT_STORE");
	},
});
</script>

<style lang="scss"></style>
