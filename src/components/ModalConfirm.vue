<template>
    <div
      class="absolute  inset-0 overflow-y-auto bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen mt-24 text-center"
      >
        <div
          class="bg-white text-black rounded-lg text-center shadow-xl p-6 w-64"
          role="dialog"
          aria-modal="true"
        >
          <h3>Do you confirm?</h3>
          <div class="flex justify-center py-4 text-white">
                <!-- We will handle these emits later -->
	            <button @click="$emit('close')" class="border border-black bg-white text-black mr-4">No</button>
              <button @click="$emit('close')">Yes</button>
          </div>
        </div>
      </div>
    </div>
</template>
