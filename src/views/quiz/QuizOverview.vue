<template>
	<div class="quiz">
		<div class="sidebar">
			<div class="mb-3">
				<h1>{{ quiz.name }}</h1>
				<h4 class="subtitle mb-1">
					Insgesamt {{ quiz.questions.length }} Frage(n)
				</h4>
				<p v-if="quiz && quiz.description">{{ quiz.description }}</p>
			</div>
			<div>
				<button-base class="mb-1" variant="green" @click="startQuiz"
					>Quiz starten</button-base
				>
				<button-base class="mb-1" variant="outline-green" @click="goBack">
					Zurück
				</button-base>
				<button-base variant="outline-grey" @click="edit"
					>Quiz bearbeiten</button-base
				>
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
			const result = this.$store.state.quiz.find(
				(quiz: Quiz) => quiz.id === this.id
			);
			if (!result) return this.$router.push({ name: "Home" });
			this.quiz = result;
			document.title = `${this.quiz.name} - QuizApp`;
		},

		goBack() {
			this.$router.go(-1);
		},

		startQuiz() {
			this.$router.push({ name: "QuizQuestions", params: { id: this.id } });
		},

		edit() {
			this.$router.push({ name: "QuizEdit", params: { id: this.id } });
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

.sidebar {
	width: 300px;
}
</style>
