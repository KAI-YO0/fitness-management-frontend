<script setup>
import { RouterLink } from "vue-router";

import Nav from "@/components/Nav.vue";
import { ref } from "vue";
import Swal from "sweetalert2";

import { useRouter } from "vue-router";

// const hasToken = ref(localStorage.getItem('accessToken') !== null)

// const logout = (hasToken, router) => {
//   console.log(hasToken)
//   localStorage.clear();
//   router.push('/login') // Redirect to the home page after logout
// };

// const token = ref(localStorage.getItem("accessToken"));

// const showAlert = () => {
//   // Check if 'token' exists
//   if (token.value) {
//     console.log(token.value);

//     // Use the router object to navigate
//     const router = useRouter();
// console.log(router); // ตรวจสอบว่า router ถูกกำหนดค่าหรือไม่
// router.push('/classes');

//   } else {
//     // Show a SweetAlert modal in case there's no 'token'
//     Swal.fire({
//       title: "กรุณาเข้าสู่ระบบ",
//       text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
//       icon: "error",
//     });
//   }
// };

// onMounted(() => {
//   // Do something after the component is mounted
// });

const tokenRef = ref(localStorage.getItem("accessToken"));
const router = useRouter();

const handleLinkClick1 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes");
   
  }
};

const handleLinkClick2 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes2");
  }
};

const handleLinkClick3 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes3");
  }
};

const handleLinkClick4 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes4");
  }
};

const handleLinkClick5 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes5");
  }
};

const handleLinkClick6 = (event) => {
  // Check if 'token' exists
  const tokenValue = tokenRef.value;

  if (!tokenValue) {
    // Prevent the default navigation
    event.preventDefault();

    // Show a SweetAlert modal in case there's no 'token'
    Swal.fire({
      title: "กรุณาเข้าสู่ระบบ",
      text: "คุณต้องเข้าสู่ระบบเพื่อทำการจอง",
      icon: "error",
    });
  } else {
    // Navigate to the '/Classes' route
    router.push("/Classes6");
  }
};
</script>

