"use strict";

/**
 * task controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::task.task", ({ strapi }) => ({
  async find(ctx) {
    const { user } = ctx.state;

    if (!user) {
      return ctx.unauthorized("You cant access those tasks my dude");
    }

    const tasks = await strapi.documents("api::task.task").findMany({
      filters: {
        owner: user.id,
      },
    });

    return ctx.send(tasks);
  },
}));
