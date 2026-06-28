import { betterAuth } from 'better-auth'
import Database from 'better-sqlite3'

export const auth = betterAuth({
  // Dev: SQLite file. Swap for a real adapter (e.g. @better-auth/drizzle + postgres) in prod.
  database: new Database('./auth.db'),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: [process.env.ADMIN_URL ?? 'http://localhost:3001'],
})

export type Auth = typeof auth
