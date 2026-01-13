<script lang="ts">
    let { title, description } = $props<{
        title: string;
        description: string;
    }>();

    let menuOpen = $state(false);

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<div class="todo-card">
    <div class="header">
        <h3>{title}</h3>
        <div class="menu-container">
            <button class="menu-button" onclick={toggleMenu}  aria-label="Todo-Edit-Menu">
                ⋮
            </button>

            {#if menuOpen}
                <div class="dropdown" onmouseleave={closeMenu} role="menu" tabindex="0">
                    <button onclick={() => console.log('Edit clicked')}>Edit</button> // TODO: Implement
                    <button class="delete" onclick={() => console.log('Delete clicked')}>Delete</button> // TODO: Implement
                </div>
            {/if}
        </div>
    </div>
    <p>{description}</p>
</div>

<style>
    .todo-card {
        border: 1px solid #ddd;
        padding: 1rem;
        margin-block: 0.5rem;
        border-radius: 12px;
        background: #fafafa;
        position: relative;
        text-align: left;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .menu-container {
        position: relative;
    }

    .menu-button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0 0.5rem;
        color: #666;
        line-height: 1;
    }

    .menu-button:hover {
        color: #000;
    }

    .dropdown {
        position: absolute;
        right: 0;
        top: 100%;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        z-index: 10;
        display: flex;
        flex-direction: column;
        min-width: 100px;
        overflow: hidden;
    }

    .dropdown button {
        background: none;
        border: none;
        padding: 0.75rem 1rem;
        text-align: left;
        cursor: pointer;
        font-size: 0.9rem;
    }

    .dropdown button:hover {
        background: #f0f0f0;
    }

    .dropdown button.delete {
        color: #ff4444;
    }

    h3 {
        margin: 0 0 0.5rem 0;
        color: #333;
        flex: 1;
    }

    p {
        margin: 0;
        color: #666;
    }
</style>