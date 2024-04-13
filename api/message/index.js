//module.exports = async function (context, req) {
//    context.res.json({
//        text: "Hello from the Azure Function API"
//    });
//};

const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        var responseInJson = { body: `Hello, ${name}!` };

        context.log(`Http function processed response object: "${responseInJson}"`);

        return response;
    }
});
