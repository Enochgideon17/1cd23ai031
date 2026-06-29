function calculatePriority(notification) {
    let score = 0;

    switch (notification.Type) {
        case "Placement":
            score += 100;
            break;

        case "Result":
            score += 80;
            break;

        case "Event":
            score += 60;
            break;

        default:
            score += 40;
    }
    const now = new Date();
    const timestamp = new Date(notification.Timestamp);
    const diffHours = (now - timestamp) / (1000 * 60 * 60);
    if (diffHours <= 1)
        score += 50;
    else if (diffHours <= 24)
        score += 30;
    else if (diffHours <= 72)
        score += 15;

    return score;
}
function processNotifications(notifications) {
    console.log(" TOP NOTIFICATIONS\n");

    if (!notifications || notifications.length === 0) {
        console.log("No notifications found.");
        return;
    }
    notifications.forEach(notification => {
        notification.priority = calculatePriority(notification);
    });
    notifications.sort((a, b) => b.priority - a.priority);
    const topNotifications = notifications.slice(0, 10);
    topNotifications.forEach((notification, index) => {
        console.log(`Notification ${index + 1}`);
        console.log(`ID        : ${notification.ID}`);
        console.log(`Type      : ${notification.Type}`);
        console.log(`Message   : ${notification.Message}`);
        console.log(`Timestamp : ${notification.Timestamp}`);
        console.log(`Priority  : ${notification.priority}`);
    
    });
}
module.exports = {
    processNotifications};