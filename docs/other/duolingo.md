# Duolingo

https://www.duolingo.com/profile/0ffsec

<script setup>
import { ref, onMounted } from 'vue'

const data1 = ref()
const data2 = ref()

onMounted(async () => {
  const res1 = await fetch('https://test.cors.workers.dev/?https://www.duolingo.com/2017-06-30/users/1263426613')
  data1.value = (await res1.json())

  const res2 = await fetch('https://test.cors.workers.dev/?https://duolingo-leaderboards-prod.duolingo.com/leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce/users/1263426613')
  data2.value = (await res2.json())
})
</script>

<!-- <p v-if="data2">
The current latest stable version of pnpm is <strong>{{ data2.tier }}</strong>.
</p>
<p v-else>
Checking ...
</p> -->

## **Statistics**

<div>
    <div class="tlj">
        <div class="v5">
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/8a6dca76019d059a81c4c7c1145aa7a4.svg" alt="Day streak icon" />
                <div class="rjb">
                    <h4 class="text-1" v-if="data1">{{ data1.streak }}</h4>
                    <div class="text-2">Day streak</div>
                </div>
            </div>
        </div>
        <div class="v5">
            <div class="soc">
                <img class="icon" src="https://d35aaqx5ub95lt.cloudfront.net/images/profile/01ce3a817dd01842581c3d18debcbc46.svg" alt="Total XP icon" />
                <div class="">
                    <h4 class="text-1" v-if="data1">{{ data1.totalXp }}</h4>
                    <div class="text-2">Total XP</div>
                </div>
            </div>
        </div>
        <div class="v5">
            <div class="badge" v-if="data2">Week {{ data2.streak_in_tier }}</div>
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
                    <h4 class="text-1" v-if="data2">{{ data2.top_three_finishes }}</h4>
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
        width: 30px;
        border-style: none;
      }
    
      .rjb {
        align-self: center;
        flex: 1 0 auto;
      }
    
      .text-1 {
        font-size: 20px;
        margin-bottom: 4px;
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


https://www.duolingo.com/2017-06-30/users/1263426613

```
GET /2017-06-30/users/1263426613 HTTP/2
Host: www.duolingo.com

{"achievements":[],"hasFacebookId":false,"totalXp":37566,"id":1263426613,"acquisitionSurveyReason":"friendsOrFamily","fromLanguage":"zh","picture":"//simg-ssl.duolingo.com/avatars/1263426613/0KY0x6mhwZ","canUseModerationTools":false,"emailVerified":true,"currentCourseId":"DUOLINGO_EN_ZH-CN","joinedClassroomIds":[],"hasPhoneNumber":true,"hasRecentActivity15":false,"courses":[{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"English","learningLanguage":"en","xp":37508,"healthEnabled":true,"fromLanguage":"zh","id":"DUOLINGO_EN_ZH-CN","crowns":0},{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"Chinese (Cantonese)","learningLanguage":"zh-HK","xp":28,"healthEnabled":true,"fromLanguage":"zh","id":"DUOLINGO_ZH-HK_ZH-CN","crowns":0},{"preload":false,"placementTestAvailable":false,"authorId":"duolingo","title":"Japanese","learningLanguage":"ja","xp":30,"healthEnabled":true,"fromLanguage":"zh","id":"DUOLINGO_JA_ZH-CN","crowns":0}],"streak":303,"creationDate":1695081630,"name":"Huge","_achievements":[],"globalAmbassadorStatus":{},"roles":["users"],"motivation":"work","hasPlus":true,"observedClassroomIds":[6656048],"hasGoogleId":true,"privacySettings":["DISABLE_PERSONALIZED_ADS","DISABLE_THIRD_PARTY_TRACKING"],"streakData":{"currentStreak":{"endDate":"2024-07-18","length":303,"lastExtendedDate":"2024-07-18","startDate":"2023-09-19"},"previousStreak":null,"length":303,"xpGoal":10,"longestStreak":{"endDate":"2024-07-18","length":303,"achieveDate":"2023-09-19","startDate":"2023-09-19"},"churnedStreakTimestamp":0,"updatedTimeZone":"Asia/Bahrain","updatedTimestamp":1721293200,"startTimestamp":1695114000},"learningLanguage":"en","subscriberLevel":"PREMIUM","username":"0ffsec"}

```

https://duolingo-leaderboards-prod.duolingo.com/leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce/users/1263426613

```
GET /leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce/users/1263426613 HTTP/2
Host: duolingo-leaderboards-prod.duolingo.com

---

HTTP/2 200 OK
Date: Thu, 18 Jul 2024 21:50:30 GMT
Content-Type: application/json
Content-Length: 207
Vary: Accept-Encoding
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
X-Envoy-Upstream-Service-Time: 17
X-Duo-Request-Host: duolingo-leaderboards-prod.duolingo.com
Server: duo-api

{"num_wins":0,"stats":{"last_win_contest_end":null,"num_wins":0,"number_one_finishes":3,"number_two_finishes":2,"streak_in_tier":2,"top_three_finishes":6},"streak_in_tier":2,"tier":4,"top_three_finishes":6}
```