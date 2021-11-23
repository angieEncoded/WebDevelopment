const app = Vue.createApp({
    // We use {{}} declarative rendering with Vue
    data() {
        return {
            firstName: 'Babs',
            lastName: 'Saylor',
            email: 'babs@babs.com',
            gender: 'female',
            picture: 'images/bab.jpg'
        }
    },
    methods: {
        async getUser() {
            // Axios already converts to json
            const res = await axios.get("https://randomuser.me/api");
            // results are buried in data.results
            const data = res.data.results[0];
            //console.log(res.data.results[0])

            this.firstName = data.name.first;
            this.lastName = data.name.last;
            this.email = data.email;
            this.gender = data.gender;
            this.picture = data.picture.thumbnail;
        }
    }
})

app.mount('#app')