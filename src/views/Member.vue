<script>
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { useToast } from "vue-toastification";
import { ref } from 'vue';


export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    faBlackTie,
    ChevronDownIcon,
   
  },
  setup() {
    const toast = useToast();
    const numbers = ref(["male", "female"]);
    const selectedNumber = ref(null);

    return {
      toast,
      numbers,
      selectedNumber,

    };
  },

  name: 'register',
  data() {
    return {
      Result: {},
      users: {
        email: '',
        address: '',
        username: '',
        password: '',
        id_card: '',
        firstname: '',
        lastname: '',
        phone_number: '',
        sex: ''
      }
    }
  },

  methods: {
    onbuy() {
      const res = axios.post("http://localhost:8080/api/v1/users/signup", this.users)
        .then(
          ({ data }) => {
            console.log(data.success);
            try {
              if (data.success === true) {
                this.$router.push('/login')
                this.toast.success("Register Success", {
                  position: "top-right",
                  timeout: 2000,
                });
                // if (data.user.isMember === true){

                // }
              }
            } catch (err) {
              console.log(err);
            }

          });
    },
    oncancle() {
      this.toast.warning("Cancle", {
        position: "top-right",
        timeout: 2000,
      })
    },

    methods: {

    }

  }
}

</script>


<template>
 


<div class="xl:grid xl:grid-cols-2 justify-items-center lg:px-20 w-full   shadow-xl">
 

    <div>
      <img class=" lg:h-[48rem]" src="../assets/bodypump1.png">
    </div>

    <div class=" max-w-xl  lg:py-10  ">

    <div class="  my-auto  rounded-lg   bg-white lg:px-16  px-4 ">
      <form @submit.prevent="onbuy" class="  my-auto  rounded-lg rounded-l-none py-8" action="#">
        <div class="flex justify-center ">
        <p class=" lg:my-4  text-xl font-bold">Member Ship</p>
        </div>
        <div>
          <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="text" id="small-input" v-model="users.email"
            class="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div>
          <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
          <input type="text" id="small-input" v-model="users.address"
            class="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="grid md:grid-cols-2 md:gap-6 mb-2">
          <div>
            <label for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" id="small-input" v-model="users.username"
              class="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div>
            <label for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="text" id="small-input" v-model="users.password"
              class="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
        </div>
        <div>
          <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID card</label>
          <input type="text" id="small-input" v-model="users.id_card"
            class="block w-full mb-2 p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>


        <div class="grid md:grid-cols-2 md:gap-6 mb-2">
          <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
              name</label>
            <input type="text" id="small-input" v-model="users.firstname"
              class="block w-full  p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
              name</label>
            <input type="text" id="small-input" v-model="users.lastname"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
        </div>

        <div class="grid md:grid-cols md:gap-3">
          <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
              number</label>
            <input type="text" id="small-input" v-model="users.phone_number"
              class="block w-full p-2 text-gray-900 border border-gray-300 rounded-md bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          </div>



          <div class="flex justify-between ">
            <div id="dropdownBottom"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBottomButton">
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <label for="selectedNumber" class="mt-1 block text-sm font-medium text-gray-700 ">Gender</label>
          <select v-model="users.sex" id="selectedNumber"
            class="mt-1 mb-3 block w-22 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option v-for="number in numbers" :key="number" :value="number" class="text-gray-900">
              {{ number }}
            </option>
          </select>
        </div>

        <div class="grid lg:grid-cols-2   gap-2   lg:mt-8">
          <div class="w-full  ">
            <button type="submit"
              class="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
          </div>
          <div class="w-full">
            <RouterLink to="/" @click="oncancle" type="submit"
              class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</RouterLink>
          </div>
        </div>
      </form>

    </div>
  </div>

</div>





</template>
