<template>
  <div class="section-divider">
    {{ data }}
  </div>
</template>

<script>
  export default {
    name: "section-divider",
    props: {
      data: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>
.section-divider {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 23px;
  color: #000000;
  margin-left: 10px;
}
</style>