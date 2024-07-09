<!-- <script>

import { useToast } from 'vue-toast-notification';

export default {
 setup(){
   const toast = useToast();
   return {toast}
 },
 methods: {
   triggerToast(){
     this.toast.success('You did it!');
   }
 }
}
</script>

<template>
 <div>
   <button class="green-button" @click="triggerToast">
     See a notification
   </button>
 </div>
</template> -->
<script>
import { useToast } from "vue-toastification";

export default {
 setup() {
   const toast = useToast();
   return { toast }
 },

 methods: {
   triggerToast() {
     this.toast("Hi from LogRocket", {
       position: "top-right",
       timeout: 5000,
       closeOnClick: true,
       pauseOnFocusLoss: true,
       pauseOnHover: true,
       draggable: true,
       draggablePercent: 0.6,
       showCloseButtonOnHover: false,
       hideProgressBar: true,
       closeButton: "button",
       icon: "fas fa-rocket",
       rtl: false
     });
   }
 }
}
</script>

<template>
 <div>
   <button @click="triggerToast" class="green-button">
     See a notification
   </button>
 </div>
</template>
