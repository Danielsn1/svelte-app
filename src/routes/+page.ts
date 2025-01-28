import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { todo } from "$lib/types";

export const load: PageServerLoad = async ({ fetch }) => {
    const response = await fetch('/v1/todos');
    const todos: Array<todo> = response.ok ? await response.json() : null;

    if (todos) {
        return { todos: todos };
    }

    error(404, 'Not Found');
}