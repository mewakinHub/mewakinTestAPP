from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import tensorflow_hub as hub
from PIL import Image
import numpy as np

app = FastAPI()

# Load pre-trained model from TensorFlow Hub
MODEL_URL = "https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/5"
model = hub.load(MODEL_URL)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Open and preprocess the image
    image = Image.open(file.file).resize((224, 224))
    img_array = np.array(image) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    # Run inference
    predictions = model(img_array)
    predicted_class = int(np.argmax(predictions))

    return JSONResponse({"predicted_class": predicted_class})
