export default {
    template: `
        <form @submit.prevent="add">
              <div class="border border-gray-200 text-black">
                  <input v-model="newAssignment" type="text" placeholder="Type a new task..." class="p-2">
                  <button type="submit" class="bg-white p-2">Add</button>
              </div>
        </form>
    `,

    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('addAssignment', this.newAssignment)
            this.newAssignment = ''
        }
    }
}