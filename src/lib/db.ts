// import { Redis } from '@upstash/redis'

// export const db = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// })

import { Redis, Requester } from '@upstash/redis'

interface CustomRequester extends Requester {
  url?: string
  token?: string
  request(options: any): any // add the required request property
}

const requester: CustomRequester = {
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  request: (options: any) => {}, // implement the required request function
}

export const db = new Redis(requester)

