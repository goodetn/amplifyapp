export default {
  includeShadowDom: true,
  projectId: "f3d58h",

  env: {
    staging: "https://main.diuugoqw2dxy7.amplifyapp.com/",
    live: "https://main.diuugoqw2dxy7.amplifyapp.com/",
  },

  users: {
    user1: {
      username: "username1",
      password: "password1",
    },
    user2: {
      username: "username2",
      password: "password2",
    },
  },

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
