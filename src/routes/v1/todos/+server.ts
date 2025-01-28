import { getTodos } from "$lib/server/db";
import { json } from "@sveltejs/kit";


export async function GET() {
    const todos = await getTodos();
    return json(
        todos
        , { status: 200 });
}