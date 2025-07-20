<script setup>
import { ref } from 'vue'
const icons = ref(['mdi-facebook'])
</script>
<template>
  <!--<img-->
  <!--  src="/util/negative-space-rt.svg"-->
  <!--  alt="JS Development Logo"-->
  <!--  class="position-absolute mt-1"-->
  <!--  style="width: 25px"-->
  <!--/>-->
  <div class="d-flex flex-column mt-0">
    <div class="bg-grey-lighten-4 px-4 py-10">
      <div class="d-flex w-100 align-center">
        <strong>Nassau Community Band</strong>
        <v-spacer></v-spacer>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          href="https://www.facebook.com/NassauCommunityBand/"
          target="_blank"
          density="comfortable"
          class="mx-4"
          size="x-large"
          variant="plain"
        ></v-btn>
      </div>
      <div class="d-flex justify-end">
        <v-spacer></v-spacer>
        <!--<a href="https://www.acbands.org" target="_blank" rel="noopener noreferrer"-->
        <!--  ><img-->
        <!--    src="/ACB-ProgramCredit-banner.png"-->
        <!--    alt="Association Concert Bands Logo"-->
        <!--    style="width: 300px"-->
        <!--/></a>-->
      </div>
    </div>

    <div class="px-4 py-2 bg-grey-lighten-2 d-flex justify-space-between w-100">
      <div>
        <span>©</span>
        {{ new Date().getFullYear() }} - Nassau Community Band
      </div>
      <div class="position-relative">
        <a
          href="https://jsdevelopment.io"
          target="_blank"
          class="text-grey-darken-3 developer_link"
        >
          <v-icon size="x-small" class="spin-cog mr-1">mdi-cog</v-icon>
          <span class="text-caption">Website developed by</span>
          <span class="">
            <!--<img-->
            <!--  src="/util/negative-space-rt.png"-->
            <!--  alt="JS Development Logo"-->
            <!--  class="position-absolute mt-0 animate__heartBeat"-->
            <!--  style="width: 20px; top: 5px; right: 95px"-->
            <!--/>-->
            <strong class="ml-5 mt-n1 text-caption font-weight-bold">JS Development</strong>
          </span></a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #4caf50;
  color: white;
}
.spin-cog {
  animation: spin 2s linear infinite;
}
@-moz-keyframes spin {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate__heartBeat {
  animation: heartBeat 10s infinite;
}
.developer_link {
  text-decoration-color: transparent;
  text-decoration: underline;
  transition-timing-function: ease-in-out;
}
.developer_link:hover {
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s !important;
  background-color: transparent;
  color: #41b783 !important;
  text-decoration-color: #41b783 !important;
}
</style>
