<script>
import Signin from '@/components/Signin.vue';
import Nav from '@/components/Nav.vue';
import { RouterLink } from 'vue-router';
import { useToast } from "vue-toastification";
import axios from 'axios';
import { Result } from 'postcss';

export default {

    setup() {
        const toast = useToast();
        return { toast }
    },

    name: 'Login',
    data() {
        return {
            Result: {},
            users: {
                username: '',
                password: ''
            }
        }

    },

    methods: {
        onbuy() {
            const res = axios.post("http://localhost:8080/api/v1/users/login", this.users)
                .then(
                    ({ data }) => {
                        console.log(data.success);
                        try {
                            if (data.success === true) {

                                const token = data.token; // กำหนดค่า token จาก response
                               
                                localStorage.setItem('accessToken', token);
                                localStorage.setItem('userObj', JSON.stringify(data.user));
                               
                                console.log(token)
                                
                                // console.log("user" ,user)
                                this.toast.success("Login Success", {
                                    position: "top-right",
                                    timeout: 2000,
                                });
                                console.log(data.user.isAdmin);
                                if (data.user.role === "admin") {
                                    this.$router.push('/admin/dashboard')
                                }
                                if (data.user.role === "member") {
                                    this.$router.push('/')
                                }
                            } else {
                                this.$router.push('/login')
                                this.toast.error("Login failes", {
                                    position: "top-right",
                                    timeout: 2000,
                                });
                            }
                        } catch (err) {
                            console.log(err);
                        }
                    }
                )

        },


    }
}

</script>

<template>
    <div class=" w-full  bg-center  ">
        <div>
            <img class="lg:absolute h-screen w-full brightness-50  " src="../assets/44.jpeg">
        </div>

        <div class="lg:flex lg:justify-end w-full lg:pr-80   ">
            <div class="relative lg:pt-44 lg:w-96">
                <div
                    class="  p-6 space-y-2 sm:p-8  bg-white rounded-lg shadow-xl dark:bg-gray-800">
                    <div class="flex justify-center">
                        <img class="w-24 rounded-full" src="../assets/46.png" alt="">
                        <h2 class=" text-2xl font-bold text-gray-900 dark:text-white">
                        </h2>
                    </div>
                    <form @submit.prevent="onbuy" class="mt-8 space-y-6 max-w-4xl" action="#">
                        <div>
                            <label for="username"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="username" id="username" v-model="users.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="username" required>
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                v-model="users.password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
                                    class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                    required>
                            </div>
                            <div class="ms-3 text-sm">
                                <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">I agree to the terms and conditions</label>
                            </div>
                            <!-- <a href="#" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                                class="ms-auto text-sm font-medium text-black hover:underline dark:text-blue-500">Lost
                                Password?</a> -->
                        </div>

                        <button type="submit"
                            class="w-full  px-5 py-3 mt-5 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                            to your account</button>
                        <div class="text-sm font-medium text-gray-900 dark:text-white">

                        </div>
                    </form>
                </div>

            </div>

        </div>
    </div>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Sign in to our platform
                </h3>
                <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
</template>
