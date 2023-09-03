import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { NIL } from "uuid";
import { Quiz } from "@/types/quiz.type";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	key: "quiz-app",
});

export default createStore<{
	quiz: Quiz[];
}>({
	state: {
		quiz: [
			{
				id: NIL,
				name: "ICAO Alphabet",
				questions: [
					{
						id: NIL,
						question: "What is the ICAO phonetic for A",
						answer: "Alpha",
					},
				],
			},
		],
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
	plugins: [vuexLocal.plugin],
});
