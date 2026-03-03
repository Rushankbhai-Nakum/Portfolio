# MERN Portfolio Website

A minimal, professional full-stack portfolio website with black and white theme.

## 🚀 Features

- **Responsive Design**: Fully responsive for laptop, tablet, and mobile devices
- **Modern UI**: Clean black and white theme with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Scroll Animations**: Smooth reveal animations on scroll
- **Active Navigation**: Highlighted active links in navbar
- **Loading Animation**: Professional loading screen
- **404 Page**: Custom not found page
- **Contact Form**: Integrated with backend and email notifications
- **REST API**: Clean Express.js API structure
- **MongoDB Integration**: Store contact messages
- **Email Service**: Nodemailer for contact form submissions

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── public/
│   │   └── favicon.svg    # Website favicon
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── ScrollReveal.jsx
│   │   ├── utils/
│   │   │   └── seo.js     # SEO utility functions
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                # Backend Node.js application
    ├── models/
    │   └── Contact.js     # MongoDB contact schema
    ├── routes/
    │   └── contact.js     # Contact API routes
    ├── .env.example       # Environment variables template
    ├── server.js          # Express server
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Gmail account (for email service)

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

4. **Gmail App Password Setup**:
   - Go to Google Account Settings
   - Enable 2-Step Verification
   - Go to Security > App passwords
   - Generate a new app password for "Mail"
   - Use that 16-character password as `EMAIL_PASS`

5. Start development server:
```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:3000`

## 🎨 Customization

### Update Personal Information

1. **About Page** (`client/src/components/About.jsx`):
   - Change "Your Name" to your actual name
   - Update professional summary
   - Modify skills list

2. **Education** (`client/src/components/Education.jsx`):
   - Update degree, institution, year, and scores

3. **Experience** (`client/src/components/Experience.jsx`):
   - Add your internship/work experience details

4. **Projects** (`client/src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update GitHub and live demo links

5. **Footer** (`client/src/components/Footer.jsx`):
   - Update social media links

6. **SEO** (`client/src/utils/seo.js`):
   - Customize meta tags for each page

### Change Theme Colors

Edit `client/tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#000000',  // Change black
      secondary: '#ffffff' // Change white
    }
  }
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. Build the project:
```bash
cd client
npm run build
```

2. Deploy the `dist` folder to Vercel or Netlify

3. Update API URL in `Contact.jsx` to your backend URL

### Backend (Heroku/Railway/Render)

1. Set environment variables on your hosting platform

2. Deploy server folder

3. Update MongoDB URI to production database

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Laptop/Desktop**: > 1024px

## ✨ Features Implemented

- ✅ Clean folder structure
- ✅ REST API architecture
- ✅ Fully responsive design
- ✅ Tailwind CSS styling
- ✅ Smooth scrolling
- ✅ SEO meta tags
- ✅ Clean commented code
- ✅ Deployment ready
- ✅ Loading animation
- ✅ Scroll reveal animations
- ✅ Active navbar highlighting
- ✅ 404 page
- ✅ Favicon
- ✅ Form validation
- ✅ Email notifications
- ✅ MongoDB integration
- ✅ Environment variables

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@gmail.com

---

Made with ❤️ using MERN Stack
