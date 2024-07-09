
<template>
  <header>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <body>
        <SidebarAdmin></SidebarAdmin>
        <NavbarAdmin></NavbarAdmin>
        <contentAdmin></contentAdmin>
        <tablesshow></tablesshow>
       
    </body>
  </header>
  
</template>

<script setup>
import SidebarAdmin from '../components/sidebarAdmin.vue';
import NavbarAdmin from '@/components/navbarAdmin.vue';
import contentAdmin from '@/components/contentAdmindash.vue';
import tablesshow from '@/components/tablesShow.vue';
import { ref, onMounted } from 'vue';


// เริ่ม //Action on web
const sideLinks = ref([]);
const menuBar = ref(null);
const sideBar = ref(null);
const searchBtn = ref(null);
const searchBtnIcon = ref(null);
const searchForm = ref(null);
const toggler = ref(null);

onMounted(() => {
  sideLinks.value = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
  menuBar.value = document.querySelector('.content nav .bx.bx-menu');
  sideBar.value = document.querySelector('.sidebar');
  searchBtn.value = document.querySelector('.content nav form .form-input button');
  searchBtnIcon.value = document.querySelector('.content nav form .form-input button .bx');
  searchForm.value = document.querySelector('.content nav form');
  toggler.value = document.getElementById('theme-toggle');

  sideLinks.value.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
      sideLinks.value.forEach(i => {
        i.parentElement.classList.remove('active');
      });
      li.classList.add('active');
    });
  });

  menuBar.value.addEventListener('click', () => {
    sideBar.value.classList.toggle('close');
  });

  searchBtn.value.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
      e.preventDefault();
      searchForm.value.classList.toggle('show');
      if (searchForm.value.classList.contains('show')) {
        searchBtnIcon.value.classList.replace('bx-search', 'bx-x');
      } else {
        searchBtnIcon.value.classList.replace('bx-x', 'bx-search');
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      sideBar.value.classList.add('close');
    } else {
      sideBar.value.classList.remove('close');
    }
    if (window.innerWidth > 576) {
      searchBtnIcon.value.classList.replace('bx-x', 'bx-search');
      searchForm.value.classList.remove('show');
    }
  });

  toggler.value.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
});
// จบ //Action on web
</script>