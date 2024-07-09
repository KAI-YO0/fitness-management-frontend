<script>
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      currentPath: "",
    };
  },
  mounted() {
    this.currentPath = window.location.pathname;
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<template>
  <div class="sidebar">
    <a href="#" class="logo">
      <i class="bx bx-dumbbell"></i>
      <div class="logo-name"><span>Fisnes</span>Center</div>
    </a>
    <ul class="side-menu">
      <li :class="{ active: currentPath === '/admin/dashboard' }">
        <a href="/admin/dashboard"><i class="bx bxs-dashboard"></i>Dashboard</a>
      </li>
      <li :class="{ active: currentPath === '/admin/classes' }">
        <a href="/admin/classes"><i class="bx bx-store-alt"></i>BookClass</a>
      </li>
      <li :class="{ active: currentPath === '/admin/receipt' }">
        <a href="/admin/receipt"><i class="bx bx-cart-add"></i>Receipt</a>
      </li>
      <li :class="{ active: currentPath === '/admin/tablesUser' }">
        <a href="/admin/tablesUser"><i class="bx bx-group"></i>Users</a>
      </li>
    </ul>
    <ul class="side-menu">
      <li>
        <a href="#" class="logout" @click="logout">
          <i class="bx bx-log-out-circle"></i>
          Logout
        </a>
      </li>
    </ul>
  </div>
</template>