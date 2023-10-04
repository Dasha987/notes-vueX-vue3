import { createStore } from 'vuex'

export const store = createStore({
    state: {
        notes: [
            {
                title: "Покормить кита",
                tag: ["дом"]
            },
            {
                title: "Изучить Vue3",
                tag: ["работа", "дом"]
            },
            {
                title: "Улыбнуться",
                tag: []
            }
        ],
        tagsActive: [],
        tags: ['дом', 'работа', 'путешествия'],
    },
    getters: {
        getNotes(state) {
            return state.notes
        },
        getTagsActive(state) {
            return state.tagsActive
        },
        getTags(state) {
            return state.tags
        }
    },
    mutations: {
        initialiseNodes(state, localNotes) {
            state.notes = localNotes
        },
        setNotes(state, notes) {
            state.notes = notes
        },
        setTagsActive(state, tagsActive) {
            state.tagsActive = tagsActive
        }
    },
    actions: {
        noteDestroy({ commit, state }, index) {
            const notes = [...state.notes]
            notes.splice(index, 1)
            commit('setNotes', notes)
        },
        noteStore({ commit, state }, title) {
            const notes = [...state.notes]
            const tagsActive = [...state.tagsActive]
            const note = {
                title: title,
                tag: tagsActive
            }
            notes.push(note)
            commit('setNotes', notes)
        },
        tagsActive({ commit, state }, value) {
            let tagsActive = [...state.tagsActive];
            if (tagsActive.includes(value)) {
                tagsActive = tagsActive.filter(elem => elem != value)
            } else {
                tagsActive.push(value)
            }
            commit('setTagsActive', tagsActive)
        },
        tagsActiveClear({ commit }) {
            commit('setTagsActive', [])
        },
        initialiseNodes({ commit }) {
            const localNotes = JSON.parse(localStorage.getItem('notes'))
            commit('initialiseNodes', localNotes)
        }
    },
})

store.subscribe((mutation, state) => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
});