<template>
	<base-card hover class="quiz-card">
		<h2>{{ quiz.name }}</h2>
		<h5 class="subtitle">{{ quiz.questions.length }} Frage(n)</h5>

		<div class="overlay">
			<button class="m-1" @click="deleteQuiz($event)">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
					/>
				</svg>
			</button>
		</div>
	</base-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseCard from "@/components/Base/BaseCard.vue";
import { Quiz } from "@/types/quiz.type";

export default defineComponent({
	name: "QuizCard",
	components: { BaseCard },
	props: {
		quizId: {
			type: String,
			required: true,
		},
	},
	emits: ["delete:quizId"],
	data() {
		return {
			quiz: {} as Quiz,
		};
	},

	methods: {
		getQuiz() {
			const result = this.$store.state.quiz.find(
				(quiz: Quiz) => quiz.id === this.quizId
			);
			if (!result) return;
			this.quiz = result;
		},

		deleteQuiz(event: Event) {
			event.stopPropagation();
			this.$emit("delete:quizId", { id: this.quizId, name: this.quiz.name });
		},
	},

	watch: {
		quizId() {
			this.getQuiz();
		},
	},

	created() {
		this.getQuiz();
	},
});
</script>

<style scoped lang="scss">
@import "../styles/variables";

.quiz-card {
	max-width: $quiz-card-max-width;
	width: $quiz-card-max-width;
	min-height: $quiz-card-min-height;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: $flex-gap-base * 2;
	position: relative;

	.overlay {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		opacity: 0;
		z-index: 1;
		transition: $transition;

		button {
			float: right;
			appearance: none;
			border: $border;
			color: $font-color;
			background: $background-color;
			padding: $padding-base / 2;
			border-radius: $border-radius;
			cursor: pointer;

			svg {
				width: 1rem;
				height: 1rem;
				color: map-get($color-pallet, "red");
				stroke: map-get($color-pallet, "red");
				fill: map-get($color-pallet, "red");
			}
		}
	}

	&:hover .overlay {
		opacity: 1;
	}
}
</style>
