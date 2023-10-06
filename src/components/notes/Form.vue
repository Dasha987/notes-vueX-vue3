<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="handleStore">
      <textarea required v-model="title" placeholder="Введите новую заметку" />
      <ListTags :tags="getTags" />
      <button class="btn btnPrimary" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
import { computed } from 'vue'
import ListTags from '@/components/UI/ListTags.vue'
export default {
  components: {
    ListTags
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    getTags() {
      return this.$store.getters.getTags
    }
  },
  methods: {
    handleStore() {
      this.$store.dispatch('noteStore', this.title)
      this.title = ''
      this.cleanActiveTags()
    },
    cleanActiveTags() {
      document
        .querySelectorAll('div.tag-item.isActive')
        .forEach(elem => elem.classList.toggle('isActive'))
      this.$store.dispatch('tagsActiveClear')
    }
  }
}
</script>
