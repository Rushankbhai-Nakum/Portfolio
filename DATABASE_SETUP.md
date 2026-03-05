# MongoDB Database Setup Guide

Complete step-by-step guide to connect MongoDB to your MERN Portfolio project.

## 📋 Table of Contents
1. [Option 1: MongoDB Atlas (Cloud) - Recommended](#option-1-mongodb-atlas-cloud---recommended)
2. [Option 2: Local MongoDB Installation](#option-2-local-mongodb-installation)
3. [Configure Your Project](#configure-your-project)
4. [Test Database Connection](#test-database-connection)
5. [Troubleshooting](#troubleshooting)

---

## Option 1: MongoDB Atlas (Cloud) - Recommended

### Step 1: Create MongoDB Atlas Account

1. **Go to MongoDB Atlas**
   - Visit: https://www.mongodb.com/cloud/atlas
   - Click "Try Free" or "Sign Up"

2. **Sign Up**
   - Use Google/GitHub account OR
   - Create account with email and password
   - Verify your email address

### Step 2: Create a Cluster

1. **Choose Deployment Option**
   - Click "Build a Database"
   - Select **"M0 FREE"** tier (completely free)
   - Choose cloud provider: **AWS** (recommended)
   - Select region closest to you (e.g., Mumbai for India)
   - Cluster Name: `Portfolio` (or any name you prefer)
   - Click **"Create"**

2. **Wait for Cluster Creation**
   - Takes 3-5 minutes
   - You'll see "Cluster0" being created

### Step 3: Create Database User

1. **Security Quickstart**
   - You'll see "Security Quickstart" screen
   - Choose **"Username and Password"** authentication

2. **Create User**
   - Username: `portfolioAdmin` (or your choice)
   - Password: Click "Autogenerate Secure Password" OR create your own
   - **IMPORTANT**: Copy and save this password securely!
   - Click **"Create User"**

### Step 4: Configure Network Access

1. **Add IP Address**
   - You'll see "Where would you like to connect from?"
   - Click **"Add My Current IP Address"** OR
   - Click **"Allow Access from Anywhere"** (for development)
     - This adds `0.0.0.0/0` (all IPs)
   - Click **"Finish and Close"**

### Step 5: Get Connection String

1. **Go to Database**
   - Click "Database" in left sidebar
   - You'll see your cluster "Cluster0"

2. **Connect to Cluster**
   - Click **"Connect"** button on your cluster
   - Choose **"Connect your application"**

3. **Copy Connection String**
   - Driver: **Node.js**
   - Version: **5.5 or later**
   - Copy the connection string:
   ```
   mongodb+srv://portfolioAdmin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

4. **Modify Connection String**
   - Replace `<password>` with your actual password
   - Add database name after `.net/`:
   ```
   mongodb+srv://portfolioAdmin:YourPassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

### Step 6: Configure Your Project

1. **Navigate to Server Directory**
   ```bash
   cd server
   ```

2. **Create `.env` File**
   ```bash
   # On Windows (PowerShell)
   New-Item .env

   # On Mac/Linux
   touch .env
   ```

3. **Add Environment Variables**
   Open `server/.env` and add:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://portfolioAdmin:YourPassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

4. **Save the File**

---

## Option 2: Local MongoDB Installation

### Step 1: Download MongoDB

1. **Visit MongoDB Download Center**
   - Go to: https://www.mongodb.com/try/download/community
   - Select your operating system:
     - Windows
     - macOS
     - Linux

2. **Download Installer**
   - Version: Latest stable version
   - Package: MSI (Windows) or DMG (Mac)
   - Click "Download"

### Step 2: Install MongoDB

#### For Windows:

1. **Run Installer**
   - Double-click the downloaded `.msi` file
   - Click "Next"

2. **Choose Setup Type**
   - Select **"Complete"** installation
   - Click "Next"

3. **Service Configuration**
   - Check "Install MongoDB as a Service"
   - Service Name: `MongoDB`
   - Data Directory: `C:\Program Files\MongoDB\Server\7.0\data`
   - Log Directory: `C:\Program Files\MongoDB\Server\7.0\log`
   - Click "Next"

4. **Install MongoDB Compass** (Optional)
   - Check "Install MongoDB Compass"
   - This is a GUI tool for MongoDB
   - Click "Next"

5. **Complete Installation**
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

#### For macOS:

1. **Using Homebrew** (Recommended)
   ```bash
   # Install Homebrew if not installed
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install MongoDB
   brew tap mongodb/brew
   brew install mongodb-community@7.0

   # Start MongoDB
   brew services start mongodb-community@7.0
   ```

2. **Manual Installation**
   - Download DMG file
   - Open DMG and drag MongoDB to Applications
   - Follow on-screen instructions

#### For Linux (Ubuntu):

```bash
# Import MongoDB public GPG key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Create list file
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Update package database
sudo apt-get update

# Install MongoDB
sudo apt-get install -y mongodb-org

# Start MongoDB
sudo systemctl start mongod

# Enable MongoDB to start on boot
sudo systemctl enable mongod
```

### Step 3: Verify MongoDB Installation

1. **Check if MongoDB is Running**

   **Windows:**
   ```powershell
   # Open PowerShell as Administrator
   Get-Service MongoDB
   ```

   **Mac/Linux:**
   ```bash
   # Check status
   brew services list  # Mac
   sudo systemctl status mongod  # Linux
   ```

2. **Test MongoDB Connection**
   ```bash
   # Open MongoDB Shell
   mongosh

   # You should see:
   # Current Mongosh Log ID: xxxxx
   # Connecting to: mongodb://127.0.0.1:27017
   # Using MongoDB: 7.0.x
   ```

3. **Exit MongoDB Shell**
   ```bash
   exit
   ```

### Step 4: Configure Your Project for Local MongoDB

1. **Navigate to Server Directory**
   ```bash
   cd server
   ```

2. **Create `.env` File**
   ```bash
   # Windows
   New-Item .env

   # Mac/Linux
   touch .env
   ```

3. **Add Environment Variables**
   Open `server/.env` and add:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

---

## Configure Your Project

### Step 1: Install Dependencies

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install
```

### Step 2: Verify Dependencies

Check `server/package.json` includes:
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7"
  }
}
```

### Step 3: Check Server Configuration

Verify `server/server.js` has MongoDB connection:
```javascript
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✓ MongoDB connected successfully'))
  .catch(err => {
    console.error('✗ MongoDB connection error:', err);
    process.exit(1);
  });
```

---

## Test Database Connection

### Step 1: Start Backend Server

```bash
# Navigate to server directory
cd server

# Start development server
npm run dev
```

### Step 2: Check Console Output

You should see:
```
✓ Server running on port 5000
✓ Environment: development
✓ MongoDB connected successfully
```

### Step 3: Test Contact Form

1. **Start Frontend**
   ```bash
   # Open new terminal
   cd client
   npm run dev
   ```

2. **Open Browser**
   - Go to `http://localhost:3000`
   - Navigate to Contact page
   - Fill out the form
   - Click "Contact Me"

3. **Check Database**

   **MongoDB Atlas:**
   - Go to Atlas Dashboard
   - Click "Browse Collections"
   - You should see `portfolio` database
   - Inside: `contacts` collection with your message

   **Local MongoDB:**
   ```bash
   # Open MongoDB Shell
   mongosh

   # Switch to portfolio database
   use portfolio

   # View all contacts
   db.contacts.find().pretty()

   # You should see your contact form submission
   ```

---

## Troubleshooting

### Issue 1: "MongooseServerSelectionError"

**Error:**
```
MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**

1. **Check if MongoDB is Running**
   ```bash
   # Windows
   Get-Service MongoDB

   # Mac
   brew services list

   # Linux
   sudo systemctl status mongod
   ```

2. **Start MongoDB**
   ```bash
   # Windows
   net start MongoDB

   # Mac
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

3. **Check Connection String**
   - Verify `MONGODB_URI` in `.env` file
   - Ensure no typos in connection string

### Issue 2: "Authentication Failed"

**Error:**
```
MongoServerError: Authentication failed
```

**Solutions:**

1. **Check Username/Password**
   - Verify credentials in connection string
   - Password should not contain special characters like `@`, `#`, `%`
   - If it does, URL encode them:
     - `@` → `%40`
     - `#` → `%23`
     - `%` → `%25`

2. **Recreate Database User**
   - Go to MongoDB Atlas
   - Database Access → Delete old user
   - Create new user with simple password

### Issue 3: "Network Error" (Atlas)

**Error:**
```
MongoNetworkError: connection timed out
```

**Solutions:**

1. **Check IP Whitelist**
   - Go to MongoDB Atlas
   - Network Access
   - Add your current IP or use `0.0.0.0/0`

2. **Check Firewall**
   - Ensure port 27017 is not blocked
   - Disable VPN temporarily

### Issue 4: "Database Not Found"

**Error:**
```
Database 'portfolio' not found
```

**Solution:**
- MongoDB creates database automatically on first write
- Submit a contact form to create the database
- Database appears after first document is inserted

### Issue 5: ".env File Not Loading"

**Error:**
```
MONGODB_URI is undefined
```

**Solutions:**

1. **Check File Name**
   - Must be exactly `.env` (not `env.txt` or `.env.txt`)
   - No spaces in filename

2. **Check File Location**
   - Must be in `server/` directory
   - Not in root or client directory

3. **Restart Server**
   ```bash
   # Stop server (Ctrl+C)
   # Start again
   npm run dev
   ```

4. **Check dotenv Import**
   ```javascript
   // server/server.js
   import dotenv from 'dotenv';
   dotenv.config();  // Must be at the top
   ```

---

## Quick Reference

### MongoDB Atlas Connection String Format:
```
mongodb+srv://username:password@cluster.xxxxx.mongodb.net/database?retryWrites=true&w=majority
```

### Local MongoDB Connection String Format:
```
mongodb://localhost:27017/database
```

### Common MongoDB Commands:
```bash
# Show all databases
show dbs

# Use specific database
use portfolio

# Show collections
show collections

# Find all documents
db.contacts.find()

# Find with formatting
db.contacts.find().pretty()

# Count documents
db.contacts.countDocuments()

# Delete all documents
db.contacts.deleteMany({})

# Drop database
db.dropDatabase()
```

---

## Next Steps

After successful database connection:

1. ✅ Test contact form submission
2. ✅ Verify data in MongoDB
3. ✅ Test email notifications
4. ✅ Deploy to production (see DEPLOYMENT.md)

---

## Need Help?

- 📧 MongoDB Support: https://www.mongodb.com/support
- 📖 MongoDB Docs: https://docs.mongodb.com/
- 💬 Community Forum: https://www.mongodb.com/community/forums/

---

**Congratulations! Your database is now connected! 🎉**
