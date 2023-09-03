import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { NIL } from "uuid";
import { State } from "@/store/state";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	key: "quiz-app",
});

export default createStore<State>({
	state: {
		quiz: [
			{
				id: NIL,
				name: "ICAO Alphabet",
				questions: [
					{
						id: NIL,
						question: "What is the ICAO phonetic for A?",
						answer: "Alpha",
					},
					{
						id: NIL,
						question: "What is the ICAO phonetic for B?",
						answer: "Beta",
					},
					{
						id: NIL,
						question: "What is the ICAO phonetic for C?",
						answer: "Charlie",
					},
					{
						id: NIL,
						question: "What is the ICAO phonetic for D?",
						answer: "Delta",
					},
					{
						id: NIL,
						question: "What is the ICAO phonetic for E?",
						answer: "Echo",
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
