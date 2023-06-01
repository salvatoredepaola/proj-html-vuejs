<script >
import BaseHeader from './components/BaseHeader.vue';
import BaseMain from './components/BaseMain.vue';
import BaseFooter from './components/BaseFooter.vue';

import { store } from './data/store';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter,
  },
  data() {
    return {
      store,
    }
  },
  
}
</script>

<template>
  <BaseHeader/>
  <BaseMain/>
  <BaseFooter/>
</template>

<style lang="scss" scoped>

</style>