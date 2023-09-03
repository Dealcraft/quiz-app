import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuizOverview from "@/views/quiz/QuizOverview.vue";

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
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
