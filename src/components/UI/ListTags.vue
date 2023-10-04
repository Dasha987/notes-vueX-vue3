<template>
  <div class="tags-list">
    <div
      :class="{ isPreview: isPreview }"
      class="tag-item"
      v-for="(tag, index) in tags"
      :key="index"
      @click="handleStore"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    },
    isPreview: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getTagsActive() {
      return this.$store.getters.getTagsActive
    }
  },
  methods: {
    handleStore(event) {
      event.target.classList.toggle('isActive')
      this.$store.dispatch('tagsActive', event.srcElement.innerText)
    }
  }
}
</script>
