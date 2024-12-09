async function fetchData(url, data = '', method = 'GET') {
    try {
        const options = {
            method,
            headers: { 'Content-Type': 'application/json' },
        };

        // Se não for GET e tiver dados, adiciona o body
        if (method !== 'GET' && data) {
            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
