module.exports = {
    routes: [
        {
            method: "POST",
            path: "/transaction",
            handler: "transaction.index",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};