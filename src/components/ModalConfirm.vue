<template>
    <div
      class="absolute  inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="bg-white text-black rounded-lg text-center overflow-hidden shadow-xl p-8 w-1/2"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <h3>Do you confirm?</h3>
          <div class="flex justify-center py-4 text-white">
	            <button @click="$emit('close')" class="border border-black bg-white text-black mr-4">No</button>
              <button @click="$emit('close')">Yes</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'ModalConfirm',
});
</script>