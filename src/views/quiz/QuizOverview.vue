<template>
	<div class="quiz">
		<question-preview
			v-for="question of quiz.questions"
			:key="question.id + '-' + question.answer"
			:question="question"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionPreview from "@/components/QuestionPreview.vue";
import { Quiz } from "@/types/quiz.type";

export default defineComponent({
	name: "QuizOverview",
	components: { QuestionPreview },
	data() {
		return {
			id: this.$route.params.id,
			quiz: {} as Quiz,
		};
	},

	methods: {
		getQuiz() {
			const result = this.$store.state.quiz.find(quiz => quiz.id === this.id);
			if (!result) return this.$router.push({ name: "Home" });
			this.quiz = result;
		},
	},

	watch: {
		id() {
			this.getQuiz();
		},
	},

	created() {
		this.getQuiz();
	},
});
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.question-preview {
	margin-bottom: $margin-base * 2;
}
</style>
