---
layout: doc
title: Other
lang: en-US
published: true
---

<script setup>
import { ref, onMounted } from 'vue'

const streak = ref()

onMounted(async () => {
  const res = await fetch('https://cors.rbpi.cc/corsproxy/?apiurl=https://www.duolingo.com/2017-06-30/users/1263426613')
  streak.value = (await res.json()).streak
})
</script>

<p v-if="streak">
The current latest stable version of pnpm is <strong>{{ streak }}</strong>.
</p>
<p v-else>
Checking latest version...
</p>

## **Statistics**
<div>
    <div class="tlj">
        <div class="v5">
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg" alt="Day streak icon" />
                <div class="rjb">
                    <h4 class="text-1">302</h4>
                    <div class="text-2">Day streak</div>
                </div>
            </div>
        </div>
        <div class="v5">
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg" alt="Total XP icon" />
                <div class="">
                    <h4 class="text-1">37546</h4>
                    <div class="text-2">Total XP</div>
                </div>
            </div>
        </div>
        <div class="v5">
            <div class="badge">Week 2</div>
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/74d6ab6e5b6f92e7d16a4a6664d1fafd.svg" alt="Current league icon" />
                <div class="">
                    <h4 class="text-1">Ruby</h4>
                    <div class="text-2">Current league</div>
                </div>
            </div>
        </div>
        <div class="v5">
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/3f97ae337724f7edb6dfbef23cd3a6e7.svg" alt="Top 3 finishes icon" />
                <div class="">
                    <h4 class="text-1">6</h4>
                    <div class="text-2">Top 3 finishes</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .tlj {
        display: grid;
        gap: 12px;
        grid-template-columns: repeat(2, 1fr);
      }
    
      .v5 {
        position: relative;
      }
    
      .soc {
        border: 2px solid rgb(229, 229, 229);
        border-radius: 16px;
        display: flex;
        overflow: hidden;
        padding: 15px 24px;
      }
    
      .icon {
        margin-right: 15px;
        width: 40px;
        border-style: none;
      }
    
      .rjb {
        align-self: center;
        flex: 1 0 auto;
      }
    
      .text-1 {
        font-size: 20px;
        margin-bottom: 4px;
        color: rgb(60, 60, 60);
        margin: 0 0 10px;
      }
    
      .text-2 {
        color: rgb(175, 175, 175);
        font-size: 16px;
      }
    
      .badge {
        background-color: rgb(255, 75, 75);
        border: 2px solid rgb(255, 255, 255);
        border-radius: 7px;
        color: rgb(255, 255, 255);
        font-size: 12px;
        font-weight: 700;
        line-height: 14px;
        padding: 3px 5px 3px 6px;
        position: absolute;
        right: -6px;
        text-transform: uppercase;
        top: -8px;
      }
</style>