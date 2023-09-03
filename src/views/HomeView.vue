<template>
	<div class="home">
		<quiz-card
			v-for="quiz of $store.state.quiz"
			:quiz-id="quiz.id"
			:key="quiz.id"
			@click="openQuiz(quiz.id)"
		/>
		<add-quiz-card />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuizCard from "@/components/QuizCard.vue";
import AddQuizCard from "@/components/AddQuizCard.vue";

export default defineComponent({
	name: "HomeView",
	components: { AddQuizCard, QuizCard },
	methods: {
		openQuiz(id: string) {
			this.$router.push({ name: "QuizOverview", params: { id: id } });
		},
	},

	created() {
		document.title = "Home - QuizApp";
	},
});
</script>

<style scoped lang="scss">
@import "../styles/variables";

.home {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: $flex-gap-base * 2;
}
</style>
