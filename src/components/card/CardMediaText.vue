<template lang="pug">
  .full-size.flex
    .flex.flex-column(style="padding: 12px;")
      .title-media
        h2 {{text}}
      .subtitle-media.flex
        strong {{desc}}
</template>

<script>
export default {
  name: 'HCardMediaText',
  props: {
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}
</style>
