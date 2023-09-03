const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	pwa: {
		appleMobileWebAppCapable: true,
		name: "Quiz App",
		shortName: "Quiz App",
		themeColor: "#132139FF",
	},
});
