function processDepots(depots) {
    console.log(" DEPOTS\n");

    if (!depots || depots.length === 0) {
        console.log("No depots found.\n");
        return;
    }
    let totalMechanicHours = 0;
    depots.forEach((depot, index) => {
        console.log(`Depot ${index + 1}`);
        console.log(`ID:${depot.ID}`);
        console.log(`Mechanic Hours : ${depot.MechanicHours}`);
        totalMechanicHours += depot.MechanicHours;
    });
    console.log(`Total Depots: ${depots.length}`);
    console.log(`Total Mechanic Hours: ${totalMechanicHours}`);
}
module.exports = {
    processDepots,};