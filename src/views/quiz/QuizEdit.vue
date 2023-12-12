<template>
	<div class="quiz-edit">
		<h1>Quiz</h1>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Quiz } from "@/types/quiz.type";

export default defineComponent({
	name: "QuizEdit",
	data() {
		return {
			quiz: {} as Quiz,
		};
	},

	methods: {
		getQuiz() {
			this.quiz = this.$store.state.quiz.find(
				(quiz: Quiz) => quiz.id === this.id
			);
			console.log(this.quiz);
		},
	},

	computed: {
		id: {
			get(): string {
				if (Array.isArray(this.$route.params.id))
					return this.$route.params.id[0];
				return this.$route.params.id;
			},
			set(value: string) {
				this.$emit("update:modelValue", value);
			},
		},
	},

	created() {
		this.getQuiz();
	},
});
</script>

<style scoped lang="scss"></style>
