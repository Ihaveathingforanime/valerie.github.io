const dataDay = document.querySelector('[data-testid="currentDay"]');
const dataTime = document.querySelector('[data-testid="currentTime"]');

function updateCurrentTimeUTC() {
    const time = new Date()
    let currentTimeUTC = time.toUTCString();
    dataTime.textContent = currentTimeUTC
}

function updateCurrentDayUTC() {
    const days = {
        timeZone: 'UTC',
        weekday: 'long',
    };
    const day = new Date().toLocaleDateString('en-US', days);
    dataDay.textContent = day
}

updateCurrentDayUTC();
updateCurrentTimeUTC();
