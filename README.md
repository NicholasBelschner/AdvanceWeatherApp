# 🌦️ Advanced Weather App

A futuristic weather application featuring a 3D interactive globe, real-time weather data, and AI-powered predictions.

## 🛠️ Tech Stack

**Frontend:** React, TypeScript, Three.js, Material-UI, Framer Motion  
**Backend:** Flask, TensorFlow, Python 3.11  
**Database:** MongoDB  
**APIs:** OpenWeather API

## 🚀 Quick Setup Guide

### 1️⃣ Clone & Navigate
```bash
git clone https://github.com/NicholasBelschner/AdvanceWeatherApp.git
cd AdvanceWeatherApp
```

### 2️⃣ Backend Setup
```bash
cd backend
python -m venv venv

# Activate virtual environment
# For Windows:
venv\Scripts\activate
# For macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
```

Inside `backend/.env`, add:
```env
FLASK_APP=app.py
FLASK_ENV=development
OPENWEATHER_API_KEY=your-api-key-here
MONGODB_URI=your-mongodb-uri
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

Inside `frontend/.env`, add:
```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WEATHER_API_KEY=your-api-key-here
```

### 4️⃣ Start the Application

Start Backend (Terminal 1):
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate for Windows
python app.py
```

Start Frontend (Terminal 2):
```bash
cd frontend
npm start
```

✅ App is now running!
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🔧 Common Issues & Solutions

### Backend Issues
```bash
# If dependencies fail to install
pip install --upgrade pip
pip install -r requirements.txt

# If virtual environment is corrupted
rm -rf venv
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Frontend Issues
```bash
# If node_modules issues occur
rm -rf node_modules package-lock.json
npm install

# If port 3000 is in use
# For Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
# For macOS/Linux:
lsof -i :3000
kill -9 <PID>
```

## 📝 API Keys Setup

1. Get OpenWeather API Key:
   - Sign up at https://openweathermap.org/api
   - Copy your API key
   - Add to both `.env` files

2. Optional: MongoDB Setup
   - Use local MongoDB or
   - Create free cluster at MongoDB Atlas
   - Add connection string to `backend/.env`

## 🌟 Features

- 🌍 Interactive 3D Earth visualization
- 🌤️ Real-time weather data display
- 🎨 Futuristic UI with animations
- 📱 Responsive design
- 🤖 AI-powered weather predictions
- 🗣️ Voice command support

## 🤝 Contributing

1. Fork repo
2. Create feature branch (`git checkout -b feature/Amazing`)
3. Commit changes (`git commit -m 'Add Amazing Feature'`)
4. Push branch (`git push origin feature/Amazing`)
5. Open Pull Request

## 📜 License

MIT License - See [LICENSE](LICENSE) file

## 👤 Author

Nicholas Belschner

## 💡 Need Help?

- Check common issues above
- Open an issue
- Contact: [Your Contact Info] 