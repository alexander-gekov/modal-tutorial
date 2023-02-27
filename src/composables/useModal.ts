import { ref } from 'vue'

const component = ref();
const show = ref(false);

export function useModal() {
    return {
        component,
        show,
        showModal: () => show.value = true,
        hideModal: () => show.value = false,
    }
}