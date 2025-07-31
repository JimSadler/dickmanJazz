<script setup></script>
<template>
  <div>
    <div class="page-content">
      <!-- body -->
      <div class="lm-page-body">
        <slot name="page-heading" />
        <slot name="page-body" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
  overflow-y: hidden !important;
  background-color: #333;
}
</style>
