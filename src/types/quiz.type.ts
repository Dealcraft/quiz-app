import { Question } from "@/types/question.type";

export type Quiz = {
	id: string;
	name: string;
	description?: string;
	shortDescription?: string;
	questions: Question[];
};
