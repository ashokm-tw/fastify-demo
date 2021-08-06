'use strict'

import {default as S} from 'fluent-json-schema';

const batter = S.object()
  .prop('id', S.string())
  .prop('type', S.string())

const batters = S.object()
  .prop('batter', S.array().items(batter))

const topping = S.object()
  .prop('id', S.string())
  .prop('type', S.string())

const bodySchema = S.object()
  .prop('id', S.string())
  .prop('type', S.string())
  .prop('name', S.string())
  .prop('ppu', S.string())
  .prop('batters', batters)
  .prop('topping', S.array().items(topping))

export default async (fastify, opts) => {
  
  fastify.get('/', async (request, reply) => {
    return 'this is an example';
  });

  fastify.post('/', { body: bodySchema }, async (request, reply) => {
    return request.body;
  })
}
