import { Quiz } from "@/types/quiz.type";

export type State = {
	quiz: Quiz[];
	options: {
		maxIterations: number;
		waitTime: number;
	};
};
