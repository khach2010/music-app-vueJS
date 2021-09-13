<template>
  <h1>ABout Page</h1>
</template>

<script>
import DummyModule from '@/store/modules/dummy';

export default {
  created() {
    this.$store.registerModule(DummyModule);
  },
};
</script>
