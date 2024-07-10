<template>
  <Nav class="bg-black fixed w-full z-50 top-0  "></Nav>
  
  <div class="about  ">

<section class="flex lg:py-1 py-10 bg-black  dark:bg-gray-900   ">

  

    <div class="lg:px-20    mx-auto max-w-screen-2xl    grid lg:grid-cols-2  justify-items-center ">
        <div class="flex flex-col justify-center py-8 px-8 lg:px-20 ">
            <h1
                class="mb-4  text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-8xl text-white">
                Personal Trainer</h1>
            <h1
                class="mb-4 lg:mb-10  text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-8xl text-white">
                </h1>
            <p class=" text-lg font-normal text-white lg:text-md dark:text-gray-400">Fitness is not about being
                better than someone. Fitness is about being better than the person you were yesterday.
                growth.</p>
        </div>

        <div class=" md:py-24 py-10 ">
            <img class=" h-[28rem] " src="../assets/fit1.png">
        </div>

    </div>

</section>
</div>


<br >
  <br >
  <br >
  <br>
  <br>

  <div class="lg:flex gap-16 mb-20">
    <div class="px-16 md:px-32">
      <img
        class="flex justify-items-center lg:h-[28rem] lg:w-[82rem] rounded-lg"
        src="../assets/trainer.jpg"
      />
    </div>

    <a
      href="#"
      class="grid grid-cols-1 justify-items-center w-full lg:mr-24 pt-10 "
    >
      <div class="pt-16 xl:pt-24 px-4 lg:px-2">
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

  <br >
  <br >
  <br >
  <br>

  <div class="lg:flex flex-row-reverse gap-16">
    <div class="px-16 md:px-32">
      <img
        class="flex justify-items-center lg:h-[28rem] lg:w-[75rem]  rounded-lg"
        src="../assets/mask1.png"
      />
    </div>

    <a
      href="#"
      class="grid grid-cols-1 justify-items-center w-full rounded-lg lg:ml-24 "
    >
      <div class="pt-24 xl:pt-28 px-4 lg:px-2">
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




<div class="mt-5  w-full h-20 text-black text-center py-32 font-bold text-5xl">
    Traine'r
  </div>





<div class="grid lg:grid-cols-3 justify-items-center gap-6 px-10 py-10">
<div>
<div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg px-2 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" >
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Michael Foster</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">weight training</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is worthwhile training, if you don't try it you will regret it.</p>
        <div class="flex justify-end mt-4 ">
          
    <button @click.prevent="openModal" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Reserve
    </button>

    <!-- Modal2 -->
    <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center  bg-gray-900 bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Reserve</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Nane:</label>
            <input v-model="userObject.firstname" type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4 ">
            <div class="py-4">
              <label for="timeStart" class="block  text-sm font-medium text-gray-700">Start Date:</label>
              <input v-model="formData.StartHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="py-4">
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">End Date:</label>
              <input v-model="formData.EndHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-2 gap-2 justify-items-center py-4  ">
        
            <button type="button" @click="showModal = false" class=" w-full   py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-gray-700 hover:bg-gray-400  ">
              Cancel
            </button>
          
          
            <button type="submit" class=" w-full  py-2 bg-black border border-transparent rounded-md font-semibold text-white hover:bg-gray-500 ">
             Confirm
            </button>
          
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
</div>
</div>

<div>
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow px-2 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bonnie Green</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">weight training</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is worthwhile training, if you don't try it you will regret it.</p>
        <div class="flex justify-end mt-4 ">
    <button @click.prevent="openModal1" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Reserve
    </button>

    <!-- Modal2 -->
    <div v-if="showModal1" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center  bg-gray-900 bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Reserve</h2>
        <form @submit.prevent="handleSubmit1">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input v-model="userObject.firstname" type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4 ">
            <div class="py-4">
              <label for="timeStart" class="block  text-sm font-medium text-gray-700">Start Date:</label>
              <input v-model="formData1.StartHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="py-4">
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">End Date:</label>
              <input v-model="formData1.EndHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-2 gap-2 justify-items-center py-4  ">
        
            <button type="button" @click="showModal1 = false" class=" w-full   py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-gray-700 hover:bg-gray-400  ">
              Cancel
            </button>
          
          
            <button type="submit" class=" w-full  py-2 bg-black border border-transparent rounded-md font-semibold text-white hover:bg-gray-500 ">
             Confirm
            </button>
          
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
</a>
</div>

