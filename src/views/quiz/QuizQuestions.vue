<template>
	<div class="quiz-running">
		<div>
			<p class="subtitle-color">
				{{ quiz.name }} - Frage {{ currentQuestionIndex + 1 }} von
				{{ questions.length }}
			</p>
		</div>
		<div class="mb-3">
			<h1>{{ questions[currentQuestionIndex].question }}</h1>
		</div>
		<div class="grid-layout">
			<base-card
				:variant="currentCardColor[i]"
				hover
				v-for="(answer, i) of currentAnswers"
				:key="`answer-${i}-${answer}`"
				@click="selectAnswer(i)"
			>
				{{ answer }}
			</base-card>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Quiz } from "@/types/quiz.type";
import { Question } from "@/types/question.type";
import BaseCard from "@/components/Base/BaseCard.vue";

export default defineComponent({
	name: "QuizQuestions",
	components: { BaseCard },
	data() {
		return {
			id: this.$route.params.id,
			quiz: {} as Quiz,
			questions: [] as Question[],
			answerCollection: [] as string[],
			correctAnswers: [] as boolean[],
			currentQuestionIndex: 0,
			currentAnswers: [] as string[],
			currentCardColor: [] as string[],
			waitTimeout: null as unknown,
		};
	},

	methods: {
		getQuiz() {
			const result = this.$store.state.quiz.find(quiz => quiz.id === this.id);
			if (!result) return this.$router.push({ name: "Home" });
			this.quiz = result;
			document.title = `Frage 1 von ${this.quiz.questions.length} - ${this.quiz.name} - ${this.quiz.name}`;

			for (let i = 0; i < this.quiz.questions.length; i++) {
				this.answerCollection.push(this.quiz.questions[i].answer);
				this.questions.push(this.quiz.questions[i]);
				if (!this.quiz.questions[i].question.endsWith("?"))
					this.quiz.questions[i].question =
						this.quiz.questions[i].question + "?";
				this.correctAnswers.push(false);
			}

			this.questions = this.shuffleArray<Question>(this.quiz.questions);
			this.generateAnswers();
		},

		shuffleArray<T>(array: T[]): T[] {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				const temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		},

		generateAnswers() {
			this.currentAnswers = [];
			this.currentCardColor = [];
			this.currentCardColor.push("null", "null", "null", "null");
			this.currentAnswers.push(
				this.questions[this.currentQuestionIndex].answer
			);

			for (let i = 0; i < 3; i++) {
				let runs = 0;
				let elem;
				do {
					elem =
						this.answerCollection[
							Math.floor(Math.random() * this.answerCollection.length)
						];
					runs++;
				} while (
					this.currentAnswers.includes(elem) &&
					runs < this.$store.state.options.maxIterations
				);
				this.currentAnswers.push(elem);
			}

			this.currentAnswers = this.shuffleArray<string>(this.currentAnswers);
		},

		selectAnswer(i: number) {
			console.log("Selected", i);
			if (
				this.currentAnswers[i] ===
				this.questions[this.currentQuestionIndex].answer
			) {
				this.currentCardColor[i] = "green";
				this.correctAnswers[this.currentQuestionIndex] = true;
			} else this.currentCardColor[i] = "red";

			if (this.currentQuestionIndex !== this.questions.length - 1)
				this.waitTimeout = setTimeout(() => {
					this.currentQuestionIndex = this.currentQuestionIndex + 1;
					this.generateAnswers();
					document.title = `Frage ${this.currentQuestionIndex + 1} von ${
						this.quiz.questions.length
					} - ${this.quiz.name} - ${this.quiz.name}`;
				}, this.$store.state.options.waitTime);
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

	unmounted() {
		if (typeof this.waitTimeout === "number") clearTimeout(this.waitTimeout);
	},
});
</script>

<style scoped lang="scss">
@import "../../styles/variables";

.quiz-running {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.card {
	width: 200px;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
}

.grid-layout {
	display: grid;
	gap: $grid-gap-base;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
}
</style>
