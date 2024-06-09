// z ofi dokumentace cypress cucumber preprocessor gitu - https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md 

import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor"; //fixnuto instalací https://github.com/bahmutov/cypress-split-cucumber-example
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild"; // fixnuto přidáním řádku ""esModuleInterop": true," do tsconfig.json

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://test3-cd.sc.christies.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,

    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});