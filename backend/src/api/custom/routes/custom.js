module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/today-tasks",
      handler: "custom.getTodayTasks",
    },
  ],
};
