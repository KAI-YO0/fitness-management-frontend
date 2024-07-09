<template>
    <div class="content">
      <main>
        <div class="bottom-data">
          <div class="orders">
            <div class="header">
              <i class="bx bx-receipt"></i>
              <h3>USER</h3>
              <i class="bx bx-filter"></i>
              <i class="bx bx-search"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    <p>{{ user.username }}</p>
                  </td>
                  <td>
                    <p>{{ user.firstname }}</p>
                  </td>
                  <td>
                    <p>{{ user.lastname }}</p>
                  </td>
                  <td>
                    <p>{{ user.sex }}</p>
                  </td>
                  <td>{{ user.email }}</td>
                  <td>
                    <span>{{ user.phone_number }}</span>
                  </td>
                  <td>
                    <span class="status completed">{{ user.role }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
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
          .get("http://localhost:8080/api/v1/admins/getAllUsers", {
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
    },
  };
  </script>
  