<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on">
          Draw
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-toolbar-title>Draw</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-5">Propose a draw?</v-card-text>
        <v-card-actions>
          <v-btn color="error" dark @click="dialog = false">NO</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success" dark @click="submit">YES</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    submit() {
      this.$emit("drawProposal", true);
      this.dialog = false;
    }
  }
};
</script>
