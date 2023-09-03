import { Quiz } from "@/types/quiz.type";

export interface State {
	quiz: Quiz[];
	options: {
		maxIterations: number;
		waitTime: number;
	};
}
