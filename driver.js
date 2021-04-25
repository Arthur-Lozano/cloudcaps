'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });
var faker = require('faker');
var id = faker.datatype.uuid();

var randomName = faker.name.findName(); // Rowan Nikolaus


const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:414504457420:pickup';

const payload =
{
  Message: 'delivered',
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => {
    console.log(data)
  })
  .catch(console.error);


