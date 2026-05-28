// Dummy data for the AI Resume Analyzer demo
export const skillsDetected = ["JavaScript", "HTML", "CSS", "React", "PHP", "Laravel", "SQL"];
export const missingSkills = ["TypeScript", "Docker", "AWS", "GraphQL", "Next.js"];

export const suggestions = [
  "Add measurable achievements with metrics (e.g. 'improved load time by 40%').",
  "Include a concise professional summary at the top of your resume.",
  "List 2–3 high-impact projects with links to live demos.",
  "Tailor the skills section to match the target job description keywords.",
];

export const jobs = [
  { title: "Frontend Developer", company: "Northwind Labs", location: "Remote", salary: "$70k – $95k", match: 94, exp: "2+ yrs" },
  { title: "React Developer", company: "Pixelforge Studio", location: "Berlin, DE", salary: "$80k – $110k", match: 91, exp: "3+ yrs" },
  { title: "PHP Developer", company: "Acme CMS", location: "Remote", salary: "$60k – $85k", match: 86, exp: "2+ yrs" },
  { title: "Laravel Developer", company: "Kestrel Tech", location: "Bangalore, IN", salary: "$45k – $70k", match: 83, exp: "2+ yrs" },
  { title: "UI/UX Designer", company: "Lumen Design Co.", location: "New York, US", salary: "$75k – $105k", match: 78, exp: "3+ yrs" },
];

export const courses = [
  { title: "Mastering Modern React", desc: "Hooks, Suspense, and server components from scratch.", duration: "12h", rating: 4.9, hue: 280 },
  { title: "TypeScript for Pros", desc: "Type-safe, scalable apps with confidence.", duration: "9h", rating: 4.8, hue: 220 },
  { title: "AWS Cloud Essentials", desc: "Deploy and scale production workloads on AWS.", duration: "15h", rating: 4.7, hue: 30 },
  { title: "Docker & DevOps", desc: "Containerize, ship and orchestrate your apps.", duration: "10h", rating: 4.8, hue: 200 },
];

export const scoreTrend = [
  { month: "Jan", score: 56 },
  { month: "Feb", score: 62 },
  { month: "Mar", score: 67 },
  { month: "Apr", score: 71 },
  { month: "May", score: 76 },
  { month: "Jun", score: 82 },
];

export const skillMatch = [
  { skill: "React", value: 92 },
  { skill: "JS", value: 88 },
  { skill: "CSS", value: 80 },
  { skill: "PHP", value: 74 },
  { skill: "SQL", value: 70 },
  { skill: "Laravel", value: 68 },
];

export const notifications = [
  { title: "New job match", body: "React Developer at Pixelforge Studio — 91% match.", time: "2m ago" },
  { title: "Resume analyzed", body: "Your latest resume scored 82/100.", time: "1h ago" },
  { title: "Course recommendation", body: "Try 'TypeScript for Pros' to boost your score.", time: "Yesterday" },
];