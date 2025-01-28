import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';
import { todos } from './schema';
import { eq } from 'drizzle-orm';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
const client = new Database(env.DATABASE_URL);
export const db = drizzle(client);

export const getTodos = async () => {
    return db.select().from(todos).where(eq(todos.completed, false))
}

export const completeTodo = async (id: number) => {
    return db.update(todos).set({
        completed: true
    }).where(eq(todos.id, id))
}
