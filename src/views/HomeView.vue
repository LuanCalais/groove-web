<template>
    <AppLayout>
        <div class="tabs">
            <button v-for="t in TABS" :key="t.value" class="tab" :class="{ active: activeTab === t.value }"
                @click="switchTab(t.value)">
                {{ t.label }}
            </button>
        </div>

        <template #right>
            <AppInformationCard is-default />
        </template>
    </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import AppInformationCard from '../components/AppInformationCard.vue'
import { TABS } from '../constants'

const activeTab = ref('global'), activeType = ref('')

function switchTab(tab) {
    if (activeTab.value === tab) return
    activeTab.value = tab
}

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