<template>
	<div class="quiz-edit">
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
				<button-base variant="outline-green" @click="goBack">
					Zurück
				</button-base>
			</div>
		</div>

		<div class="main">
			<button-base variant="grey" class="add-button" @click="toggleAddQuestion">
				<span class="svg">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.402 45.402">
						<g>
							<path
								d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
							/>
						</g>
					</svg>
				</span>
				<span class="ml-1">Neue Frage</span>
			</button-base>
			<base-card v-if="showAddQuestionValue" class="mt-2 mb-2">
				<base-form @submitted="createQuestion">
					<base-input
						v-model="newQuestion.question"
						placeholder="Frage"
						lable-text="Frage"
						required
					/>
					<base-input
						v-model="newQuestion.answer"
						placeholder="Antwort"
						lable-text="Antwort"
						required
					/>
					<div class="flex gap-2 mt-1">
						<button-base
							variant="outline-grey"
							type="button"
							@click="toggleAddQuestion"
						>
							Abbrechen
						</button-base>
						<button-base variant="green" type="submit">
							Frage speichern
						</button-base>
					</div>
				</base-form>
			</base-card>
			<div class="questions mt-3">
				<base-card
					class="mb-1"
					v-for="question of quiz.questions"
					:key="question.id + '-' + question.answer"
				>
					<base-form
						@submitted="saveQuestion"
						v-if="editingQuestion === question.id"
					>
						<base-input
							v-model="editedQuestion.question"
							placeholder="Frage"
							lable-text="Frage"
							required
						/>
						<base-input
							v-model="editedQuestion.answer"
							placeholder="Antwort"
							lable-text="Antwort"
							required
						/>
						<div class="flex gap-1 mt-1">
							<button-base variant="green" type="submit">
								Frage speichern
							</button-base>
							<button-base
								variant="outline-red"
								@click="deleteQuestion(question.id)"
								type="button"
								>Frage löschen</button-base
							>
						</div>
					</base-form>
					<base-form @click="editQuestion(question.id)" v-else>
						<base-input
							v-model="question.question"
							placeholder="Frage"
							lable-text="Frage"
							required
							disabled
						/>
						<base-input
							v-model="question.answer"
							placeholder="Antwort"
							lable-text="Antwort"
							required
							disabled
						/>
					</base-form>
				</base-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Quiz } from "@/types/quiz.type";
import ButtonBase from "@/components/Base/ButtonBase.vue";
import BaseInput from "@/components/Base/BaseInput.vue";
import BaseForm from "@/components/Base/BaseForm.vue";
import BaseCard from "@/components/Base/BaseCard.vue";
import { Question } from "@/types/question.type";

export default defineComponent({
	name: "QuizEdit",
	components: { BaseCard, BaseForm, BaseInput, ButtonBase },
	data() {
		return {
			newQuestion: {
				question: "",
				answer: "",
			} as Pick<Question, "question" | "answer">,
			quiz: {} as Quiz,
			showAddQuestionValue: false,
			editingQuestion: null as null | string,
			editedQuestion: {
				id: "",
				question: "",
				answer: "",
			} as Question,
		};
	},

	methods: {
		getQuiz() {
			this.quiz = this.$store.state.quiz.find(
				(quiz: Quiz) => quiz.id === this.id
			);
		},

		toggleAddQuestion() {
			if (this.showAddQuestionValue)
				this.newQuestion = { question: "", answer: "" };
			this.showAddQuestionValue = !this.showAddQuestionValue;
		},

		async createQuestion() {
			if (this.newQuestion.question === "" || this.newQuestion.answer === "")
				return;
			await this.$store.dispatch("createQuestion", {
				quizId: this.id,
				question: this.newQuestion,
			});
			this.getQuiz();
			this.toggleAddQuestion();
		},

		async saveQuestion() {
			this.editingQuestion = null;
			await this.$store.dispatch("updateQuestion", {
				quizId: this.id,
				question: this.editedQuestion,
			});
		},

		editQuestion(id: string) {
			const question = this.quiz.questions.find(
				(question: Question) => question.id === id
			);
			if (!question) return;

			this.editedQuestion = { ...question };
			this.editingQuestion = id;
		},

		async deleteQuestion(id: string) {
			await this.$store.dispatch("deleteQuestion", {
				quizId: this.id,
				questionId: id,
			});
			this.getQuiz();
		},

		goBack() {
			this.$router.go(-1);
		},

		startQuiz() {
			this.$router.push({ name: "QuizQuestions", params: { id: this.id } });
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

<style scoped lang="scss">
@import "../../styles/variables";

.quiz-edit {
	display: flex;
	gap: $flex-gap-base * 3;
}

.main {
	flex-grow: 1;
}

.sidebar {
	width: 300px;
}

.svg svg {
	width: 1rem;
	height: 1rem;
}
.add-button {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