<template>
  <div id="test1"></div>
  <Nav class="bg-black fixed w-full z-50 top-0 "></Nav>

  <div class="about">
    <section class="flex py-10 sm:py-10 bg-black dark:bg-gray-900">
      <!-- <div class="absolute   text-white  bg-[#EF8964] h-[88px] w-[146px] right-0 mr-[295px] mt-8  rounded-xl">
                <div class="relative">
                    <div class="absolute bg-[#EFA082] rounded-full px-1 py-1 ml-6 mt-3  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_151_131)">
                                <path
                                    d="M14.8234 4.7254C14.6138 4.47501 14.2403 4.44209 13.9899 4.65089L12.349 6.02935L11.5943 4.15964C11.5675 4.08946 11.5267 4.03054 11.4799 3.97856C11.3257 3.63546 11.058 3.34088 10.6889 3.17019C10.5286 3.09742 10.3631 3.05843 10.1977 3.03937C10.1613 3.02031 10.1283 2.99518 10.0868 2.98218L7.19901 2.17729C7.03699 2.1331 6.87411 2.16169 6.74068 2.23967C6.58213 2.29339 6.4461 2.40862 6.38112 2.57584L5.29378 5.37174C5.17594 5.67585 5.3267 6.01895 5.63168 6.13852C5.93492 6.25635 6.27888 6.10473 6.39758 5.79975L7.31598 3.43878L8.63119 3.80441C8.59913 3.85639 8.56447 3.90491 8.53848 3.96036L6.85245 7.61488C6.82819 7.6686 6.81519 7.72318 6.79786 7.77863L4.7488 11.2139L1.31955 12.3611C0.931399 12.6513 0.84909 13.198 1.13587 13.5862C1.42439 13.9752 1.97282 14.0575 2.36011 13.7707L5.86907 12.5621C5.97651 12.4841 6.05448 12.3819 6.1134 12.2718C6.15759 12.225 6.20784 12.1878 6.24163 12.1297L7.46327 10.0815L9.63189 11.9296L7.31165 14.5444C6.99194 14.9049 7.024 15.4602 7.38616 15.7791C7.74745 16.1005 8.30108 16.0667 8.62252 15.7046L11.5181 12.4425C11.6082 12.342 11.6619 12.2259 11.6983 12.1046C11.7199 12.0388 11.7199 11.9703 11.7251 11.9019C11.7251 11.8672 11.7381 11.836 11.7355 11.804C11.7277 11.5648 11.6307 11.3326 11.4349 11.1672L9.43955 9.46553C9.58337 9.32864 9.70554 9.16575 9.79391 8.97428L11.0866 6.17491L11.5007 7.27785C11.5181 7.37575 11.551 7.47192 11.6203 7.5525C11.6827 7.62701 11.7624 7.67639 11.8473 7.71105C11.856 7.71538 11.8664 7.71625 11.8768 7.71885C11.9305 7.73791 11.9851 7.7561 12.0414 7.7587C12.1081 7.76477 12.1757 7.7561 12.2441 7.73704C12.2459 7.73618 12.2467 7.73618 12.2467 7.73618C12.2649 7.73184 12.2831 7.73531 12.3013 7.72751C12.3975 7.69112 12.4711 7.62961 12.5344 7.5577L14.8893 5.55889C15.1397 5.34835 15.034 4.97579 14.8234 4.7254Z"
                                    fill="white" />
                                <path
                                    d="M11.8447 3.30102C12.7562 3.30102 13.4952 2.56206 13.4952 1.65051C13.4952 0.738959 12.7562 0 11.8447 0C10.9331 0 10.1942 0.738959 10.1942 1.65051C10.1942 2.56206 10.9331 3.30102 11.8447 3.30102Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_151_131">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div class="absolute flex top-10 ml-6">
                        <h1 class="text-4xl font-medium">4,95</h1>
                        <span class="text-md text-[#EFEDE8A6] mt-4 ml-2 font-normal">km</span>
                    </div>
                </div>
            </div>

            <div
                class="absolute bg-[#7A29DC] text-white h-[80px] w-[150px] rounded-xl right-0 bottom-0 mr-[255px] mb-[160px]">
                <div class="relative px-5 py-2">
                    <div class="grid gap-2">
                        <h1 class="font-medium text-4xl">500</h1>
                        <h1 class="absolute font-bold right-[45px] top-[8px] text-3xl">+</h1>
                    </div>

                    <h2 class="text-[11px] mt-1 text-[#EFEDE8A6]">Free Workout Videos</h2>
                </div>
            </div>

            <div
                class="absolute bg-[#303030] text-white px-4 py-3 h-[80px] w-[170px] right-0 rounded-xl mt-[300px] mr-[580px]">
                <div class="flex gap-2">
                    <div class="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
                            fill="none">
                            <circle cx="20" cy="20" r="20" fill="#EF8963" />
                            <path d="M30 20L15 28.6603L15 11.3397L30 20Z" fill="#FAFAF9" />
                        </svg></div>
                    <div>

                        <div class=" text-2xl font-medium">350
                            <span class="absolute top-[10px]">+</span>
                        </div>

                        <div class="text-[14px] text-[#EFEDE8A6]">Video tutorial</div>
                    </div>
                </div>
            </div> -->

      <div
        class="lg:px-20 mx-auto max-w-screen-2xl grid lg:grid-cols-2 justify-items-center"
      >
        <div class="flex flex-col justify-center py-8 px-8 lg:px-20">
          <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-8xl text-white"
          >
            WORK OUT
          </h1>
          <h1
            class="mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-8xl text-white"
          >
            WITH ME
          </h1>
          <p
            class="text-lg font-normal text-white lg:text-md dark:text-gray-400"
          >
            Fitness is not about being better than someone. Fitness is about
            being better than the person you were yesterday. growth.
          </p>
          <!-- <a href="#" class="text-black dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Read more about our app 
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> -->
        </div>

        <div class="md:py-24 py-10">
          <img class="h-[28rem]" src="../assets/fit1.png" />
        </div>
      </div>
    </section>
  </div>
  <br />
  <br />
  <br />

  <div class="lg:flex gap-16 mb-20">
    <div class="md:px-28">
      <img
        class="h-[28rem] w-[78rem] rounded-lg"
        src="../assets/Mask Group.jpg"
      />
    </div>

    <a
      href="#"
      class="grid grid-cols-1 justify-items-center w-full lg:mr-24 pt-10 px-6"
    >
      <div class="pt-16 xl:pt-24">
        <p
          class="mb-4 text-4xl ju font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Work out at home for free.
        </p>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you’ll have everything you
          need to reach your personal fitness goals – for free!
        </p>
      </div>
    </a>
  </div>

  <br />
  <br />
  <br />

  <div class="lg:flex flex-row-reverse gap-16">
    <div class="md:px-28">
      <img
        class="h-[28rem] w-[78rem] lg:mr-24 rounded-lg"
        src="../assets/mask1.png"
      />
    </div>

    <a
      href="#"
      class="grid grid-cols-1 justify-items-center w-full rounded-lg lg:ml-24 px-6"
    >
      <div class="pt-24 xl:pt-28">
        <h5
          class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Get more with low-cost training programs and advanced features.
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          We believe fitness should be accessible to everyone, everywhere,
          regardless of income or access to a gym. With hundreds of professional
          workouts, healthy recipes and informative articles, as well as one of
          the most positive communities on the web, you’ll have everything you
          need to reach your personal fitness goals – for free!
        </p>
      </div>
    </a>
  </div>

  <br />
  <br />
  <br />

  <div class="mt-5 w-full h-20 text-black text-center py-6 font-bold text-5xl">
    Classe's
  </div>

  <div class="justify-center md:flex flex-col-1 gap-1 lg:gap-16 mt-24">
    <div
      class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="rounded-t-lg" src="../assets/trening.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            RPM
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is the best investment in yourself to achieve good health, so you should decide.
        </p>
        <button href="#test"
          to="/Classes"
          @click="handleLinkClick1"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="rounded-t-lg" src="../assets/trening.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            BIKE TOUR
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is the best investment in yourself to achieve good health, so you should decide.
        </p>
        <button
          to="/Classes2"
          @click="handleLinkClick2"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="rounded-t-lg" src="../assets/44.jpeg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            SPIN
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is the best investment in yourself to achieve good health, so you should decide.
        </p>
        <button
          to="/Classes3"
          @click="handleLinkClick3"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div class="justify-center md:flex flex-col-1 gap-1 lg:gap-16 mt-24">
    <div>
      <div
        class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="../assets/45.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              BODYPUMP
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is the best investment in yourself to achieve good health, so you should decide.
          </p>
          <button
            to="/Classes4"
            @click="handleLinkClick4"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div>
      <div
        class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" src="../assets/trening.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 mt-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white"
            >
              MAXED TERRAIN SPIN
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is the best investment in yourself to achieve good health, so you should decide.
          </p>
          <button
            to="/Classes5"
            @click="handleLinkClick5"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div>
      <div
        class="m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg lg:h-[14rem] w-full" src="../assets/bb.jpg" alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              GYM BALL
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is the best investment in yourself to achieve good health, so you should decide.
          </p>
          <button
            to="/Classes6"
            @click="handleLinkClick6"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <br />
  <br />
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <footer class="bg-white dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-full text-center">
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Company
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Fitness center</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Careers</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Brand Center</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Help center
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Instagram</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Twitter</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Facebook</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            Policy
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Licensing</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
          >
            service
          </h2>
          <ul class="text-gray-500 dark:text-gray-400 font-medium">
            <li class="mb-4">
              <a href="#" class="hover:underline">Bathroom</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Gym</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Clean food store</a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">Locker</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between"
      >
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          @ 2023 <a href="https://flowbite.com/">Fitness</a>Center@gmail.com
        </span>
        <div
          class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse"
        >
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 21 16"
            >
              <path
                d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
              />
            </svg>
            <span class="sr-only">Discord community</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fill-rule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a
            href="#"
            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Dribbble account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
