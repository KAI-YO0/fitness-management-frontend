<!-- <template>
  <Nav class="bg-black fixed w-full z-50 top-0 "></Nav>
    <div class="py-10 mr-40">
        <div class="content">
      <main class="">
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Nav from "@/components/Nav.vue";

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
 -->
 <template>
  <Nav class="bg-black fixed w-full z-50 top-0 "></Nav>
  <div class="py-24 mx-auto max-w-screen-xl ">
    <div :class="getTableContainerClass">
      
        <div class="bottom-data">
          <div class="orders">
            <div class="header flex items-center justify-between bg-black text-white rounded-t-lg px-4 py-2">
              <div class="flex items-center">
                <i class="bx bx-receipt text-2xl"></i>
                <h3 class="ml-2 text-xl font-semibold">ReserveClass</h3>
              </div>
              <div class="flex items-center space-x-2">
                <i class="bx bx-filter text-lg"></i>
                <i class="bx bx-search text-lg"></i>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="table-auto w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="px-4 py-2 text-center">Firstname</th>
                    <th class="px-4 py-2 text-center">Lastname</th>
                    <th class="px-4 py-2 text-center">SelectClass</th>
                    <th class="px-4 py-2 text-center">SelectDay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in classUser" :key="item.id" class="border-b">
                    <td class="px-4 py-2 text-center">{{ item.firstname }}</td>
                    <td class="px-4 py-2 text-center">{{ item.lastname }}</td>
                    <td class="px-4 py-2 text-center">{{ item.SelectClass }}</td>
                    <td class="px-4 py-2 text-center">{{ item.SelectDay }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    
    </div>
  </div>
  
 
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Nav from "@/components/Nav.vue";

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

const getTableContainerClass = () => {
  return window.innerWidth >= 1024 ? 'content flex justify-center' : 'content';
}
</script>

<style scoped>
  .header {
    border-bottom: 1px solid #e2e8f0;
  }

  .header > * {
    padding: 0.5rem;
  }

  .table {
    border-collapse: collapse;
  }

  .table th,
  .table td {
    border: 1px solid #e2e8f0;
  }

  @media (max-width: 375px) {
    .table th,
    .table td {
      padding-left: 10px;
    }
  }
</style>





