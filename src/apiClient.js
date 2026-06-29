const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";
async function getNotifications(token) {
    try {
        const response = await axios.get(
            `${BASE_URL}/notifications`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.notifications;
    } catch (error) {
        console.error("Error fetching notifications:");
        console.error(error.response?.data || error.message);
        return [];
    }
}

async function getDepots(token) {
    try {
        const response = await axios.get(
            `${BASE_URL}/depots`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                }, });
        return response.data.depots;
    } catch (error) {
        console.error("Error fetching depots:");
        console.error(error.response?.data || error.message);
        return [];
    }
}
async function getVehicles(token) {
    try {
        const response = await axios.get(
            `${BASE_URL}/vehicles`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data.vehicles;
    } catch (error) {
        console.error("Error fetching vehicles:");
        console.error(error.response?.data || error.message);
        return [];
    }
}
module.exports = {
    getNotifications,
    getDepots,
    getVehicles,};