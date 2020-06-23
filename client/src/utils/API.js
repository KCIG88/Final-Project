import axios from "axios";

export default {

    // getnext15gamesbyleague: function(title) {
    //     return new Promise((resolve, reject) => {
    //     axios
    //         .get("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328")
    //         .then(res => {
    //         console.log(res.data.events[0]);
    //         const games = res.data.events;
    //         const results = games.map(game => {
    //             return {
    //                 gameDate: game.dateEvent,
    //                 strAwayTeam: game.volumeInfo.title,
                   
    //             };
    //         });
    //         resolve(results);
    //         })
    //         .catch(err => reject(err));
    //     });
    // },


    getnext15gamesbyleague: function() {
          return axios.get("https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4328");
        },
      

    signUp: function (user) {
        return axios.post("/api/auth/signup", user);
    },

    signIn: function (user) {
        return axios.post("/api/auth/signin", user);
    },

    signOut: function () {
        return axios.get("api/auth/signout");
    },

    getBraintreeClientToken: function (userId, token) {
        return axios.get(`api/braintree/getToken/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

   
};