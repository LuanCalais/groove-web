import { deepFreeze } from "../utils";

export const TABS = deepFreeze([
    { value: 'global', label: 'Global' },
    { value: 'following', label: 'Seguindo' }
]);

export const TAB_FILTERS = deepFreeze([
    { value: '', label: 'Todos' }, { value: 'listening_now', label: '🎧' }, { value: 'review', label: '⭐' },
    { value: 'recommendation', label: '🎯' }, { value: 'opinion', label: '💬' }, { value: 'question', label: '❓' },
])