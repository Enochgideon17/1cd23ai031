const axios = require("axios");
const BASE_URL = "http://4.224.186.213/evaluation-service";
const userData = {
    email: "enochgideon17@gmail.com",
    name: "Enoch G",
    rollNo: "1CD23AI031",
    accessCode: "ApnpTm",
    githubUsername: "Enochgideon17",
    clientID: "46b14c65-623b-44d3-ba52-a429fc6b0a32",
    clientSecret: "hZNkYDtSQqUDeqRb"
};
async function login() {
    try {
        const response = await axios.post(
            `${BASE_URL}/auth`,
            userData,
            { headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Login Successful");
        return response.data.access_token;
    } catch (error) {
        console.error("Login Failed!");
        if (error.response) {
            console.error(error.response.data);
        } else {
            console.error(error.message);
    }
        return null;
    }
}
module.exports = {
    login};