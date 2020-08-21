<template>
  <button
    class="neon-btn"
    :class="size ? 'neon-btn-' + size : ''"
    :style="styleObj"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VueNeonBtn",
  props: {
    // 按钮大小
    size: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["", "medium", "small", "mini"].indexOf(value) !== -1;
      },
      default: "",
    },
    // 颜色
    color: {
      type: String,
      default: "#409eff",
    },
  },
  data() {
    return {
      isHover: false, // 是否是hover状态
      classObj: {
        "neon-btn-medium": this.size === "medium",
        "neon-btn-small": this.size === "small",
        "neon-btn-mini": this.size === "mini",
      },
    };
  },
  computed: {
    styleObj() {
      return {
        color: this.isHover ? "#fff" : this.color,
        "background-color": this.isHover ? this.color : "transparent",
        "box-shadow": this.isHover
          ? `10px 10px 99px 6px ${this.color}`
          : "none",
      };
    },
  },
};
</script>

<style scoped>
.neon-btn {
  border: 1px solid;
  text-transform: uppercase;
  white-space: nowrap;
  transition: 0.1s;
  font-size: 14px;
  padding: 12px 20px;
  font-weight: 400;
  cursor: pointer;
  outline: none;
}
.neon-btn-medium {
  padding: 10px 20px;
}
.neon-btn-small {
  padding: 9px 20px;
  font-size: 12px;
}
.neon-btn-mini {
  padding: 7px 20px;
  font-size: 12px;
}
</style>
