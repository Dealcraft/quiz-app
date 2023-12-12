<template>
	<div class="home">
		<quiz-card
			v-for="quiz of $store.state.quiz"
			:quiz-id="quiz.id"
			:key="quiz.id"
			@click="openQuiz(quiz.id)"
			@delete:quizId="deleteQuizRequest"
		/>
		<add-quiz-card />
		<base-modal
			title="Quiz löschen?"
			v-model="showDeleteModal"
			@confirm="deleteQuiz"
			ok-text="Löschen"
			ok-variant="outline-red"
			abort-variant="outline-grey"
		>
			<p>
				Soll das Quiz <b>{{ deletingQuiz.name }}</b> gelöscht werden?
			</p>
		</base-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuizCard from "@/components/QuizCard.vue";
import AddQuizCard from "@/components/AddQuizCard.vue";
import BaseModal from "@/components/Base/BaseModal.vue";
import { Quiz } from "@/types/quiz.type";

export default defineComponent({
	name: "HomeView",
	components: { BaseModal, AddQuizCard, QuizCard },

	data() {
		return {
			showDeleteModal: false,
			deletingQuiz: {} as Pick<Quiz, "id" | "name">,
		};
	},

	methods: {
		openQuiz(id: string) {
			this.$router.push({ name: "QuizOverview", params: { id: id } });
		},

		deleteQuizRequest(payload: Pick<Quiz, "id" | "name">) {
			this.showDeleteModal = true;
			this.deletingQuiz = payload;
		},

		deleteQuiz() {
			void this.$store.dispatch("deleteQuiz", this.deletingQuiz.id);
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
