<template>
	<Transition>
		<div class="modal-container" :class="classList" v-if="show" role="dialog">
			<div class="modal-backdrop" @click="close" />
			<div class="modal">
				<div class="modal-header" v-if="showHeader">
					<h3 class="modal-title">{{ title }}</h3>
					<button class="close" @click="close">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path
								d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
							/>
						</svg>
					</button>
				</div>
				<div class="modal-content">
					<slot name="default" />
				</div>
				<div class="modal-footer" v-if="showFooter">
					<slot name="footer">
						<button-base :variant="abortVariant" @click="abort">
							{{ abortText }}
						</button-base>
						<button-base :variant="okVariant" @click="confirm">
							{{ okText }}
						</button-base>
					</slot>
				</div>
			</div>
		</div>
	</Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonBase from "@/components/Base/ButtonBase.vue";
export default defineComponent({
	name: "BaseModal",
	components: { ButtonBase },
	props: {
		title: {
			type: String,
			default: "Modal Titel",
		},
		showHeader: {
			type: Boolean,
			default: true,
		},
		showFooter: {
			type: Boolean,
			default: true,
		},
		okVariant: {
			type: String,
			default: "outline-green",
		},
		okText: {
			type: String,
			default: "Okay",
		},
		abortVariant: {
			type: String,
			default: "outline-red",
		},
		abortText: {
			type: String,
			default: "Abbrechen",
		},
		modelValue: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["update:modelValue", "abort", "confirm"],

	data() {
		return {
			show: this.modelValue,
		};
	},

	methods: {
		close() {
			this.value = false;
		},

		abort() {
			this.$emit("abort");
			this.close();
		},

		confirm() {
			this.$emit("confirm");
			this.close();
		},
	},

	computed: {
		classList() {
			let result = "";
			return result;
		},
		value: {
			get() {
				return this.modelValue;
			},
			set(value: boolean) {
				this.show = value;
				this.$emit("update:modelValue", value);
			},
		},
	},

	watch: {
		modelValue(value: boolean) {
			this.show = value;
		},
	},
});
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.close {
	appearance: none;
	background: transparent;
	border: none;
	color: $font-color;
	cursor: pointer;
	transition: $transition;

	&:hover {
		opacity: 0.7;
	}

	svg {
		stroke: $font-color;
		fill: $font-color;
		width: 1.5rem;
	}
}

.v-enter-active,
.v-leave-active {
	transition: $transition;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
