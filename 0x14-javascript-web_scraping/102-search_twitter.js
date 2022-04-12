#!/usr/bin/node

const base64 = require('base-64');
const request = require('request');
const utf8 = require('utf8');

function search (bearer) {
  const url = 'https://api.twitter.com/1.1/search/tweets.json';
  request.get({
    url,
    headers: {
      Authorization: `Bearer ${bearer}`
    },
    qs: {
      q: process.argv[4],
      count: '5'
    }
  }, (err, res, body) => {
    if (!err) {
      const tweets = JSON.parse(body).statuses;
      tweets.forEach((tweet) => console.log(`[${tweet.id}] ${tweet.text} by ${tweet.user.name}`));
    }
  });
}
