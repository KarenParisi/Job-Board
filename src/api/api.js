// import api from 'lib/api';
// import store from 'store';

//   api.new('http://localhost:3000');

// export function register(username, password) {
//   return api.post('/register', {username:username, password: password})
//     .then(function(resp){
//       store.dispatch({
//         type: 'USER_REGSTIER', ///mike's notes//
//         data: resp.data 
//       })
//     }).catch(function(err){
//       console.log('oops')
//       console.dir(err.message);
//     })
// }

// export function login(username, password) {
//   api.login(username, password)
//     .then(function(resp){
//       console.log(resp)
//     });
// }

// export function getUser() {
//   api.get('/user').then(function(resp){
//     console.log(resp);
//   })
// }

// export function logout() {
//   api.logout();
// }