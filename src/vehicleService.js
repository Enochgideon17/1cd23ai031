function processVehicles(vehicles) {
    console.log(" VEHICLES \n");
    if (!vehicles || vehicles.length === 0) {
        console.log("No vehicles found.");
        return;
    }
    vehicles.forEach(vehicle => {
        const impact = vehicle.Impact || 0;
        const duration = vehicle.Duration || 1;
        vehicle.priority = impact / duration;
    });
    vehicles.sort((a, b) => b.priority - a.priority);
    console.log("Top Vehicle Tasks:\n");
    vehicles.forEach((vehicle, index) => {
        console.log(`Vehicle ${index + 1}`);
        console.log(`Task ID:${vehicle.TaskID}`);
        console.log(`Duration:${vehicle.Duration} hours`);
        console.log(`Impact: ${vehicle.Impact}`);
        console.log(`Priority:${vehicle.priority.toFixed(2)}`);
    });
    const totalImpact = vehicles.reduce((sum, v) => sum + (v.Impact || 0), 0);
    const totalDuration = vehicles.reduce((sum, v) => sum + (v.Duration || 0), 0);
    console.log("\n SUMMARY");
    console.log(`Total Vehicles: ${vehicles.length}`);
    console.log(`Total Impact: ${totalImpact}`);
    console.log(`Total Hours: ${totalDuration}`);
}
module.exports = {
    processVehicles};