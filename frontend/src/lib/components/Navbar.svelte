<script lang="ts">
    import { resolve } from '$app/paths'
</script>

<nav>
    <a href={resolve('/')}>Home</a>
    <a href={resolve('/about')}>About</a>
</nav>

<style>
    nav {
        padding: 1rem;
        background: #ff3e00;
        display: flex;
        gap: 1rem;
    }

    a {
        color: white;
        text-decoration: none;
    }
</style>