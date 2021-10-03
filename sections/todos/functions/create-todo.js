const sendQuery = require('./utils/send-query');

const CREATE_TODO = `
    mutation($text: String!)
     CreateATodo {
   createTodo(data: { text: $text, completed: false})
   {
    _id
    text
    completed
   }
}
`;

exports.handler = async event => {
    const { text } = JSON.parse(event.body);
    const { data, errors } = await sendQuery(CREATE_TODO, { text });

    if (errors) {
        return {
            statusCode: 500,
            body: JSON.stringify(errors)
        };
    }
    return {
        statusCode: 200,
        body: JSON.stringify({ todos: data.createTodo.data })
    };
}