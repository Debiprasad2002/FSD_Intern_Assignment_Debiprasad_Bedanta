const amqp = require('amqplib');

let channel;

async function connectToRabbitMQ() {
    const connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    console.log('Connected to RabbitMQ');
}

async function publishToQueue(queue, message) {
    if (!channel) await connectToRabbitMQ();
    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}

module.exports = { connectToRabbitMQ, publishToQueue };
