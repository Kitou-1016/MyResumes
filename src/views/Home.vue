<script setup>
const frontSkills = [
  {
    category: "網頁前端技術",
    items: [
      "HTML · CSS3語法",
      "使用CSS開發天氣小卡片、個人名片",
      "RWD響應式網頁設計",
      "了解Cookies/localStorage",
    ],
  },
  {
    category: "JavaScript",
    items: [
      "了解 JavaScript 特性與事件循環機制",
      "使用axios、fetch串接API",
      "物件的淺複製與深度複製規則",
      "async/await處理非同步操作",
    ],
  },
  {
    category: "Vue 3",
    items: [
      "使用Vue 3版本，Vue CLI開發工具",
      "props & emit 應用",
      "Vue Router單頁式應用 SPA",
      "Vuex應用",
    ],
  },
];
const otherSkills = [
  {
    category: "個人實作",
    items: [
      "API串接 & 操作網址變更",
      "取得個人 GitHub 內容(TS)",
      "個人卡片",
      "具有RWD功能網頁",
      "購物清單",
      "天氣小卡片",
    ],
  },
  {
    category: "TypeScript",
    items: ["了解 TS 型別檢查用意", "Tuple(元組)、泛型、聯合類型...等等應用"],
  },
  {
    category: "其他",
    items: [
      "Git · Github",
      "Bootstrap",
      "JQuery",
      "ESLint",
      "Element+",
      "Swiper",
      "AOS 滾動動畫套件",
    ],
  },
];
</script>

<template>
  <section class="introduce">
    <div class="my_photo">
      <img id="photo" src="../assets/img/CHANG-TINGWEI.jpg" alt="" />
      <p class="name">張庭瑋<span class="age">30歲</span></p>
      <p>畢業學校: 吳鳳科技大學</p>
      <p>手機: 0975-101096</p>
      <p>E-mail:</p>
      <p>toyosaki1016@gmail.com</p>
    </div>
    <div class="content">
      <h2 class="job_title">希望職位：前端工程師</h2>
      <p>
        我觀察到世界正邁向
        AI時代，開始思考這些技術如何影響日常生活，因此自學前端開發（HTML、CSS、JavaScript、Vue...），期望未來能轉職為前端工程師，深入探索技術並為生活創造更好的體驗。
        <br />
        <br />
        具備日語專業背景與兩年日本飯店業經驗，能以日文流暢溝通與書寫，並培養出良好的觀察力、抗壓性與自主學習能力。
        <br />
        <br />
        另外，有四年半導體產業經驗，曾於東京威力擔任駐點廠商，負責塗佈顯影設備的裝機前置作業及治具管理業務<br /><br />
        <span>
          【擅長技術】
          <br />
          HTML · CSS · JavaScript · TypeScript · RWD · Vue3 · API串接<br />
        </span>
      </p>
      <router-link to="/resumes"
        ><button>More in&nbsp;→ &nbsp;&nbsp;我的自傳</button></router-link
      >
    </div>
  </section>

  <section class="skill">
    <h2>我的前端技能</h2>
    <div class="frontSkills">
      <div class="content" v-for="skill in frontSkills" :key="skill.category">
        <h3>【{{ skill.category }}】</h3>
        <ul>
          <li v-for="item in skill.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="otherSkills">
      <div class="content" v-for="skill in otherSkills" :key="skill.category">
        <h3>【{{ skill.category }}】</h3>
        <ul>
          <li v-for="item in skill.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.introduce {
  max-width: 1024px;
  margin: auto;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 15px gray;
  border-radius: 5px;
  @media (max-width: 1024px) {
    width: 768px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
  }
  .my_photo {
    width: 35%;
    padding: 10px 40px 10px;
    background: white;
    @media (max-width: 1024px) {
      width: 100%;
      border-bottom: 1px solid #000000;
    }
    #photo {
      width: 50%;
      display: block;
      margin: 36px auto;
      border-radius: 5px;
      @media (max-width: 1024px) {
        width: 25%;
        margin: 0 auto;
      }
    }
    .name {
      font-size: 25px;
      letter-spacing: 6px;
      border-bottom: 1px solid #000;
      margin-bottom: 30px;
      @media (max-width: 1024px) {
        font-size: 30px;
      }
    }
    .age {
      font-size: 20px;
      margin-left: 15px;
      @media (max-width: 1024px) {
        font-size: 25px;
      }
    }
    p {
      font-size: 17px;
      font-weight: 600;
      letter-spacing: 4px;
      text-align: center;
      margin-top: 7px;
      @media (max-width: 1024px) {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }

  .content {
    width: 70%;
    padding: 30px 60px 15px 60px;
    background: rgba(180, 180, 180, 0.3);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (max-width: 1024px) {
      width: 100%;
    }
    .job_title {
      margin-bottom: 50px;
      text-align: center;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 2px;
      > span {
        font-weight: 500;
      }
    }
    button {
      color: #64601b;
      font-size: 20px;
      font-weight: 700;
      float: right;
      margin-top: 30px;
      &:hover {
        color: #e3c451;
      }
    }
  }
}

.skill {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 768px;
    margin: 0 auto;
  }
  h2 {
    font-size: 30px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 40px;
    }
  }
  .frontSkills,
  .otherSkills {
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
      // width: 1024px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
    }

    .content {
      margin: 25px;
      padding: 8px 15px;
      background: rgba(122, 204, 255, 0.3);
      box-shadow: 0 0 5px gray;
      border-radius: 5px;
      transition: 0.3s;

      &:hover {
        scale: 1.1;
      }
      h3 {
        width: 300px;
        padding: 5px 0 16px;
        border-bottom: 1px solid black;
        @media (max-width: 1024px) {
          width: 400px;
          font-size: 25px;
          text-align: center;
        }
      }
      ul {
        width: 250px;
        @media (max-width: 1024px) {
          width: 400px;
          text-align: center;
          list-style-type: none;
        }
        li {
          height: 100%;
          font-size: 19px;
          margin: 10px 0 8px 32px;
        }
      }
    }
  }
}
</style>