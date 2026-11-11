<template>
    <div class="widget card">
        <template v-if="isDefault">
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
        </template>

        <slot v-else />

    </div>
</template>

<script setup>
import { Heart, Mouth, StarCheck, MessageCircleText, BadgeQuestionMark } from '@lucide/vue'
defineProps({
    isDefault: { type: Boolean, default: false },
})
</script>

<style scoped>
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