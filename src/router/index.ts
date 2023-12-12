import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizOverview from "@/views/quiz/QuizOverview.vue";
import QuizQuestions from "@/views/quiz/QuizQuestions.vue";
import QuizEdit from "@/views/quiz/QuizEdit.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
	},
	{
		path: "/quiz/:id",
		name: "QuizOverview",
		component: QuizOverview,
	},
	{
		path: "/quiz/:id/run",
		name: "QuizQuestions",
		component: QuizQuestions,
	},
	{
		path: "/quiz/:id/edit",
		name: "QuizEdit",
		component: QuizEdit,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
