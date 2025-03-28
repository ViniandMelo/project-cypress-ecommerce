const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://automationexercise.com/",
    video: true, // Habilita a gravação de vídeos
    screenshotOnRunFailure: true, // Faz screenshot se o teste falhar
    screenshotsFolder: "cypress/screenshots", // Pasta para salvar screenshots
    videosFolder: "cypress/videos", // Pasta para salvar vídeos
    resultsFolder: "cypress/results", // Pasta para salvar resultados (caso queira salvar arquivos de resultados)
  },
});
