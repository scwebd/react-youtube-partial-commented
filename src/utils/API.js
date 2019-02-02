import axios from "axios";
const apiKey = "AIzaSyB8MPYmpMIAAnuoUtJ-BGn9oXrhYqUX6UA";

// this object might hold a number of different axios calls to interact with external APIS, and/or
// calls to GET/POST/PUT/DELETE to our own back-end routes (for the purposes of running CRUD operations
// on our db tables/collections); we could put these methods directly inside our components, but keeping
// them all corraled in here makes them more reusable, and also keeps all these API-type interactions
// safe and centralized
export default {
    searchVideos: function(term) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
}

