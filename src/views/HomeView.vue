<template>
    <AppLayout>
        <div class="tabs">
            <button class="tab">
                Button
            </button>
        </div>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../components/AppLayout.vue'
</script>

<style scoped>
.tabs {
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    padding: 0 20px;
}

.tab {
    padding: 16px 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--text-3);
    border-bottom: 2px solid transparent;
}

.tab:hover {
    color: var(--text-2);
}

.tab.active {
    color: var(--text);
    border-bottom-color: var(--accent);
}
</style>