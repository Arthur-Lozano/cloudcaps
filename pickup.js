'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/414504457420/pickup-queue',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();
