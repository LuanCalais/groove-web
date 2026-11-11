<template>
    <aside class="sidebar">
        <router-link to="/" class="logo">
            <span class="logo-icon">♩</span>
            <span class="logo-text">groove</span>
        </router-link>

        <nav class="nav">
            <router-link to="/" class="nav-item" exact-active-class="active">
                <span class="ico">⌂</span><span class="lbl">Feed</span>
            </router-link>
        </nav>
    </aside>
</template>

<script setup>

</script>

<style scoped>
.sidebar {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
    height: 100vh;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 12px 20px;
    border-bottom: 1px solid var(--border);
    margin-bottom: 8px;
}

.logo-icon {
    font-size: 26px;
    color: var(--accent);
    line-height: 1;
}

.logo-text {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.5px;
    font-family: var(--font-mono);
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
}

.nav-item,
.side-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    width: 100%;
    border-radius: var(--radius-sm);
    color: var(--text-2);
    font-size: 15px;
    font-weight: 500;
    transition: all .15s;
}

.nav-item:hover,
.side-btn:hover {
    background: var(--bg-input);
    color: var(--text);
}

.nav-item.active {
    background: var(--accent-2);
    color: var(--accent);
}

.ico {
    width: 20px;
    text-align: center;
    font-size: 18px;
}

.bottom {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
}

@media (max-width: 900px) {

    .logo-text,
    .lbl {
        display: none;
    }

    .logo,
    .nav-item,
    .side-btn {
        justify-content: center;
        padding-left: 0;
        padding-right: 0;
    }
}
</style>