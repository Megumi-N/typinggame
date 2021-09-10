<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Typing Game
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn v-if="startFlag != true" @click="changeFlg">start</v-btn>
        <v-row
          v-if="startFlag == true && current_question_counts < question_counts"
        >
          <v-col>
            <div>{{ current_question }}</div>
            <div class="text-center">
              <v-text-field
                class="text-field"
                id="textField"
                v-model="nextQuestion"
              >
              </v-text-field>
            </div>
            <v-progress-linear
              v-model="power"
              color="amber"
              height="25"
            ></v-progress-linear>
            <div>{{ current_question_counts }}/{{ question_counts }}</div>
          </v-col>
        </v-row>
        <v-row
          v-if="startFlag == true && current_question_counts == question_counts"
          ><v-col>クリア</v-col></v-row
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      startFlag: "",
      current_question: "",
      questions: [
        "雨ニモマケズ",
        "風ニモマケズ",
        "雪ニモ夏ノ暑サニモマケヌ",
        "丈夫ナカラダヲモチ",
        "慾ハナク",
        "決シテ瞋ラズ",
        "イツモシヅカニワラッテヰル",
        "一日ニ玄米四合ト",
        "味噌ト少シノ野菜ヲタベ",
        "アラユルコトヲ",
        "ジブンヲカンジョウニ入レズニ",
        "ヨクミキキシワカリ",
        "ソシテワスレズ",
        "野原ノ松ノ林ノ䕃ノ",
        "小サナ萱ブキノ小屋ニヰテ",
        "東ニ病気ノコドモアレバ",
        "行ッテ看病シテヤリ",
        "西ニツカレタ母アレバ",
        "行ッテソノ稲ノ束ヲ負ヒ",
        "南ニ死ニサウナ人アレバ",
        "行ッテコハガラナクテモイヽトイヒ",
        "北ニケンクヮヤソショウガアレバ",
        "ツマラナイカラヤメロトイヒ",
        "ヒデリノトキハナミダヲナガシ",
        "サムサノナツハオロオロアルキ",
        "ミンナニデクノボートヨバレ",
        "ホメラレモセズ",
        "クニモサレズ",
        "サウイフモノニ",
        "ワタシハナリタイ",
      ],
      nextQuestion: "",
      current_question_counts: 0, //今何問目か
      question_counts: 0,
      power: 0,
    };
  },
  methods: {
    changeFlg() {
      this.startFlag = true;
      this.$nextTick(() => document.getElementById("textField").focus()); //nextTick -> DOM更新後に実行
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
        this.power =
          (100 / this.question_counts) * this.current_question_counts;
      }
    },
  },
};
</script>

<style lang="scss">
.text-field {
  input {
    text-align: center;
  }
}
</style>
