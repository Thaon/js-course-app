"use strict";
const moment = require("moment");

module.exports = {
  getTodayTasks: async (ctx) => {
    const { user } = ctx.state;

    const tasks = await strapi.documents("api::task.task").findMany({
      filters: {
        owner: user.id,
        date: {
          $gte: moment().startOf("day").toISOString(),
          $lte: moment().endOf("day").toISOString(),
        },
      },
    });

    return ctx.send(tasks);
  },
};
