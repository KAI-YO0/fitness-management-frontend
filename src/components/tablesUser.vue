<template>
  <div class="content">
    <main>
      <div class="header">
        <div class="left">
          <h1>Manage User</h1>
        </div>
      </div>

      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>USER</h3>
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
                  <div class="col-span-2 sm:col-span-1">
                    <select 
                      v-model="selectedRole"
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-50px p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                    
                    <option value="" disabled selected>{{ user.role }}</option>
                    <option value="member">Member</option>
                    <option value="trainer">Trainer</option>
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                    </select>
                  </div>
                </td>


                <td @click="getIdedit(user._id)">
                  <button
                    type="submit"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-20"
                    click="getIdedit(user._id)"
                  >
                    Save
                  </button>
                </td>
                <td @click="deleteUser(user._id)">
                  <button
                    type="button"
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-20"
                  >
                    Delete
                  </button>
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
import popup from "@/components/popupRegister.vue";
import { useToast } from "vue-toastification";
export default {
  setup() {
    const toast = useToast();
    return { toast };
  },

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
    deleteUser(_id) {
      if (!_id) {
        console.error("User ID is undefined.");
        return;
      }

      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .delete(`http://localhost:8080/api/v1/admins/deleteUser/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("User deleted successfully:", response.data);
          // เมื่อลบผู้ใช้สำเร็จ คุณอาจต้องการโหลดข้อมูลผู้ใช้อื่น ๆ ใหม่
          this.fetchUsers(); // เรียกใช้ฟังก์ชัน fetchUsers เพื่อโหลดข้อมูลผู้ใช้อื่น ๆ ใหม่
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    },

    getIdedit(_id) {
      if (!_id) {
        console.error("User ID is undefined.");
        return;
      }

      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      // กำหนดค่า this.user.role เป็นค่าเริ่มต้น
      this.user = {};

      axios
        .get(`http://localhost:8080/api/v1/admins/editUser/${_id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          const userData = response.data; // ข้อมูลผู้ใช้ที่ได้จาก API /editUser/${_id}

          // อัปเดตข้อมูลผู้ใช้โดยใช้ข้อมูลที่ได้จาก API /editUser/${_id} และ this.user.role
          const updateResponse = await axios.put(
            `http://localhost:8080/api/v1/admins/updateUser/${_id}`,
            { role: this.selectedRole },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
            this.toast.success("Save Success", {
              position: "top-right",
              timeout: 2000,
            })
          );

          // ตรวจสอบว่าอัปเดตสำเร็จหรือไม่
          console.log("Update user response:", updateResponse.data);
        })
        .catch((error) => {
          console.error("Error updating user:", error);
        });
    },
  },
};
</script>
