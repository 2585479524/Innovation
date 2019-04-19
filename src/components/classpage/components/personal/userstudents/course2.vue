<template id="list-item">
  <div class="zong">
    <div v-for="item in items" :key="item.id"></div>

    <tr>
      <i-button
        style="color:white;background-color:#3d6ea7"
        @click="toggle()"
        class="btn"
      >{{item.text}}</i-button>
    </tr>

    <td>
      <div v-show="isActive" class="item-desc">
        <h3>{{item.desc}}</h3>
      </div>
    </td>
  </div>
</template>
<script>
export default {
  template: "#list-item",
  props: ["item"],
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }
  },
  data() {
    return {
      isActive: false,
      items: []
    };
  }
};
</script>
<style scoped>
</style>