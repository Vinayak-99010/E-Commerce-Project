const request = require('supertest');
const express = require('express');
const app = require('../server'); // adapt: export app in server.js

describe('GET /api/products', function () {
  it('returns 200 and array', async function () {
    const res = await request(app).get('/api/products');
    if (res.status !== 200) throw new Error('status not 200');
    if (!Array.isArray(res.body)) throw new Error('body not array');
  });
});
