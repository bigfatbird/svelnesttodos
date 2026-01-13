<script lang="ts">
    import { onMount } from 'svelte';
    import TodoItem from '$lib/components/TodoItem.svelte';

    interface Todo {
        id?: string;
        title: string;
        description: string;
    }

    let todos = $state<Todo[]>([]);

    onMount(async () => {
        const res = await fetch('http://localhost:3000/todos');
        todos = await res.json();
    });

    async function addTodo() {
        const newTodo = {
            title: 'New Task',
            description: 'New Task Description'
        };

        const res = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });

        if (res.ok) {
            const addedTodo = await res.json();
            todos = [...todos, addedTodo];
        }
    }
</script>

<div class="container">
    <div class="header">
<h1>My Tasks</h1>
        <button onclick="{() => addTodo()}">Add Task</button>
    </div>
<div class="todo-list">
    {#each todos as todo (todo.id)}
        <TodoItem
                title={todo.title}
                description={todo.description}
        />
    {:else}
        <p>No tasks yet! Huzzah! 🎉</p>
    {/each}
</div>

</div>



<style>
    .container {
        text-align: center;
        padding: 1em;
        max-width: 600px;
        margin: 0 auto;
        min-height: 100vh;
    }
    .todo-list {
        max-width: 600px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }
</style>