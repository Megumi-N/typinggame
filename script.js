new Vue({
  el: "#app",
  data: {
    startFlg: "",
    current_question: "",
    questions: ["apple", "banana", "chocolate", "donut", "espresso"],
    typeBox: "",
    current_question_counts: 0,
    question_counts: 0,
  },
  methods: {
    gameStart: function () {
      this.startFlg = true;
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;
  },
  watch: {
    typeBox: function (e) {
      if (e == this.current_question) {
        this.questions.splice(0, 1); //配列の1つめを削除
        this.current_question = this.questions[0];
        this.typeBox = "";
        this.current_question_counts = this.current_question_counts + 1;
      }
    },
  },
});
