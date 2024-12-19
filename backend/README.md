cd backend
conda env create -f environment.yml
conda activate ar_ai_backend

pip install -r requirements.txt
python app.py
---

docker build -t ar-ai-backend .
docker run -p 5000:5000 ar-ai-backend
