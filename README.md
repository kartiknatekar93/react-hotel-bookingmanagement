# Hotel Management Dashboard

> A full-featured internal hotel management web application built for hotel staff to manage cabins, bookings, and guests — with real-time data, analytics, and a polished UI.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat-square&logo=supabase)
![React Query](https://img.shields.io/badge/React_Query-Server_State-FF4154?style=flat-square&logo=reactquery)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=flat-square&logo=vite)
![Netlify](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=flat-square&logo=netlify)

**🔗 Live Demo → [react-hotel-bookingmanagement.netlify.app](https://react-hotel-bookingmanagement.netlify.app)**

- username: kartik@example.com
- password: pass1234

---

## 📸 Preview

> Login with the demo credentials provided on the login page to explore the app.

---

## 📌 About the Project

The Wild Oasis is an **internal hotel management dashboard** designed for hotel employees — not customers. It covers the full operational lifecycle of a hotel: from managing cabin inventory to handling guest check-ins and check-outs, with a real-time analytics dashboard to track performance.

Built to demonstrate advanced React architecture, real-world backend integration with Supabase, and production-level patterns like React Query, Compound Components, and HOCs.

---

## ✨ Key Features

### 🔐 Authentication & User Management

- Secure login for hotel employees via Supabase Auth (JWT-based)
- New accounts can only be created from **within** the app — no public sign-up
- Users can update their name, password, and upload a profile avatar

### 🛖 Cabin Management

- Full CRUD for cabins — create, edit, duplicate, and delete
- Upload cabin photos stored in Supabase Storage
- Table view showing name, capacity, price, and active discounts

### 📋 Booking Management

- Table view of all bookings with filtering by status: `Unconfirmed`, `Checked In`, `Checked Out`
- View booking details: guest info, nights, breakfast, payment status
- Check guests in/out directly from the dashboard
- Confirm payment receipt and optionally add breakfast on check-in

### 📊 Analytics Dashboard

- Stats for the last **7, 30, or 90 days**:
  - Total bookings, sales, check-ins, occupancy rate
  - Daily sales chart (total vs. extras like breakfast)
  - Stay duration distribution chart
- Today's activity panel: who's arriving and departing today

### ⚙️ App Settings

- Configure global settings: breakfast price, min/max booking nights, max guests per booking

### 🌙 Dark Mode

- Full dark/light theme toggle, persisted across sessions

---

## 🛠️ Tech Stack

| Category           | Technology                   |
| ------------------ | ---------------------------- |
| Frontend Framework | React 18                     |
| Build Tool         | Vite                         |
| Backend & Database | Supabase (PostgreSQL)        |
| Authentication     | Supabase Auth                |
| File Storage       | Supabase Storage             |
| Server State       | React Query (TanStack Query) |
| Routing            | React Router v6              |
| Forms              | React Hook Form              |
| Styling            | Styled Components            |
| Charts             | Recharts                     |
| Notifications      | React Hot Toast              |
| Deployment         | Netlify                      |

---

## 🧠 Advanced React Patterns Used

- **Compound Component Pattern** — used for reusable Modal, Table, and Menu components with implicit shared state via Context
- **Higher-Order Components (HOC)** — used for click-outside detection logic, shared across dropdowns and modals
- **Custom Hooks** — data-fetching logic abstracted into hooks per feature (e.g. `useBookings`, `useCabins`, `useCheckIn`)
- **Feature-based Folder Structure** — code organized by domain (`bookings/`, `cabins/`, `dashboard/`) rather than by type

---

## 📁 Project Structure

```
src/
├── features/
│   ├── authentication/
│   ├── bookings/
│   ├── cabins/
│   ├── dashboard/
│   ├── check-in-out/
│   └── settings/
├── hooks/
├── services/        # Supabase API calls
├── ui/              # Reusable UI components
├── utils/
└── App.jsx
```

---

````

### Environment Variables

Create a `.env.local` file in the root:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_anon_key
````

---

## 📚 What I Learned

- Managing **server state** cleanly with React Query — caching, mutations, cache invalidation
- Implementing **Supabase** for auth, database, real-time updates, and file storage
- Building scalable, reusable components using **Compound Component Pattern**
- Writing **performant forms** with React Hook Form (uncontrolled inputs)
- Theming with **Styled Components** ThemeProvider for dark/light mode
- Structuring a large React project with a **feature-based architecture**

---

## 🙏 Acknowledgments

This project was built as part of the(https://www.udemy.com/course/the-ultimate-react-course) by **Jonas Schmedtmann**, extended and deployed independently for portfolio purposes.

---
