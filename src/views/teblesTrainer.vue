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
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>SelectClass</th>
                  <th>SelectDay</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in classUser" :key="item.id">
                  <td>
                    <p>{{ item.firstname}}</p>      
                  </td>
                  <td>
                    <p>{{ item.lastname}} </p>
                  </td>
                  <td>
                    <p>{{ item.SelectClass }}</p>
                  </td>
                  <td>
                    <p>{{ item.SelectDay }}</p>
                  </td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const userObject = JSON.parse(localStorage.getItem("userObj"))
const classUser = ref([]);
const fetchData = async () => {
  try {
    const token = localStorage.getItem("accessToken"); 
    const response = await axios.get(`http://localhost:8080/api/v1/users/datailClass/${userObject._id}`, {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })

    // ตรวจสอบการตอบกลับของ API
    if (response.status !== 200) {
      throw new Error('Failed to fetch data')
    }
    
    // เก็บข้อมูลที่ดึงมาในตัวแปรอื่นๆ ตามต้องการ
    classUser.value = response.data.data
    console.log(classUser.value)
    
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchData)
</script>

