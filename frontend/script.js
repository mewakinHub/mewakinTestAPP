document.getElementById('uploadBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
        alert('Please select a file!');
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('http://localhost:8000/predict', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        document.getElementById('result').innerText = `Predicted Class: ${data.predicted_class}`;
    } catch (error) {
        console.error(error);
        document.getElementById('result').innerText = 'Error processing the file.';
    }
});
