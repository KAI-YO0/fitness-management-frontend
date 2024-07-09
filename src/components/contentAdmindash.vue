<template>
    <div class="content">
        <main>
            <div class="header">
                <div class="left">
                    <h1>Dashboard</h1>
                </div>
            </div>

            <!-- Insights -->
            <ul class="insights">
                <li>
                    <i class='bx bxs-user'></i>
                    <span class="info">
                        <h3>
                            {{ allUserCount }}
                        </h3>
                        <p>USER</p>
                    </span>
                </li>
                <li><i class='bx bxs-stopwatch'></i>
                    <span class="info">
                        <h3>
                            {{trainerCount}}
                        </h3>
                        <p>Trainer</p>
                    </span>
                </li>
                <li><i class='bx bx-donate-heart'></i>
                    <span class="info">
                        <h3>
                            6
                        </h3>
                        <p>Class</p>
                    </span>
                </li>
                <li><i class='bx bx-dollar-circle'></i>
                    <span class="info">
                        <h3>
                            {{ userCount }}
                        </h3>
                        <p>Member</p>
                    </span>
                </li>
            </ul>
            <!-- End of Insights -->
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            userCount: 0,
            trainerCount: 0,
            allUserCount: 0
        };
    },
    mounted() {
        this.fetchData();
        this.fetchTrainerCount();
        this.fetchAllUserCount();
    },
    methods: {
        async fetchData() {
            try {
                const token = localStorage.getItem('accessToken');
                if (!token) {
                    console.error('Access token is missing');
                    return;
                }
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };
                const response = await axios.get('http://localhost:8080/api/v1/admins/getUserCount', config);
                this.userCount = response.data.data;
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        },
        async fetchTrainerCount() {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                console.error('Access token is missing');
                return;
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get('http://localhost:8080/api/v1/admins/getTrainerCount', config);
            this.trainerCount = response.data.data;
        } catch (error) {
            console.error('Error fetching trainer count:', error);
        }
        },
        async fetchAllUserCount() {
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                console.error('Access token is missing');
                return;
            }
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const response = await axios.get('http://localhost:8080/api/v1/admins/getAlluserCount', config);
            this.allUserCount = response.data.data;
        } catch (error) {
            console.error('Error fetching all user count:', error);
        }
      }
    }
};
</script>
