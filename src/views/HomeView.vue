<template>
	<div class="home">
		<quiz-card
			v-for="quiz of $store.state.quiz"
			:quiz-id="quiz.id"
			:key="quiz.id"
			@click="openQuiz(quiz.id)"
			@delete:quizId="deleteQuizRequest"
		/>
		<add-quiz-card @click="newQuiz" />
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
		<base-modal
			title="Neues Quiz erstellen"
			v-model="showCreateModal"
			ok-text="Erstellen"
			@confirm="createQuiz"
			@abort="clearNewQuiz"
		>
			<base-form @submitted="createQuiz">
				<base-input
					placeholder="Quiz Name"
					v-model="newQuizData.name"
					lable-text="Name"
					required
				/>
				<base-input
					placeholder="Quiz Beschreibung"
					v-model="newQuizData.description"
					lable-text="Beschreibung"
					required
				/>
			</base-form>
		</base-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import QuizCard from "@/components/QuizCard.vue";
import AddQuizCard from "@/components/AddQuizCard.vue";
import BaseModal from "@/components/Base/BaseModal.vue";
import { Quiz } from "@/types/quiz.type";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseForm from "@/components/Base/BaseForm.vue";

export default defineComponent({
	name: "HomeView",
	components: { BaseInput, BaseForm, BaseModal, AddQuizCard, QuizCard },

	data() {
		return {
			newQuizData: {
				name: "",
				description: "",
			} as Pick<Quiz, "name" | "description">,
			showCreateModal: false,
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

		newQuiz() {
			this.showCreateModal = true;
		},

		async createQuiz() {
			if (this.newQuizData.name === "" || this.newQuizData.description === "")
				return;

			const id = await this.$store.dispatch("createQuiz", this.newQuizData);
			this.clearNewQuiz();
			this.$router.push({ name: "QuizEdit", params: { id: id } });
		},

		clearNewQuiz() {
			this.newQuizData = { name: "", description: "" };
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
