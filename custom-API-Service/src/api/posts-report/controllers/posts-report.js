module.exports = {
  async postsReport(ctx, next) {
    try {
      const data = await strapi
        .service("api::posts-report.posts-report")
        .postsReport();
      console.log(data, "data");

      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Controller error", { moreDetails: err });
    }
  },
};
