<script setup>
const portfolios = [
  {
    category: "取得個人 GitHub Repositories內容 | TypeScript 撰寫",
    img: "https://i.imgur.com/OeYMK5Z.jpeg",
    items: [
      "簡單輸入個人 GitHub 名稱即可取得並渲染 Repositories 內容出來",
      "使用 async/await 讓非同步變成同步",
      "計算網頁捲軸是否滑到最底，像FB那樣繼續渲染資料出來",
      "使用 type 定義型別",
      "給 JS 的型態加上了 TS 的型別",
      "設定如果找不到資料就顯示404畫面",
    ],
    link: "https://github.com/Kitou-1016/GitHub-public-repo",
  },
  {
    category: "API串接 & 畫面渲染 & 操作網址變更",
    img: "https://i.imgur.com/iuPoFjZ.jpeg",
    items: [
      "使用者點擊選項，下方渲染內容",
      "JS檔案分開，避免程式碼混亂，打API一支.js 網址操作一支.js",
      "打API拿資料，使用.innerHTML 方式渲染到畫面上",
      "使用 window.location 方式操作跟網址有關的屬性",
      "練習使用 window.location.search 取得 query 參數",
      "使用 new URLSearchParams 方式去解析 Unicode 編碼",
      "判斷網址是否有: ? & =",
      "使用 async/await 讓非同步變成同步",
    ],
    link: "https://github.com/Kitou-1016/JS-API-exercise",
  },
  {
    category: "個人卡片",
    img: "https://i.imgur.com/CBAXKyR.jpeg",
    items: [
      "滑鼠觸碰卡片後內容浮現，添增使用者互動性",
      "使用 CSS 撰寫一個簡單的個人名片",
      "使用 :hover 增加卡片的互動性",
      "使用 transition 讓互動的過程不生硬",
      "使用 position 控制元素定位方式",
      "利用 opacity 特性, 點擊到時候顯示內容, 再次點擊則隱藏",
    ],
    link: "https://github.com/Kitou-1016/My-Business-Card",
  },
  {
    category: "天氣小卡片(Sass)",
    img: "https://i.imgur.com/D1zLdzg.jpeg",
    items: [
      "滑鼠點擊，卡片會展開並顯示雲朵與太陽",
      "使用 CSS 撰寫月亮移動的效果",
      "使用 SVG 呈現出下雨的線條",
      "使用 @keyframes 搭配 animation 讓動畫重複播放",
      "使用 :hover 增加卡片的互動性",
      "使用 transition 讓互動的過程不生硬",
      "使用 position 控制元素定位方式",
      "利用 opacity 特性, 觸碰到時候顯示內容, 離開則隱藏",
    ],
    link: "https://codepen.io/naoki-Toyosaki/pen/KwPQYdj",
  },
  {
    category: "Bootstrap-RWD 練習 - 1",
    img: "https://i.imgur.com/WbFNbUo.jpeg",
    items: [
      "Bootstrap響應式設計讓網站在不同尺寸的螢幕有不一樣的顯示效果",
      "使用Bootstrap的預製組件，減少編寫程式碼的時間",
      "廣泛使用 aria- 屬性",
      "利用斷點: md、lg、sm 設計響應式容器",
      "練習撰寫橫向導覽列表(麵包削)",
    ],
    link: "https://github.com/Kitou-1016/Bootstrap-RWD-exercise",
  },
  {
    category: "Bootstrap-RWD 練習 - 2",
    img: "https://i.imgur.com/GBl8EPQ.jpeg",
    items: [
      "Bootstrap響應式設計讓網站在不同尺寸的螢幕有不一樣的顯示效果",
      "使用Bootstrap的預製組件，減少編寫程式碼的時間",
      "廣泛使用 aria- 屬性",
      "利用斷點: md、lg、sm 設計響應式容器",
      "練習撰寫橫向導覽列表(麵包削)",
    ],
    link: "https://github.com/Kitou-1016/Bootstrap-RWD-exercise---2",
  },
  {
    category: "JQuery 撰寫購物清單",
    img: "https://i.imgur.com/TmQrAPa.jpeg",
    items: [
      "嘗試使用JQuery撰寫互動邏輯，讓使用者輸入產品名稱及價格後，自動新增到列表內，並及時計算總價",
      "物品項目存放在Arr，再使用forEach()將其取出",
      "練習使用選擇器語法 : $('')去調用class或id",
      "練習操作HTML元素的屬性",
      "使用.ready()方法，確保HTML文檔已經完全載入才進行操作",
      "if判斷式和function練習",
    ],
    link: "https://github.com/Kitou-1016/Shopping-List",
  },
];
</script>

<template>
  <h2>作品集</h2>
  <div class="portfolios" v-for="web in portfolios" :key="web.category">
    <h3>{{ web.category }}</h3>
    <div class="content">
      <div class="left">
        <img :src="web.img" alt="" />
      </div>
      <div class="right">
        <h4>作品介紹</h4>
        <ul>
          <li v-for="item in web.items" :key="item">{{ item }}</li>
        </ul>
        <br />
        <br />
        <a :href="web.link" target="_blank" calss="link">&gt; GitHub 連結</a>
        <h4 v-if="web.works">分工與職責</h4>
        <ul>
          <li v-for="work in web.works" :key="work">{{ work }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
h2 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
}
.portfolios {
  margin: 24px 0;
  padding: 24px;
  border: 1px dashed #e9ad64;
  border-radius: 25px;
  @media (max-width: 1024px) {
    width: 768px;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    padding: 10px 0px 0px 30px;
  }
  .content {
    display: flex;
    .left {
      width: 500px;
      margin: 24px;
      img {
        width: 500px;
        @media (max-width: 1024px) {
          width: 300px;
        }
      }
      a {
        display: inline-block;
        margin: 32px 16px;
      }
    }
    .right {
      margin: 24px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
      h4 {
        font-size: 25px;
        margin-bottom: 25px;
        text-align: center;
      }
      li {
        font-size: 18px;
        letter-spacing: 1px;
        line-height: 30px;
        transition: 0.5s;
        @media (max-width: 768px) {
          font-size: 20px;
        }
      }
      a:hover {
        border-bottom: 1px solid #000;
        color: #c96e00;
      }
    }
  }
}
</style>