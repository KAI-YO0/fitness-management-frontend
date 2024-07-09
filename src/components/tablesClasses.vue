<template>
  <div class="content">
    <main>
      <div class="header">
        <div class="left">
          <h1>Dashboard</h1>
        </div>
      </div>

      <div class="grid grid-cols-3 gap-6">
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger "
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/></svg>
          
          </div>
          <span class="info ml-6 ">
            <h3 class="text-2xl font-semibold text-dark">
              {{ countClassrpm }}
            </h3>
            <p class="text-dark">ClassesRPM</p>
          </span>
        </li>
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
          </div>
          <span class="info ml-6">
            <h3 class="text-2xl font-semibold text-dark">
              {{ countbiketour }}
            </h3>
            <p class="text-dark">ClassesBiketour</p>
          </span>
        </li>
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z"/></svg>
          </div>
          <span class="info ml-6">
            <h3 class="text-2xl font-semibold text-dark">{{ countspin }}</h3>
            <p class="text-dark">ClassesSpin</p>
          </span>
        </li>
        <!-- Second Row -->
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/></svg>
          </div>
          <span class="info ml-6">
            <h3 class="text-2xl font-semibold text-dark">
              {{ countbodypump }}
            </h3>
            <p class="text-dark">ClassesBodyPump</p>
          </span>
        </li>
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z"/></svg>
          </div>
          <span class="info ml-6">
            <h3 class="text-2xl font-semibold text-dark">
              {{ countMixedterrainspin }}
            </h3>
            <p class="text-dark">ClassesMixedterrainspin</p>
          </span>
        </li>
        <li class="p-6 bg-light rounded-lg border-2 flex items-center cursor-pointer bg-gray-100">
          <div
            class="w-20 h-20 rounded-lg flex items-center justify-center bg-light-danger text-danger"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"/></svg>
          </div>
          <span class="info ml-6">
            <h3 class="text-2xl font-semibold text-dark">{{ countGymball }}</h3>
            <p class="text-dark">ClassesGymball</p>
          </span>
        </li>
      </div>

      <!-- End of Insights -->
    </main>
  </div>
 
  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data ">
        <div class="orders ">
          <div class="header ">
            <i class="bx bx-receipt "></i>
            <h3>ClassesRPM</h3>
            
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in RPM" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </main>
 
  </div>

  

  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>ClassesBiketour</h3>
            
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Biketour" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  

  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>ClassesSpin</h3>
            
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in spin" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

 

  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>ClassesBodyPump</h3>
           
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in bodyPump" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>ClassesMixedterrainspin</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Mixed" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>



  <div class="content">
    <main class="overflow-y-scroll">
      <div class="bottom-data">
        <div class="orders">
          <div class="header">
            <i class="bx bx-receipt"></i>
            <h3>ClassesGymball</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Classname</th>
                <th>Timedate</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in gymball" :key="user.id">
                <td>
                  <p>{{ user.firstname }}</p>
                </td>
                <td>
                  <p>{{ user.lastname }}</p>
                </td>
                <td>{{ user.SelectClass }}</td>
                <td>
                  <span>{{ user.SelectDay }}</span>
                </td>
                <td>
                  <span>{{ user.phoneNumber }}</span>
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
import { initFlowbite } from "flowbite";
export default {
  components: {
    popup,
  },
  data() {
    return {
      RPM: [],
      Biketour: [],
      spin: [],
      bodyPump: [],
      Mixed: [],
      gymball: [],
      countClassrpm: [],
      countbiketour: [],
      countspin: [],
      countbodypump: [],
      countMixedterrainspin: [],
      countGymball: [],
    };
  },
  mounted() {
    this.fetchUsers();
    this.biketour();
    this.Spin();
    this.Bodypump();
    this.Mixedterrainspin();
    this.Gymball();
    this.countRPM();
    this.countBiketour();
    this.countSpin();
    this.countBodypump();
    this.CountClassMixedterrainspin();
    this.CountClassgymball();
    initFlowbite();
  },
  methods: {
    fetchUsers() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/Getclassrpm", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.RPM = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    biketour() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/GetclassBiketour", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.Biketour = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    Spin() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/GetclassSpin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.spin = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    Bodypump() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/GetclassBodypump", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.bodyPump = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    Mixedterrainspin() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/Getclassmixedterrainspin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.Mixed = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    Gymball() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }

      axios
        .get("http://localhost:8080/api/v1/admins/GetclassGymball", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.gymball = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    countRPM() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassRPM", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countClassrpm = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    countBiketour() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassBiketour", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countbiketour = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    countSpin() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassSpin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countspin = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    countBodypump() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassBodypump", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countbodypump = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    CountClassMixedterrainspin() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassMixedterrainspin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countMixedterrainspin = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    CountClassgymball() {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("Token not found.");
        return;
      }
      axios
        .get("http://localhost:8080/api/v1/admins/CountClassGymball", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.countGymball = response.data.data; 
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
  },
};
</script>
