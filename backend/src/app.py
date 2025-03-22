from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Basic configuration
app.config['JSON_SORT_KEYS'] = False
app.config['MONGO_URI'] = os.getenv('MONGO_URI', 'mongodb://localhost:27017/weather_app')

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'healthy',
        'message': 'Weather API is running'
    })

if __name__ == '__main__':
    app.run(debug=True) 