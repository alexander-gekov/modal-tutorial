<template>
    <div
      class="absolute inset-0 bg-black bg-opacity-50"
    >
      <div
        class="flex items-start justify-center min-h-screen mt-24 text-center"
      >
        <div
          class="bg-white text-black rounded-lg text-center shadow-xl p-6 w-64"
          role="dialog"
          aria-modal="true"
        >
          <h2 class="text-lg font-bold">Overview of items:</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
          </ul>
          <div class="flex justify-center py-4 text-white">
              <button @click="$emit('close')">Close</button>
          </div>
        </div>
      </div>
    </div>
</template>