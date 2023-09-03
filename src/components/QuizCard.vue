<template>
	<base-card hover class="quiz-card">
		<h2>{{ quiz.name }}</h2>
		<h5 class="subtitle">{{ quiz.questions.length }} Frage(n)</h5>
	</base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/Base/BaseCard.vue";
import { Quiz } from "@/types/quiz.type";

export default defineComponent({
	name: "QuizCard",
	components: { BaseCard },
	props: {
		quizId: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			quiz: {} as Quiz,
		};
	},

	created() {
		const result = this.$store.state.quiz.find(
			(quiz: Quiz) => quiz.id === this.quizId
		);
		if (!result) return;
		this.quiz = result;
	},
});
</script>

<style scoped lang="scss">
@import "../styles/variables";

.quiz-card {
	max-width: $quiz-card-max-width;
	min-height: $quiz-card-min-height;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: $flex-gap-base * 2;
}
</style>
