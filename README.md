# Futuristic Weather App

A modern, AI-powered weather application with an immersive user interface and intelligent predictions.

## Features

- Real-time weather data visualization
- AI-enhanced weather predictions
- Interactive 2D/3D weather maps
- Voice and gesture controls
- Personalized weather alerts
- Responsive and futuristic UI design

## Tech Stack

### Frontend
- React with TypeScript
- Material-UI
- D3.js/Three.js for visualizations
- Hammer.js for gesture controls
- Web Speech API for voice commands

### Backend
- Flask (Python)
- TensorFlow for AI predictions
- MongoDB for data storage
- OpenWeatherMap API integration

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 14+
- MongoDB
- OpenWeatherMap API key

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Activate the virtual environment:
   ```bash
   source ../venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r ../requirements.txt
   ```

4. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update the variables with your API keys and configurations

5. Run the Flask server:
   ```bash
   flask run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Development

### Running Tests
- Backend: `pytest`
- Frontend: `npm test`

### Building for Production
- Frontend: `npm run build`
- Backend: Configure with Gunicorn

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT License 