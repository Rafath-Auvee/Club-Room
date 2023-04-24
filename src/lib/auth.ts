import { NextAuthOptions } from "next-auth";
import { UpstashRedisAdapter } from "@next-auth/upstash-redis-adapter";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: UpstashRedisAdapter(db),
};
