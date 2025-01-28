import { db, completeTodo } from "$lib/server/db";
import { todos } from "$lib/server/db/schema";

export const actions = {
    add: async ({ request }) => {
        const data = await request.formData();
        await db.insert(todos).values({
            title: data.get('title') as string,
            completed: false
        })
    },
    complete: async ({ request }) => {
        const data = await request.formData();
        await completeTodo(parseInt(data.get('id') as string));
    }
}