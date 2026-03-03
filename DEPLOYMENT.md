# Deployment Guide

Complete guide to deploy your MERN portfolio website to production.

## 📋 Pre-Deployment Checklist

- [ ] Test all features locally
- [ ] Update personal information in all components
- [ ] Replace placeholder images and links
- [ ] Set up MongoDB Atlas account
- [ ] Set up Gmail App Password
- [ ] Update environment variables
- [ ] Test contact form functionality
- [ ] Verify responsive design on all devices

## 🗄️ MongoDB Atlas Setup

1. **Create Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free account

2. **Create Cluster**:
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select region closest to your users
   - Click "Create Cluster"

3. **Database Access**:
   - Go to "Database Access"
   - Click "Add New Database User"
   - Create username and password
   - Set permissions to "Read and write to any database"

4. **Network Access**:
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (0.0.0.0/0)
   - Or add specific IPs for better security

5. **Get Connection String**:
   - Go to "Database" > "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

## 🚀 Backend Deployment (Render)

### Option 1: Render (Recommended - Free Tier Available)

1. **Prepare Backend**:
   - Ensure `server/package.json` has start script:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

2. **Create Render Account**:
   - Go to [Render](https://render.com)
   - Sign up with GitHub

3. **Deploy**:
   - Click "New +" > "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: portfolio-backend
     - **Root Directory**: server
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

4. **Environment Variables**:
   Add these in Render dashboard:
   ```
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-connection-string
   NODE_ENV=production
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://portfolio-backend.onrender.com`)

### Option 2: Railway

1. **Create Account**: [Railway](https://railway.app)
2. **New Project** > Deploy from GitHub
3. Select your repository
4. Add environment variables
5. Deploy

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Login**: `heroku login`
3. **Create App**: `heroku create portfolio-backend`
4. **Set Environment Variables**:
   ```bash
   heroku config:set MONGODB_URI=your-connection-string
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   ```
5. **Deploy**:
   ```bash
   cd server
   git init
   heroku git:remote -a portfolio-backend
   git add .
   git commit -m "Deploy backend"
   git push heroku main
   ```

## 🌐 Frontend Deployment (Vercel)

### Option 1: Vercel (Recommended)

1. **Update API URL**:
   In `client/src/components/Contact.jsx`, replace:
   ```javascript
   await axios.post('http://localhost:5000/api/contact', formData);
   ```
   With:
   ```javascript
   await axios.post('https://your-backend-url.onrender.com/api/contact', formData);
   ```

2. **Build Test**:
   ```bash
   cd client
   npm run build
   ```

3. **Deploy to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up with GitHub
   - Click "Add New" > "Project"
   - Import your repository
   - Configure:
     - **Framework Preset**: Vite
     - **Root Directory**: client
     - **Build Command**: `npm run build`
     - **Output Directory**: dist
   - Click "Deploy"

4. **Custom Domain** (Optional):
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Update API URL** (same as Vercel)

2. **Create `netlify.toml`** in client folder:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy**:
   - Go to [Netlify](https://netlify.com)
   - Drag and drop `dist` folder
   - Or connect GitHub repository

## 🔒 Security Best Practices

1. **Environment Variables**:
   - Never commit `.env` files
   - Use different credentials for production
   - Rotate secrets regularly

2. **CORS Configuration**:
   Update `server/server.js`:
   ```javascript
   app.use(cors({
     origin: 'https://your-frontend-domain.vercel.app',
     credentials: true
   }));
   ```

3. **Rate Limiting**:
   Install and configure:
   ```bash
   npm install express-rate-limit
   ```

4. **Input Validation**:
   Already implemented in contact route

## 📊 Monitoring

### Backend Monitoring
- Check Render/Railway logs for errors
- Monitor MongoDB Atlas metrics
- Set up email alerts for failures

### Frontend Monitoring
- Use Vercel Analytics
- Check browser console for errors
- Test on multiple devices

## 🔄 Continuous Deployment

Both Vercel and Render support automatic deployments:
- Push to `main` branch triggers deployment
- Preview deployments for pull requests
- Rollback to previous versions if needed

## 🐛 Troubleshooting

### Contact Form Not Working
1. Check backend logs
2. Verify CORS settings
3. Test API endpoint directly
4. Check email credentials
5. Verify MongoDB connection

### Build Failures
1. Check Node.js version compatibility
2. Clear cache and reinstall dependencies
3. Review build logs for specific errors

### 404 Errors on Refresh
- Ensure redirect rules are configured (Netlify/Vercel)
- Check router configuration

## 📱 Post-Deployment Testing

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Submit contact form
- [ ] Check email delivery
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Check loading speed
- [ ] Test 404 page

## 🎉 You're Live!

Your portfolio is now deployed and accessible worldwide!

### Share Your Portfolio
- Update resume with portfolio link
- Share on LinkedIn
- Add to GitHub profile
- Include in email signature

---

Need help? Check the main README.md or open an issue on GitHub.
