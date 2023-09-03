<template>
	<div class="home">
		<QuizCard
			v-for="quiz of $store.state.quiz"
			:quiz-id="quiz.id"
			:key="quiz.id"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuizCard from "@/components/QuizCard.vue";

export default defineComponent({
	name: "HomeView",
	components: { QuizCard },
});
</script>