<div>
<a href="#" class="flex flex-col items-center bg-white border px-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tom Cook</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">weight training</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is worthwhile training, if you don't try it you will regret it.</p>
        <div class="flex justify-end mt-4 ">
    <button @click.prevent="openModal2" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Reserve
    </button>

    <!-- Modal2 -->
    <div v-if="showModal2" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center  bg-gray-900 bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Reserve</h2>
        <form @submit.prevent="handleSubmit2">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
            <input v-model="userObject.firstname" type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4 ">
            <div class="py-4">
              <label for="timeStart" class="block  text-sm font-medium text-gray-700">Start Date:</label>
              <input v-model="formData2.StartHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div class="py-4">
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">End Date:</label>
              <input v-model="formData2.EndHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
          <div class="w-full grid lg:grid-cols-2 gap-2 justify-items-center py-4  ">
        
            <button type="button" @click="showModal2 = false" class=" w-full   py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-gray-700 hover:bg-gray-400  ">
              Cancel
            </button>
          
          
            <button type="submit" class=" w-full  py-2 bg-black border border-transparent rounded-md font-semibold text-white hover:bg-gray-500  ">
              Confirm
            </button>
          
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
</a>
</div>

</div>





  <!-- <div class="grid lg:grid-cols-3 justify-items-center  ">

    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
           
        </button>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 md:mt-6">
          <div class="flex mt-4 ">
    <button @click.prevent="openModal1" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add friend
    </button>

   
    <div v-if="showModal1" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black  bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">กรอกข้อมูล</h2>
        <form @submit.prevent="handleSubmit1">
         
          <div class="mb-4">
        <label for="name2" class="block text-sm font-medium text-gray-700">ชื่อ:</label> 
        <input v-model="userObject.firstname" type="text" id="name2" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
      </div>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label for="timeStart" class="block text-sm font-medium text-gray-700">ตั้งแต่เวลา:</label>
              <input v-model="formData1.StartHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div>
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">ถึงเวลา:</label>
              <input v-model="formData1.EndHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="showModal1 = false" class="inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-4">
              ยกเลิก
            </button>
            <button type="submit" class="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</div>
</div>


    
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
           
        </button>
    </div>

  
</div>
  


<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
           
        </button>
    </div>

    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div class="flex mt-4 md:mt-6">
          <div class="flex mt-4 ">
    <button @click.prevent="openModal" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add friend
    </button>


    <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">กรอกข้อมูล</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">ชื่อ:</label>
            <input v-model="userObject.firstname" type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4">
      </div>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label for="timeStart" class="block text-sm font-medium text-gray-700">ตั้งแต่เวลา:</label>
              <input v-model="formData.StartHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
            <div>
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">ถึงเวลา:</label>
              <input v-model="formData.EndHour" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            </div>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="showModal = false" class="inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-4">
              ยกเลิก
            </button>
            <button type="submit" class="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>
</div>
</div>

</div> -->

<br>
<br>
<br>


<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <footer class="bg-white dark:bg-gray-900 ">
    <div class="mx-auto w-full max-w-screen-full  text-center">
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

<script setup>
import Nav from "@/components/Nav.vue";
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import axios from 'axios';

const userObject = JSON.parse(localStorage.getItem("userObj"))
const showModal = ref(false);
const formData = ref({
  firstname: '',
  datetime: '',
  StartHour: '',
  EndHour: ''
});

const toast = useToast();

const openModal = () => {
  showModal.value = true;
  formData.value.timeStart = '';
  formData.value.timeEnd = '';
};

