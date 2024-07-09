<!-- <template>
  <div>
    <button @click.prevent="onClick" :disabled="disableButton" class="w-full text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <label class="">Confirm</label>
    </button>
    <div v-if="lastClickedDate !== null">{{ lastClickedDate }}</div>
    <div>Number of clicks: {{ clickCount }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const clickCount = ref(Number(localStorage.getItem('clickCount')) || 0);
const lastClickedDate = ref(localStorage.getItem('lastClickedDate'));

const onClick = () => {
  clickCount.value++;
  lastClickedDate.value = new Date().toLocaleString();
  localStorage.setItem('clickCount', clickCount.value);
  localStorage.setItem('lastClickedDate', lastClickedDate.value);

  if (clickCount.value >= 10) {
    disableButton.value = true;
    setTimeout(() => {
      disableButton.value = false;
      clickCount.value = 0;
      lastClickedDate.value = null;
      localStorage.removeItem('clickCount');
      localStorage.removeItem('lastClickedDate');
    }, 24 * 60 * 60 * 1000); // 1 day
  }
}

const disableButton = ref(false);

onMounted(() => {
  const storedLastClickedDate = localStorage.getItem('lastClickedDate');
  if (storedLastClickedDate) {
    const lastClickedDateTime = new Date(storedLastClickedDate).getTime();
    const currentTime = new Date().getTime();
    const oneDayInMs = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    if (currentTime - lastClickedDateTime < oneDayInMs) {
      disableButton.value = true;
    }
  }
});
</script>
 -->
 <template>
  <div class="flex mt-4 md:mt-6">
    <button @click.prevent="openModal" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Add friend
    </button>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="modal-content bg-white p-8 rounded-lg w-96">
        <h2 class="text-lg font-semibold mb-4">กรอกข้อมูล</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">ชื่อ:</label>
            <input v-model="formData.name" type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4">
            <label for="date" class="block text-sm font-medium text-gray-700">วันที่:</label>
            <input v-model="formData.date" type="date" id="date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          </div>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label for="timeStart" class="block text-sm font-medium text-gray-700">ตั้งแต่เวลา:</label>
              <input v-model="formData.datetime" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">

            </div>
            <div>
              <label for="timeEnd" class="block text-sm font-medium text-gray-700">ถึงเวลา:</label>
              <input v-model="formData.datetime" type="datetime-local" id="datetime" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">

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
</template>

<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const formData = ref({
  name: '',
  date: '',
  datetime: '',
  timeStart: '', // ไม่ต้องกำหนดค่าเริ่มต้น
  timeEnd: ''    // ไม่ต้องกำหนดค่าเริ่มต้น
});

const openModal = () => {
  showModal.value = true;
  // เมื่อโมดอลเปิดขึ้นมา กำหนดค่าเริ่มต้นให้กับเวลาเป็น '00:00'
  formData.value.timeStart = '00:00';
  formData.value.timeEnd = '00:00';
};

const handleSubmit = () => {
  if (!formData.value.name || !formData.value.date || !formData.value.timeStart || !formData.value.timeEnd) {
    alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    return;
  }

  console.log('ข้อมูลที่ถูกส่ง:', formData.value);

  formData.value = {
    name: '',
    date: '',
    timeStart: '',
    timeEnd: ''
  };

  showModal.value = false;
};
</script>

