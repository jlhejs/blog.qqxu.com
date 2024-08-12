<script setup lang="ts">
import { isDark } from '~/logics'
</script>

<template>
  <header class="header z-40">
    <router-link
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
    >
      <img v-show="isDark" src="/logo-dark.svg?url" alt="logo">
      <img v-show="!isDark" src="/logo.svg?url" alt="logo">
    </router-link>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/blog" title="Blog">
          <span class="lt-md:hidden">博客</span>
          <div i-ri-article-line md:hidden />
        </router-link>
        <router-link to="/web" class="lt-md:hidden" title="Web">
          前端技术
        </router-link>
        <router-link to="/weekend" class="lt-md:hidden" title="每周一更">
          每周一更
        </router-link>
        <router-link to="/life" class="lt-md:hidden" title="视频">
          生活
        </router-link>
        <router-link to="/plan" class="lt-md:hidden" title="计划">
          计划
        </router-link>
        <router-link to="/skills" title="技能">
          <span class="lt-md:hidden">技能</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </router-link>
        <router-link to="/material" title="书籍资料">
          <span class="lt-md:hidden">书籍资料</span>
          <div i-ri-screenshot-line class="md:hidden" />
        </router-link>
        <router-link to="/bookmarks" title="书签" class="lt-md:hidden">
          <div i-ri-bookmark-line />
        </router-link>
        <!-- <router-link to="/notes" title="Notes">
          <div i-ri-sticky-note-line />
        </router-link> -->
        <a href="https://space.bilibili.com/1498400781" target="_blank" title="bilibili" class="lt-md:hidden">
          <div i-ri:bilibili-line />
        </a>
        <a href="https://weibo.com/u/2391299105" target="_blank" title="WeiBo" class="lt-md:hidden">
          <ri:weibo-line />
        </a>
        <a href="https://github.com/jlhejs" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <div i-la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
