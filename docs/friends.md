---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/jindom.png',
    name: 'Jindom',
    title: '',
    desc: '包子师傅',
    sponsor: 'https://blog.jindom.cc/',
    actionText: 'Blog',
    links: [
      { icon: 'github', link: 'https://github.com/Jindom' }
    ]
  },
  {
    avatar: 'https://github.com/1ybs3c.png',
    name: 'edc',
    title: '',
    desc: '某不愿透露姓名的潮男,',
    sponsor: 'https://1ybs3c.github.io/',
    actionText: 'Blog',
    links: [
      { icon: 'github', link: 'https://github.com/1ybs3c' }
    ]
  },
  {
    avatar: 'https://oss.mattshi.com/img/avatar.webp',
    name: 'Matt Shi',
    title: '',
    desc: '没有天生的高手,也没有永远的菜鸡',
    sponsor: 'https://mattshi.com/',
    actionText: 'Blog',
    links: [
      { icon: 'github', link: 'https://github.com/SneakyTurt1e' }
    ]
  }
]
const net = [
  {
    avatar: 'https://github.com/zjicmDarkWing.png',
    name: 'darkwingnya',
    title: 'HTB Guru / OSCE3 / OSCP / CRTO',
    desc: '暗羽',
    sponsor: 'https://darkwing.moe/',
    actionText: 'Blog',
    links: [
      { icon: 'github', link: 'https://github.com/SneakyTurt1e' },
      { icon: 'x', link: 'https://twitter.com/darkwing_nya'}
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Core Friends</template>
    <template #lead>Say hello to my awesome friends.</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>Cyber Friend</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="small" :members="net" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>