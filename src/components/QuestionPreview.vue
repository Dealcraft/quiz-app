<template>
	<base-card class="question-preview">
		<p class="font-bold">{{ question.question }}</p>
		<p>{{ question.answer }}</p>
	</base-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Question } from "@/types/question.type";
import BaseCard from "@/components/Base/BaseCard.vue";

export default defineComponent({
	name: "QuestionPreview",
	components: { BaseCard },
	props: {
		question: {
			type: Object as PropType<Question>,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
@import "../styles/variables";

.question-preview {
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: $question-preview-min-height;
	padding: $question-preview-padding;
}
</style>
