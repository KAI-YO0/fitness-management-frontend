
 <template>

  <Disclosure as="nav" class="bg-black " v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center ml-20 sm:mx-1 sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto rounded-full" src="../assets/46.png" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-6 sm:block ">
            <div class="flex space-x-4">
              <RouterLink  v-for="item in navigation" :key="item.name" :to="item.href"
                :class="[item.current  ?  ' text-white hover:bg-gray-700 hover:text-white' : ' text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                
                :aria-current="item.current ? 'page' : undefined">
                <div :class="(item.name === 'Login' && userObject) || (item.name === 'Personal trainer' && !userObject) || (item.name === 'Member ship' && userObject) ? 'hidden' : 'block'"> 
                    {{ item.name }}
                </div>         
              </RouterLink>

            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         <div class="text-white px-2"> {{ userObject?.firstname }} {{ userObject?.lastname }}</div>
         <button type="button" @click="toggleModal" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    <span class="absolute -inset-1.5" />
    <span an class="sr-only">View notifications</span>
    <BellIcon class="h-6 w-6 " aria-hidden="true" />
    <span v-if="notificationCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2">{{ notificationCount }}</span>
  </button>
  <!-- โค้ด HTML เดิมของคุณ -->

  <!-- โมดอล -->
  <div v-if="showModal" class="fixed inset-0 overflow-y-auto">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- โมดอล -->
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <!-- โมดอล -->

      <!-- เนื้อหาของโมดอล -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <!-- ไอคอนแจ้งเตือน -->
              <BellIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
              <!-- ไอคอนแจ้งเตือน -->
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                แจ้งเตือน
              </h3>
              <div class="mt-2 flex flex-col">
                <div v-for="(item, index) in classUser" :key="index" class="text-sm text-gray-500">
                    <p>
                      {{ item.firstname}}  {{ item.lastname}}  {{ item.SelectClass }}   {{ item.SelectDay }}
                   </p>
                    <div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" @click="toggleModal" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            ปิด
          </button>
          <RouterLink to="/tablesTrainer">
            <button type="button" @click="toggleModal" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                ดูเพิ่มเติม
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <MenuButton
                class="relative flex rounded-full text-sm focus:outline-none">
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <svg class="h-6 w-7 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg>
                <div>

              </div>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <!-- <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your
                  Profile</a>
                </MenuItem> -->
                
                <MenuItem v-slot="{ active }">
                <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" @click="logout (hasToken, $router)">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
          :aria-current="item.current ? 'page' : undefined">
          <div :class="item.name === 'Login' && userObject ? 'hidden' : 'block'  " > {{ item.name }}</div>
          

        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
  
  


</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import { useRoute ,useRouter } from 'vue-router'
import axios from 'axios'

const userObject = JSON.parse(localStorage.getItem("userObj"))

const classUser = ref([]) // สร้าง ref สำหรับเก็บข้อมูล
// const responseData = ref({
//   success: true,
//   message: 'get detail Booking',
//   data: [
    
//   ]
// })

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



const open = ref(true)
const navigation = [
{ name: 'About', href: '/', current: false },
{ name: 'Personal trainer', href: '/trainer', current: false },
  { name: 'Member ship', href: '/member', current: true },
  { name: 'Login' , href: '/login' , current: false},
  
]
onMounted(() => {
  console.log(useRoute);
})
const hasToken = ref(localStorage.getItem('accessToken') !== null)
const router = useRouter()
const logout = (hasToken, router) => {
  console.log(hasToken)
  localStorage.clear();
  router.push('/login') // Redirect to the home page after logout
}


const notificationCount = ref()
const showModal = ref(false)
const toggleModal = () => {
  showModal.value = !showModal.value
  // เมื่อโมดอลถูกเปิดให้รีเซ็ตจำนวนการแจ้งเตือนเป็นศูนย์
  if (showModal.value) {
    notificationCount.value = 0;
    localStorage.setItem('notificationCount', notificationCount.value);
    clickCount.value++;
  }
}

const incrementNotification = () => {
  notificationCount.value++
}
const onBuy = () => {
  toggleModal();
  incrementNotification();
};

// เรียกใช้ฟังก์ชันนี้เมื่อต้องการเพิ่มการแจ้งเตือน
// ยกตัวอย่างเช่นเมื่อมีการคลิกที่ปุ่มเพื่อเรียกใช้โมดอล
incrementNotification()

</script>