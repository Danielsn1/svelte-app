import { todos } from '$lib/server/db/schema';

export type todo = typeof todos.$inferInsert;
