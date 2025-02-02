// Bottom Navigation Logic
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items and sections
        navItems.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add active class to clicked item and corresponding section
        item.classList.add('active');
        const target = document.getElementById(item.getAttribute('data-target'));
        target.classList.add('active');
    });
});

// Class Schedule Logic
const orarLectii = {
    Monday: ["Math", "Physics", "Chemistry", "English", "History"],
    Tuesday: ["Biology", "Geography", "Literature", "PE", "Art"],
    Wednesday: ["Physics", "Math", "Foreign Lang", "Chemistry", "Music"],
    Thursday: ["History", "Literature", "Biology", "Math", "Geography"],
    Friday: ["English", "PE", "Physics", "Math", "Chemistry"]
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let currentDayIndex = 0;

document.getElementById('prev-day').addEventListener('click', () => {
    currentDayIndex = (currentDayIndex - 1 + days.length) % days.length;
    updateDay();
});

document.getElementById('next-day').addEventListener('click', () => {
    currentDayIndex = (currentDayIndex + 1) % days.length;
    updateDay();
});

function updateDay() {
    const currentDay = days[currentDayIndex];
    document.getElementById('current-day').textContent = currentDay;
    populateSchedule(currentDay);
}

function populateSchedule(day) {
    const lectiiList = document.getElementById('lectii-list');
    lectiiList.innerHTML = ''; // Clear previous list

    orarLectii[day].forEach(subject => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="subject">${subject}</span>
        `;
        lectiiList.appendChild(li);
    });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Initialize
updateDay();