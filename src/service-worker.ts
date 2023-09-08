import routing from "workbox-routing";
import strategies from "workbox-strategies";
import expiration from "workbox-expiration";

routing.registerRoute(/.*\.html/, new strategies.StaleWhileRevalidate());
//This is how you can use the network first strategy for files ending with .js
routing.registerRoute(/.*\.js/, new strategies.StaleWhileRevalidate());

// Use cache but update cache files in the background ASAP
routing.registerRoute(
	/.*\.css/,
	new strategies.StaleWhileRevalidate({
		cacheName: "quiz-app-css-cache",
	})
);

//Cache first, but defining duration and maximum files
routing.registerRoute(
	/.*\.(?:png|jpg|jpeg|svg|gif|ico)/,
	new strategies.CacheFirst({
		cacheName: "quiz-app-image-cache",
		plugins: [
			new expiration.ExpirationPlugin({
				maxEntries: 20,
				maxAgeSeconds: 7 * 24 * 60 * 60,
			}),
		],
	})
);
