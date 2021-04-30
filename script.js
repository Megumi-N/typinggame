new Vue({
  el: "#app",
  data: {
    startFlg: "",
    current_question: "",
    questions: ["apple", "banana", "chocolate", "donut", "espresso"],
    typeBox: "",
  },
  methods: {
    gameStart: function () {
      this.startFlg = true;
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
  },
  watch: {
    typeBox: function (e) {
      if (e == this.current_question) {
        this.questions.splice(0, 1); //配列の1つめを削除
        this.current_question = this.questions[0];
        this.typeBox = "";
      }
    },
  },
});
