<template>
  <div>
    <h1>{{ name }}</h1>
    <!-- Img call from API -->
    <div
      class="mar-t20"
      style="border: 1px solid #e2e2e2; padding: 10px; border-radius: 4px;"
    >
      <h1>
        {{ imageData.copyright }}
        <span style="color: green; font-size: 12px;">{{ imageData.date }}</span>
      </h1>
      <p>{{ imageData.explanation }}</p>
      <img
        v-if="imageData.url && imageData.title"
        :src="imageData.url"
        :title="imageData.title"
        style="max-width: 20%;"
      />
    </div>
    <!-- Content from Api -->
    <div class="mar-t20">
      <div v-if="totalLength > 0">
        <!-- <div v-if="contentData.length > 0"> -->
        <!-- <p>Showing {{ contentData.length }} items.</p> -->
        <p>Showing {{ totalLength }} items.</p>

        <table cellspacing="5" cellpadding="5" border="1" width="100%">
          <thead>
            <th>
              #
            </th>
            <th>
              Name
            </th>
            <th>
              Close Approch date
            </th>
            <th>
              Miss Distance
            </th>
            <th>Remove</th>
          </thead>
          <tbody>
            <tr v-for="(a, index) in contentData" :key="a.id">
              <td>{{ index + 1 }}</td>
              <td>{{ a.name }}</td>
              <td>
                {{ getCloseApproachDate(a) }}
                <!-- {{ a.close_approach_data[0].close_approach_date }} -->
              </td>
              <td>
                <ul v-if="a.close_approach_data.length > 0">
                  <li
                    v-for="(value, key) in a.close_approach_data[0]
                      .miss_distance"
                    :key="value"
                  >
                    {{ key }}: {{ value }}
                  </li>
                </ul>
              </td>
              <td>
                <el-button type="primary" size="mini" @click="remove(index)"
                  >Remove</el-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 
    <div class="mar-t20"
    Notes: 
    1. v-cloak directive ka use tab kerte hai jab hum refresh kerte hai
    to one time hidden div bhi show hoti hai. css ========= [v-cloak] { display:
    none;} 
    2. api.nasa.gov - for API
    <img src="../assets/images/vue-api.png" style="max-width: 100%" />
    3. https://www.npmjs.com/package/axios

    </div>
     -->
  </div>
</template>
<style lang="scss" scoped>
.mar-t20 {
  margin-top: 20px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "Vue API Call",
      imageData: [],
      contentData: []
      // imgSrc: "",
      // imgTitle: ""
    };
  },
  computed: {
    totalLength: function() {
      return this.contentData.length;
    }
  },
  created: function() {
    this.fetchApod();
    this.fetchAsteroid();
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    },
    fetchApod: function() {
      let apiKey = "WeEeaQbNICBTcti6aqekyg3cJhY5FxAtDR9sKQ7g";
      let url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
      axios
        .get(url)
        .then(response => {
          this.imageData = response.data;
          // this.imgSrc = response.data.hdurl;
          // this.imgTitle = response.data.title;
          // handle success
          console.log(response);
        })
        .catch(error => console.log(error));
    },
    fetchAsteroid: function() {
      let apiKey = "WeEeaQbNICBTcti6aqekyg3cJhY5FxAtDR9sKQ7g";
      let url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=" + apiKey;
      axios
        .get(url)
        .then(response => {
          this.contentData = response.data.near_earth_objects;
          // this.contentData = response.data.near_earth_objects.slice(0, 5);
          console.log(response);
        })
        .catch(error => console.log(error));
    },
    getCloseApproachDate: function(a) {
      if (a.close_approach_data.length > 0) {
        return a.close_approach_data[0].close_approach_date;
      }
      return "N/A";
    },
    remove: function(index) {
      this.contentData.splice(index, 1);
    }
  }
};
</script>
