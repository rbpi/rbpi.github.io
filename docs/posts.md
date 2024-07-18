---
layout: doc
title: Posts
lang: en-US
published: true
---
# Template

---

<script setup>
import { ref, onMounted } from 'vue'

const version = ref()

onMounted(async () => {
  const res = await fetch('https://api.github.com/repos/pnpm/pnpm/releases/latest')
  version.value = (await res.json()).name
})
</script>

# Releases {#releases}

<p v-if="version">
The current latest stable version of pnpm is <strong>{{ version }}</strong>.
</p>
<p v-else>
Checking latest version...
</p>

## audio

<audio id="vite-audio">
  <source src="/vite.mp3" type="audio/mpeg">
</audio>

Vite (French word for "quick", pronounced `/vit/`<button style="border:none;padding:3px;border-radius:4px;vertical-align:bottom" id="play-vite-audio" onclick="document.getElementById('vite-audio').play();"><svg style="height:2em;width:2em"><use href="/voice.svg#voice" /></svg></button>, like "veet") is a build tool

## GitHub-flavored Alerts

> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。

## badge

Title <Badge type="info" text="default" />

Title <Badge type="tip" text="^1.9.0" />

Title <Badge type="warning" text="beta" />

Title <Badge type="danger" text="caution" />