import store from './state/store'
import axios from 'axios';
import axiosRetry from 'axios-retry';

let originUrl = window.location.origin;
axios.defaults.baseURL = originUrl + '/api/';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = store.state.auth.user.token != undefined ? store.state.auth.user.token : '';
axios.defaults.withCredentials = true;

axiosRetry(axios, { retries: 3 });
window.axios = require('axios');

function setAxiosInterceptors(){
    window.axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response.status == 401) {// Unauthenticated
            store.dispatch('auth/logout')
            window.location.href = '/login';
        }
        if (error.response.status == 403) {
            alert('Permission Denied');
        }
        return Promise.reject(error);
    });
}

window.Permissions = store.state.auth.user.permissions != undefined ? store.state.auth.user.permissions : [];
// this line to fetch permissions each time user reload the page
store.dispatch('notifications/setFetched', false)
setAxiosInterceptors();

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';
// window.io = require('socket.io-client')
// window.Echo = new Echo({
//     broadcaster: 'socket.io',
//     host: window.location.hostname + ':6001',
//     headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content}
// });

// function checkIfAnyNotReededMSG(data){
//     let flag = false
//     for (let index = 0; index < data.length; index++) {
//       if (data[index].seen == 0) {
//         flag = true;
//         break;
//       }
//     }
//     return flag;
// }

// async function getNotifications(){
//     await axios.get("notifications").then(function (response) {
//         store.dispatch('notifications/addNotification', response.data)
//         if( checkIfAnyNotReededMSG(response.data) ){  
//             store.dispatch('notifications/unreadedMSG')// markNotSeen
//         } else {
//             store.dispatch('notifications/allMSGsReaded')// markAllSeen
//         }
//     });
// } 

// if (store.state.auth.user.id != undefined) {
//     window.Echo.channel('laravel_database_notification.'+store.state.auth.user.id).notification((notification) => {
//         getNotifications();
//     });
// }