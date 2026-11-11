<template>
    <AppLayout>
        <div class="tabs">
            <button v-for="t in TABS" :key="t.value" class="tab" :class="{ active: activeTab === t.value }"
                @click="switchTab(t.value)">
                {{ t.label }}
            </button>
        </div>

        <template #right>
            <div class="widget card">
                <h3>O que postar?</h3>
                <ul>
                    <li><b>
                            <Heart :size="16" /> ouvindo agora
                        </b> - o que está tocando</li>
                    <li><b>
                            <StarCheck :size="16" /> review
                        </b> - o que achou</li>
                    <li><b>
                            <Mouth :size="16" /> indica
                        </b> - recomende algo</li>
                    <li><b>
                            <MessageCircleText :size="16" /> opinião
                        </b> - o que pensa</li>
                    <li><b>
                            <BadgeQuestionMark :size="16" /> pergunta
                        </b> - pergunte à galera</li>
                </ul>
            </div>
        </template>
    </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import AppLayout from '../components/AppLayout.vue'
import { TABS } from '../constants'
import { Heart, Mouth, StarCheck, MessageCircleText, BadgeQuestionMark } from '@lucide/vue'

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

.widget {
    padding: 18px 20px;
    margin-top: 24px;
}

.widget h3 {
    font-size: 14px;
    margin-bottom: 14px;
}

.widget ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 13px;
    color: var(--text-2);
    line-height: 1.4;
}

.widget li {
    display: flex;
}

.widget b {
    color: var(--text);
    display: flex;
    align-items: center;
    column-gap: 4px;
    margin-right: 4px;
}
</style>