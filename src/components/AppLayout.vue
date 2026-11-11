<template>
    <div class="layout">
        <AppSidebar />
        <main class="main-col">
            <slot />
        </main>
        <aside class="right-col">
            <slot name="right" />
        </aside>
    </div>
</template>

<script setup>
import AppSidebar from './AppSidebar.vue'
</script>

<style scoped>
.main-col {
    min-height: 100vh;
    border-left: 1px solid var(--border);
    border-right: 1px solid var(--border);
}

.right-col {
    padding: 24px 0;
}

@media (max-width: 900px) {
    .right-col {
        display: none;
    }
}
</style>