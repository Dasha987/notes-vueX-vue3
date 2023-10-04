<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in getNotes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <button
          class="note-btn"
          @click="this.$store.dispatch('noteDestroy', index)"
        >
          &#10005;
        </button>
      </div>
      <div v-if="note.tag != ''" class="note-footer">
        <ListTags isPreview :tags="note.tag" />
      </div>
    </div>
  </div>
</template>

<script>
import ListTags from '@/components/UI/ListTags.vue'
export default {
  components: {
    ListTags
  },
  computed: {
    getNotes() {
      return this.$store.getters.getNotes
    }
  },
  methods: {
    initialiseNodes() {
      this.$store.dispatch('initialiseNodes')
    }
  },
  created() {
    this.initialiseNodes()
  }
}
</script>
