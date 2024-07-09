<template>
  

    <div class="xl:grid xl:grid-cols-2 justify-items-center gap-32 lg:px-32  w-full   ">
     
    
    
 

 <div class="md:flex md:flex-col-2  lg:px-10 md:px-44  ">
  <div class="bg-white lg:my-24 rounded-lg shadow-xl">
   <img class=" py-10  px-10  lg:h-[28rem]" src="../assets/qr.png">
   <div class="  lg:py-10  py-4 ml-28 md:ml-32 ">
    <img class="w-[10rem] " src="../assets/prompt.png">
  </div> 
  </div>
</div>
     <div class=" w-full  my-6 py- px-4 lg:px-16 rounded-lg  bg-white shadow-xl  ">
    
      <div class="text-center text-xl font-bold py-8 ">
        <label class="">Payment</label>
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
      </div>
      
      <div class="mb-5">
        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">address</label>
        <input type="address" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      </div>
      
      <div class="mb-5">
        <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PhoneNumber</label>
        <input type="phoneNumber" id="phoneNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
      
      </div>
      <div class="flex justify-end my-6 text-xl font-medium">
        $79/month 
      </div>
      
        <div>
          <!-- File upload section -->
          <div class="flex ">
            <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">คลิกเพื่ออัปโหลด</span> หรือลากรูปมาวาง</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG หรือ GIF (ขนาดสูงสุด 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
            </label>
            </div>
            <!-- Uploaded file section -->
            <div v-if="uploadedFile" class="mt-4 ">
              <p class="text-sm  text-gray-500 dark:text-gray-400">ไฟล์ที่อัปโหลด: </p><span class="text-sm">{{ uploadedFile.name }}</span>
              <!-- Additional elements to display uploaded file if needed -->
            </div>
          </div>
    
          <!-- Buttons section -->
          <div class="flex flex-col-2 gap-2 w-full  my-10">
            <div class="w-full">
              <button @click="onBuy" type="button" class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Buy
              </button>
            </div>
            <div class="w-64">
              <RouterLink to="/" @click="onCancel" type="button" class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cancel
              </RouterLink>
            </div>
          </div>
    
    </div>
    </div>
    
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { useToast } from "vue-toastification";
    import axios from 'axios';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    
    // Define ref for uploaded file
    const uploadedFile = ref(null);
    
    // Function to handle file upload
    const handleFileUpload = (event) => {
      const file = event.target.files[0]; // Get uploaded file from event
      uploadedFile.value = file; // Store uploaded file in ref
    
      // Additional logic can be added here
    };
    
    
    
    // Function for buy button click
    const onBuy = async () => {
      const toast = useToast();
      try {
        const formData = new FormData();
        formData.append("image", uploadedFile.value); // เปลี่ยน file เป็นตัวแปรที่เก็บไฟล์ที่ต้องการอัปโหลด
    
        const email = document.getElementById("email").value;
        formData.append("email", email);
    
        const address = document.getElementById("address").value;
        formData.append("address", address);
    
        const phoneNumber = document.getElementById("phoneNumber").value;
        formData.append("phoneNumber", phoneNumber);
    
    
        const token = localStorage.getItem('accessToken'); // กำหนดค่าของ token ก่อนใช้งาน
        localStorage.setItem('accessToken', token);
        const response = await axios.post(
          "http://localhost:8080/api/v1/users/upload", // แทน URL_API_UPLOAD ด้วย URL ของ API ที่ให้บริการการอัปโหลดไฟล์
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${token}`,
            },
          }
        );
    
        if (response.status !== 200) {
          throw new Error("Failed to upload file");
        }
    
        toast.success("Buy Success", {
          position: "top-right",
          timeout: 2000,
        });
        setTimeout(() => {
        router.push('/');
        }, 1000); 
      } catch (error) {
        console.error(error);
        toast.error("Buy Failed", {
          position: "top-right",
          timeout: 2000,
        });
      }
    };
    
    // Function for cancel button click
    const onCancel = () => {
      toast.warning("Cancel order", {
        position: "top-right",
        timeout: 2000,
      });
    };
    </script>
    