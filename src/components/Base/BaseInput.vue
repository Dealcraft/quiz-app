<template>
	<div class="form-input">
		<label :for="inputId" :class="lableClass" v-if="lableText">
			{{ lableText }}
		</label>
		<input
			:type="type"
			:placeholder="placeholder"
			v-model="value"
			:id="inputId"
			:required="required"
			:disabled="disabled"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BaseInput",
	props: {
		type: {
			type: String,
			default: "text",
		},
		placeholder: {
			type: String,
			default: "",
		},
		lableText: {
			type: String,
			default: "",
		},
		lableClass: {
			type: String,
			default: "",
		},
		modelValue: {
			type: String,
			default: "",
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["update:modelValue"],

	data() {
		return {
			inputId: this.generateId(),
		};
	},

	methods: {
		generateId() {
			return Math.random().toString(36).substring(2, 9);
		},
	},

	computed: {
		value: {
			get() {
				return this.modelValue;
			},
			set(value: string) {
				this.$emit("update:modelValue", value);
			},
		},
	},
});
</script>

<style scoped lang="scss"></style>
