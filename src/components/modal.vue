<template>
    <div>
      <!-- Overlay -->
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
        <!-- Modal -->
        <div class="relative bg-white p-8 max-w-lg rounded-lg shadow-lg">
          <!-- Close button -->
          <button class="absolute top-0 right-0 mr-4 mt-4 text-gray-500 hover:text-gray-700" @click="closeModal">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- Image -->
          <img :src="imageUrl" alt="Image" class="mx-auto mb-4 max-w-full max-h-full">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['imageUrl', 'isOpen'],
    methods: {
      closeModal() {
        // Emit event to close modal
        this.$emit('close');
      }
    }
  };
  </script>
  

  