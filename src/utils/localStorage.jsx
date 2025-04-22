const employee = [
  {
    id: 1,
    email: "aman.singh@example.com",
    password: "aman123pass",
    tasks: [
      {
        title: "Fix login issue",
        description: "Resolve 500 error on login page",
        date: "2025-04-20",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update user profile UI",
        description: "Redesign profile section using Tailwind",
        date: "2025-04-18",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Write unit tests",
        description: "Add unit tests for task module",
        date: "2025-04-16",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "riya.sharma@example.com",
    password: "riya123secure",
    tasks: [
      {
        title: "Design new dashboard",
        description: "Create wireframes for the new admin dashboard",
        date: "2025-04-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Add dark mode",
        description: "Implement dark mode with toggle switch",
        date: "2025-04-19",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Team meeting",
        description: "Attend sprint planning with team",
        date: "2025-04-15",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix navbar bug",
        description: "Responsive issue in mobile navbar",
        date: "2025-04-17",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "vikram.mehta@example.com",
    password: "vik123ram",
    tasks: [
      {
        title: "Set up CI/CD",
        description: "Integrate GitHub Actions for deployment",
        date: "2025-04-20",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Refactor auth module",
        description: "Clean and optimize auth logic",
        date: "2025-04-16",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Monitor logs",
        description: "Check for errors in server logs",
        date: "2025-04-14",
        category: "Monitoring",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    email: "neha.verma@example.com",
    password: "neha123verma",
    tasks: [
      {
        title: "Research competitors",
        description: "Analyze features from 3 competitors",
        date: "2025-04-19",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client presentation",
        description: "Present progress to client on Zoom",
        date: "2025-04-18",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Test email flow",
        description: "Verify password reset email delivery",
        date: "2025-04-17",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "raj.patel@example.com",
    password: "rajpatel123",
    tasks: [
      {
        title: "Write documentation",
        description: "Document API endpoints",
        date: "2025-04-20",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix image upload bug",
        description: "Resolve S3 upload issue in profile section",
        date: "2025-04-19",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Weekly report",
        description: "Send weekly work summary to manager",
        date: "2025-04-18",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Admin Boss",
    email: "admin@example.com",
    password: "admin123secure",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
