module.exports = async function (context, req) {

    context.res.json({
        text: "hello from the azure function api"
    });

};