const handleSubmit = () => {
  
  formData.value.firstname = userObject.firstname;
  if (!formData.value.firstname || !formData.value.StartHour || !formData.value.EndHour ) {
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
    return; // ออกจากฟังก์ชันทันทีหลังจากแสดงข้อความผิดพลาด
  }
  const token = localStorage.getItem('accessToken'); // กำหนดค่าของ token ก่อนใช้งาน
  localStorage.setItem('accessToken', token);
  axios.post('http://localhost:8080/api/v1/users/reserveTrainner', {
    
    firstname: formData.value.firstname,
    StartHour: formData.value.StartHour,
    EndHour: formData.value.EndHour,
  },{
    headers: {
              "Authorization": `Bearer ${token}`,
            },
  })
  
  .then(response => {
    toast.success("Reserve Success", {
                position: "top-right",
                timeout: 1000,
            });
            setTimeout(() => {
                location.reload();
            }, 1000);
    console.log(response.data);
    // ทำสิ่งที่คุณต้องการหลังจากได้รับการตอบกลับจากเซิร์ฟเวอร์
  })
  .catch(error => {
    console.error('Error occurred:', error);
    // การจัดการข้อผิดพลาดในการส่งคำขอ
  });
};

//modal1
const showModal1 = ref(false);
const formData1 = ref({
  firstname: '',
  datetime: '',
  StartHour: '',
  EndHour: ''
});



const openModal1 = () => {
  showModal1.value = true;
  
  // formData1.value.timeStart = '00:00';
  // formData1.value.timeEnd = '00:00';
};

const handleSubmit1 = () => {
  formData1.value.firstname = userObject.firstname;
  if (!formData1.value.firstname || !formData1.value.StartHour || !formData1.value.EndHour ) {
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
    return; // ออกจากฟังก์ชันทันทีหลังจากแสดงข้อความผิดพลาด
  }
  const token = localStorage.getItem('accessToken'); // กำหนดค่าของ token ก่อนใช้งาน
  localStorage.setItem('accessToken', token);
  
  axios.post('http://localhost:8080/api/v1/users/reserveTrainner', {
    
    firstname: formData1.value.firstname,
    StartHour: formData1.value.StartHour,
    EndHour: formData1.value.EndHour,
  },{
    headers: {
              "Authorization": `Bearer ${token}`,
            },
  })
  
  .then(response => {
    toast.success("Buy Success", {
                position: "top-right",
                timeout: 1000,
            });
            setTimeout(() => {
                location.reload();
            }, 1000);
    console.log(response.data);
    // ทำสิ่งที่คุณต้องการหลังจากได้รับการตอบกลับจากเซิร์ฟเวอร์
  })
  .catch(error => {
    console.error('Error occurred:', error);
    // การจัดการข้อผิดพลาดในการส่งคำขอ
  });
}

//modal2
const showModal2 = ref(false);
const formData2 = ref({
  firstname: '',
  datetime: '',
  SelectDate: '',
  StartHour: '',
  EndHour: ''
});



const openModal2 = () => {
  showModal2.value = true;
  // formData2.value.timeStart = '00:00';
  // formData2.value.timeEnd = '00:00';
};

const handleSubmit2 = () => {
  formData2.value.firstname = userObject.firstname;
  if (!formData2.value.firstname || !formData2.value.StartHour || !formData2.value.EndHour ) {
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน');
    return; // ออกจากฟังก์ชันทันทีหลังจากแสดงข้อความผิดพลาด
  }

  const token = localStorage.getItem('accessToken'); // กำหนดค่าของ token ก่อนใช้งาน
  localStorage.setItem('accessToken', token);

  console.log('ข้อมูลที่ถูกส่ง:', formData2.value);

  axios.post('http://localhost:8080/api/v1/users/reserveTrainner', {
    
    firstname: formData2.value.firstname,
    StartHour: formData2.value.StartHour,
    EndHour: formData2.value.EndHour,
  },{
    headers: {
              "Authorization": `Bearer ${token}`,
            },
  })
  
  .then(response => {
    toast.success("Buy Success", {
                position: "top-right",
                timeout: 1000,
            });
            setTimeout(() => {
                location.reload();
            }, 1000);
    console.log(response.data);
    // ทำสิ่งที่คุณต้องการหลังจากได้รับการตอบกลับจากเซิร์ฟเวอร์
  })
  .catch(error => {
    console.error('Error occurred:', error);
    // การจัดการข้อผิดพลาดในการส่งคำขอ
  });
}
// const tableData = [
//   { name: 'John Doe', age: 30, email: 'john@example.com' },
//   { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
//   { name: 'Michael Johnson', age: 35, email: 'michael@example.com' }
// ];

</script>
