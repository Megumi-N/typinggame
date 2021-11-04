<template>
  <v-container>
    <!-- コンテンツ部分 -->
    <v-row class="text-center mt-10">
      <v-col>
        <!-- Top -->
        <v-row v-if="startFlag != true" class="text-center mt-10">
          <v-col class="mb-4">
            <!-- タイトル部分 -->
            <div class="display-2 font-weight-bold mb-3 item delay-anime">
              <span
                v-cloak
                v-for="(t, index) in title"
                :key="index"
                class="item"
                :style="{ animationDelay: index * 100 + 'ms' }"
                v-text="t"
              >
              </span>
            </div>

            <div class="mt-5" v-cloak>
              {{ subTitle }}
            </div>
            <v-btn
              color="#5f32b1"
              class="button mt-3"
              dark
              large
              @click="changeFlg"
              rounded
              v-cloak
              >{{ start_btn }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- ボタン押下後 -->
        <v-row
          v-if="
            startFlag == true &&
            current_question_counts < question_counts &&
            sec > 0
          "
        >
          <v-col>
            <div v-cloak>残り時間：{{ sec }}秒</div>
            <div class="quesiton" v-cloak>{{ current_question }}</div>
            <div class="text-center">
              <v-text-field
                class="text-field"
                id="textField"
                v-model="nextQuestion"
              >
              </v-text-field>
            </div>
            <v-progress-linear
              v-model="guage_process"
              color="light-green darken-1"
              height="25"
              rounded
            ></v-progress-linear>
            <div v-cloak>
              進捗：{{ current_question_counts }}/{{ question_counts }}
            </div>
          </v-col>
        </v-row>

        <!-- 時間ぎれ -->
        <v-row
          v-if="
            startFlag == true &&
            current_question_counts != question_counts &&
            sec == 0
          "
        >
          <v-col>
            <p class="clear TextRandomAnime">
              タイムアウト
            </p>
            <div>残念でした...</div>
            <v-btn
              @click="reload"
              color="#5f32b1"
              class="button mt-3"
              dark
              rounded
            >
              {{ reloadBtn }}
            </v-btn>
          </v-col>
        </v-row>

        <!-- クリア -->
        <v-row
          v-if="startFlag == true && current_question_counts == question_counts"
          @change="start"
        >
          <v-col>
            <div class="clear">
              クリア
            </div>
            <div>
              おめでとう！<br />
              今日から君はじゅげむマスターだ！
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'fa-twitter']" />
              <a
                href="https://twitter.com/intent/tweet?text=じゅげ〜むをクリアしたよ！🤗✨%0A&hashtags=じゅげむの覇者%0A&url=https://flamboyant-beaver-eb2250.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon
                  :icon="['fab', 'twitter']"
                />twitterで自慢する</a
              >
            </div>
            <v-btn
              @click="reload"
              color="#5f32b1"
              class="button mt-3 clearbtn"
              dark
              rounded
            >
              {{ reloadBtn }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "typing game",
      start_btn: "じゅげむる",
      subTitle: `45秒で寿限無を打ち切れるか？
              挑戦者はボタンをクリック！`,
      startFlag: "",
      current_question: "",
      questions: [
        "寿限無",
        "寿限無",
        "五劫のすりきれ",
        "海砂利水魚の水行末",
        "雲来末",
        "風来末",
        "食う寝るところに",
        "住むところ",
        "やぶらこうじの",
        "ぶらこうじ",
        "パイポ",
        "パイポ",
        "パイポの",
        "シューリンガン",
        "シューリンガンの",
        "グーリンダイ",
        "グーリンダイの",
        "ポンポコピーのポンポコナの",
        "長久命の長助",
      ],
      nextQuestion: "",
      current_question_counts: 0, //今何問目か
      question_counts: 0,
      guage_process: 0,
      reloadBtn: "もう一度じゅげむする",
      sec: 45,
    };
  },
  methods: {
    changeFlg() {
      this.startFlag = true;
      this.timer();
      this.$nextTick(() => document.getElementById("textField").focus()); //nextTick -> DOM更新後に実行
    },
    start() {
      this.$confetti.start();
    },
    reload() {
      location.reload();
    },
    timer() {
      setInterval(() => {
        if (this.sec > 0) {
          this.sec -= 1;
        } else {
          clearInterval;
        }
      }, 1000);
    },
  },
  mounted: function () {
    // DOMが作成された直後の処理(ページ読み込み時に実行)
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;
  },
  watch: {
    nextQuestion: function (e) {
      if (e == this.current_question) {
        this.questions.splice(0, 1);
        this.current_question = this.questions[0];
        this.nextQuestion = "";
        this.current_question_counts += 1;
        this.guage_process =
          (100 / this.question_counts) * this.current_question_counts;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Potta+One&display=swap");

* {
  font-family: "Potta One", cursive;
}

button {
  height: 3em !important;
  font-size: 2em !important;
}
@keyframes text-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.item {
  display: inline-block;
  min-width: 0.3rem;
  font-size: 5rem;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}

.text-field {
  input {
    text-align: center;
  }
}

.quesiton {
  font-size: 5rem;
}

.clear {
  font-size: 5rem;
}
.clearbtn {
  background-color: rgb(35, 175, 82) !important;
}
// マスタッシュ構文のチラつき防止
[v-cloak] {
  display: none;
}
</style>
