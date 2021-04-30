new Vue({
  el: "#app",
  data: {
    startFlg: "",
    current_question: "",
    questions: ["apple", "banana", "chocolate", "donut", "espresso"],
  },
  methods: {
    gameStart: function () {
      this.startFlg = true;
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
  },
});
