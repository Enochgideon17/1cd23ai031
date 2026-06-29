const { login } = require("./auth");
const {
  getNotifications,
  getDepots,
  getVehicles,
} = require("./apiClient");
const { processNotifications } = require("./notificationService");
const { processDepots } = require("./depotService");
const { processVehicles } = require("./vehicleService");

async function main() {
  try {
    console.log(" Affordmed Evaluation");
    console.log("Logging in...");
    const token = await login();

    if (!token) {
      console.log("Authentication failed.");
      return;
    }
    console.log("Login Successful!\n");
    console.log("Fetching Notifications...");
    const notifications = await getNotifications(token);
    processNotifications(notifications);
    console.log("Fetching Depots...");
    const depots = await getDepots(token);

    processDepots(depots);

    console.log("Fetching Vehicles...");
    const vehicles = await getVehicles(token);
    processVehicles(vehicles);

    console.log("Evaluation Completed Successfully!");
} catch (error) {
    console.error("\nUnexpected Error:");
    console.error(error.message);
  }
}
main();