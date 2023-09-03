import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import { v4 as uuidV4 } from "uuid";
import { State } from "@/store/state";

const vuexLocal = new VuexPersistence({
	storage: window.localStorage,
	key: "quiz-app",
});

export default createStore<State>({
	state: {
		quiz: [
			{
				id: uuidV4(),
				name: "ICAO Alphabet",
				description: "Lerne das ICAO Alphabet und sprich wie ein Pilot.",
				questions: [
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "A"',
						answer: "Alpha",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "B"',
						answer: "Bravo",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "C"',
						answer: "Charlie",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "D"',
						answer: "Delta",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "E"',
						answer: "Echo",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "F"',
						answer: "Foxtrot",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "G"',
						answer: "Golf",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "H"',
						answer: "Hotel",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "I"',
						answer: "India",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "J"',
						answer: "Juliett",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "K"',
						answer: "Kilo",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "L"',
						answer: "Lima",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "M"',
						answer: "Mike",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "N"',
						answer: "November",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "O"',
						answer: "Oscar",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "P"',
						answer: "Papa",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "Q"',
						answer: "Quebec",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "R"',
						answer: "Romeo",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "S"',
						answer: "Sierra",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "T"',
						answer: "Tango",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "U"',
						answer: "Uniform",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "V"',
						answer: "Victor",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "W"',
						answer: "Whiskey",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "X"',
						answer: "X-Ray",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "Y"',
						answer: "Yankee",
					},
					{
						id: uuidV4(),
						question: 'Was ist die ICAO Aussprache für "Z"',
						answer: "Zulu",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Alpha"',
						answer: "A",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Bravo"',
						answer: "B",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Charlie"',
						answer: "C",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Delta"',
						answer: "D",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Echo"',
						answer: "E",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Foxtrot"',
						answer: "F",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Golf"',
						answer: "G",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Hotel"',
						answer: "H",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "India"',
						answer: "I",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Juliett"',
						answer: "J",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Kilo"',
						answer: "K",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Lima"',
						answer: "L",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Mike"',
						answer: "M",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "November"',
						answer: "N",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Oscar"',
						answer: "O",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Papa"',
						answer: "P",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Quebec"',
						answer: "Q",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Romeo"',
						answer: "R",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Sierra"',
						answer: "S",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Tango"',
						answer: "T",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Uniform"',
						answer: "U",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Victor"',
						answer: "V",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Whiskey"',
						answer: "W",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "X-Ray"',
						answer: "X",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Yankee"',
						answer: "Y",
					},
					{
						id: uuidV4(),
						question: 'Welchen Buchstaben beschreibt "Zulu"',
						answer: "Z",
					},
				],
			},
		],
		options: {
			maxIterations: 10,
			waitTime: 2000,
		},
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {},
	plugins: [vuexLocal.plugin],
});
