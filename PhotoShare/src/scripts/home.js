const uploadPost = async (event) =>{
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];
            const spinner = document.getElementById('loadingSpinner');

            if (!file) {
                alert('Please select a file to upload.');
                return;
            }

            const formData = new FormData();
            formData.append('file', file);

            // Show the spinner
            spinner.classList.remove('hidden');

            try {
                const response = await fetch('/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert('File uploaded successfully.');
                    document.getElementById('uploadModal').classList.add('hidden');
                    fetchFiles();
                } else {
                    alert('Error uploading file.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error uploading file.');
            } finally {
                // Hide the spinner
                spinner.classList.add('hidden');
            }

}


document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('filePreview');
    preview.innerHTML = '';
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'w-full h-auto';
            preview.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});