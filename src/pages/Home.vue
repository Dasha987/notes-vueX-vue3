<template>
  <div>
    <Form />
    <ListNotes />
  </div>
</template>

<script>
import Form from '@/components/notes/Form.vue'
import ListNotes from '@/components/notes/ListNotes.vue'

export default {
  components: {
    Form,
    ListNotes
  },
  unmounted() {
    this.$store.dispatch('tagsActiveClear')
  }
}
</script>
