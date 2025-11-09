TYM Camp System

TYM Camp Registration & Payment System is a web application for The Young Muslims (TYM) that allows participants to register for camps online, pay their fees securely, and allows admins to manage and track registrations.

🌟 Features

Landing page that directs users to registration

Camp registration form with participant details

Online payment integration via Paystack

Automatic saving of registration and payment records in Firebase Firestore

Admin dashboard with secure login to:

View all registrations

Filter by payment status, location, etc.

Export data as Excel or PDF

Optional: Confirmation emails or printable registration slips

🛠️ Tech Stack

Frontend: React + TailwindCSS

Backend / Database: Firebase (Firestore & Authentication)

Payment Gateway: Paystack

Hosting: Vercel (optional)

🚀 Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/tym-camp-system.git
cd tym-camp-system

Install dependencies:

npm install

Set up Firebase:

Create a Firebase project

Enable Firestore and Authentication

Replace your config in src/firebase.js

Run the app locally:

npm start

🔑 Admin Access

Admins can log in via /login using Firebase-authenticated email and password.

Only authenticated admins can access the /admin dashboard.

💳 Payment Integration

Payment is handled via Paystack

Successful payments automatically update participant records in Firestore

📁 Project Structure
tym-camp-system/
│
├── src/
│ ├── components/
│ │ ├── LandingPage.jsx
│ │ ├── RegistrationForm.jsx
│ │ ├── PaymentPage.jsx
│ │ ├── SuccessPage.jsx
│ │ └── AdminDashboard.jsx
│ │
│ ├── firebase.js
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── tailwind.config.js

📌 Future Improvements

Email/SMS confirmation on registration and payment

QR code generation for participant ID

Multiple camp branches and batch registrations

Offline payment verification
