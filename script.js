function checkDomain() {
    const domainInput = document.getElementById('domainInput');
    const domain = domainInput.value.trim();

    if (domain === '') {
        alert('Please enter a domain.');
        return;
    }

    // 发起请求
    fetchDomainInfo(domain);
}

async function fetchDomainInfo(domain) {
    try {
        const response = await fetch(`https://whois.freeaiapi.xyz/?name=${domain}&suffix=com`);
        const data = await response.json();

        // 处理结果
        displayResult(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError('Error fetching data. Please try again.');
    }
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Domain:</strong> ${result.name}</p>
        <p><strong>Registered:</strong> ${result.registered ? 'Yes' : 'No'}</p>
        <p><strong>Registration Time:</strong> ${result.registered ? result.registeredTime : 'N/A'}</p>
    `;
}

function displayError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p class="error">${message}</p>`;
}
