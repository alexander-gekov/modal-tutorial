<script setup lang="ts">
import { useModal } from './composables/useModal';
import { markRaw } from 'vue';
import ModalConfirm from './components/ModalConfirm.vue';
import ModalOverview from './components/ModalOverview.vue';


const modal = useModal();

const openConfirm = () => {
  modal.component.value = markRaw(ModalConfirm);
  modal.showModal();
};

const openOverview = () => {
  modal.component.value = markRaw(ModalOverview);
  modal.showModal();
};

</script>

<template>
      <div class="flex justify-center items-center min-h-screen">
        <Teleport to="#modal">
          <Transition>
            <component :is="modal.component.value" v-if="modal.show.value" @close="modal.hideModal"/>
          </Transition>
        </Teleport>
        <button @click="openConfirm">Open Confirm Modal</button>
        <span class="mx-4"></span>
        <button @click="openOverview">Open Overview Modal</button>
      </div>
      <div class="absolute top-20 bg-red-500 p-2 w-full left-0">This will make things ugly</div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>