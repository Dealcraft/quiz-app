<template>
	<div class="quiz">
		<div>
			<div class="mb-3">
				<h1 class="mb-1">{{ quiz.name }}</h1>
				<h4 class="subtitle">Insgesamt {{ quiz.questions.length }} Frage(n)</h4>
			</div>
			<div>
				<button-base class="mb-1" variant="green" @click="startQuiz"
					>Quiz starten</button-base
				>
				<button-base variant="outline-green" @click="goBack">
					Zurück
				</button-base>
			</div>
		</div>
		<div class="questions">
			<question-preview
				class="mb-1"
				v-for="question of quiz.questions"
				:key="question.id + '-' + question.answer"
				:question="question"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuestionPreview from "@/components/QuestionPreview.vue";
import { Quiz } from "@/types/quiz.type";
import ButtonBase from "@/components/Base/ButtonBase.vue";

export default defineComponent({
	name: "QuizOverview",
	components: { ButtonBase, QuestionPreview },
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

		goBack() {
			this.$router.go(-1);
		},

		startQuiz() {
			this.$router.push({ name: "QuizQuestions", params: { id: this.id } });
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

.quiz {
	display: flex;
	gap: $flex-gap-base * 3;
}

.questions {
	flex-grow: 1;
}
</style>
