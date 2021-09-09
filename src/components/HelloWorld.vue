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
        <v-row v-if="startFlag == true">
          <v-col>
            <div>apple</div>
            <div>
              <v-text-field hide-details="auto"></v-text-field>
            </div>
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
      startFlag: "",
      questions: ["apple", "orange"],
    };
  },
  methods: {
    changeFlg() {
      this.startFlag = true;
    },
  },
};
</script>
