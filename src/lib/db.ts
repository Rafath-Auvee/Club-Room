// import { Redis } from '@upstash/redis'

// export const db = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// })

import { Redis, Requester } from '@upstash/redis'

interface CustomRequester extends Requester {
  url?: string
  token?: string
}

const requester: CustomRequester = {
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
}

export const db = new Redis(requester)
