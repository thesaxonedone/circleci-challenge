<template>
  <v-container>
    <v-row>
      {{msg}}
    </v-row>
    <v-row>
      <v-btn
        @click="msg = 'New Text!!'"
        elevation="6"
      >
        Click Me
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      msg: 'Original Text'
    }),
  }
</script>
