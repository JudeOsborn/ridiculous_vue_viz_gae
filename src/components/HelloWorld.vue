<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="login">Sign in</button>
  </div>
</template>

<script>
import { loadGoogleCharts } from "vue-google-charts";

const spreadsheetId = "<spreadsheet id>";
const clientId = "<client id>.apps.googleusercontent.com";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    login() {
      this.$gapi.getGapiClient().then((gapi) => {
        gapi.auth.authorize({
          client_id: clientId, 
          scope: "https://www.googleapis.com/auth/spreadsheets",
          immediate: false
        }, () => {
          const token = encodeURIComponent(gapi.auth.getToken().access_token);
          const tqUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=responseHandler:handleTqResponse&access_token=${token}`;

          loadGoogleCharts("current", {}).then(google => {
            const query = new google.visualization.Query(tqUrl);
            query.setTimeout(20);
            query.send((response) => {
              console.log("Response: ", response);
            });
          });
        });
      });
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.google-signin-button {
  padding:  10px;
}
</style>
