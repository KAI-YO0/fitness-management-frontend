<template>
    <div class="content">
      <main>
        <div class="bottom-data">
          <div class="orders">
            <div class="header">
              <i class="bx bx-receipt"></i>
              <h3>Receipt</h3>
             
            </div>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Firstname</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    <p>{{ user.email}}</p>
                  </td>
                  <td>
                    <p>{{ user.address }}</p>
                  </td>
                  <td>
                    <p>{{ user.firstname }}</p>
                  </td>
                  <td>
                    <button @click="isopen(user.imageURL)"> <img  :src="user.imageURL" alt="Receipt Image"   class="" /></button>
                  </td>
             
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
    

    <div v-if="openModal" class="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
        <!-- Modal -->
        <div class="relative bg-white p-8 max-w-[540px] max-h-[640px] overflow-y-auto rounded-lg shadow-lg">
          <!-- Close button -->
          <button class="absolute top-0 right-0 mr-4 mt-4  text-gray-500 hover:text-gray-700" @click="closeModal">
            <svg class="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <!-- Image -->
          <img :src="imageurl" alt="Image" class="mx-auto mb-4 max-w-full max-h-full">
        </div>
      </div>

    </template>
  
  <script>
  import axios from "axios";
  import popup from '@/components/popupRegister.vue';
 

  export default {
    components: {
      popup,
    
    },
    data() {
      return {
        users: [],
        imageurl: '',
        openModal: false,
      };
    },
    mounted() {
      this.fetchUsers();

    },
    methods: {
      fetchUsers() {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          console.error("Token not found.");
          return;
        }
  
        axios
          .get("http://localhost:8080/api/v1/admins/Getreceipt", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            this.users = response.data.data; // สมมติว่า API ส่งกลับข้อมูลผู้ใช้ในรูปแบบ { users: [...] }
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      },

      isopen:function (image) {
        this.openModal = true
        this.imageurl = image
        console.log (image)

      },
      closeModal(){
        this.openModal = false
      },
    },
  };
  </script>
  