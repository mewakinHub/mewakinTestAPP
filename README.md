```
mini-mvp/
├── frontend/                  # React Native Mobile App
│   ├── App.js                 # Main React Native app file
│   ├── package.json           # React Native dependencies
│   └── README.md              # Frontend setup instructions
├── backend/                   # Python Flask Backend
│   ├── app.py                 # Main Flask API
│   ├── model/                 # Pre-trained ML model and logic
│   │   ├── my_model.h5        # Example TensorFlow model
│   └── requirements.txt       # Python dependencies
├── ar_module/                 # Unity AR Module
│   ├── Scripts/               # Unity C# scripts
│   │   ├── ARObjectPlacer.cs  # AR placement logic
│   └── Scenes/                # Unity scene file
│       └── MainScene.unity    # AR environment scene
└── README.md                  # System documentation
```

python backend/app.py

npx react-native run-android

docker build -t backend-test ./backend
docker run -p 8000:8000 backend-test

----

docker-compose up --build
