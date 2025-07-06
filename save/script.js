document.addEventListener('DOMContentLoaded', () => {
    const downloadFileBtn = document.getElementById('downloadFileBtn');
    const copyTextBtn = document.getElementById('copyTextBtn');
    const downloadZipBtn = document.getElementById('downloadZipBtn');
    const openAppBtn = document.getElementById('openAppBtn');
    const embeddedAppContainer = document.getElementById('embeddedAppContainer');
    const embeddedAppFrame = document.getElementById('embeddedAppFrame');

    // --- Button 1: Download "Give_This_To_AI.json" ---
    downloadFileBtn.addEventListener('click', () => {
        const filePath = 'assets/Give_This_To_AI.json';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'Give_This_To_AI.json'; // The name the file will have when downloaded
        document.body.appendChild(link); // Append to body to make it clickable
        link.click(); // Programmatically click the link
        document.body.removeChild(link); // Clean up: remove the link after clicking
    });

    // --- Button 2: Copy Placeholder Text to Clipboard ---
    copyTextBtn.addEventListener('click', async () => {
        const textToCopy = "This is some placeholder text that you can replace with your actual content for the user to copy.";
        try {
            await navigator.clipboard.writeText(textToCopy);
            alert('Text copied to clipboard!'); // Provide user feedback
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy text. Please try again or copy manually.');
        }
    });

    // --- Button 3: Download "The_Files_The_AI_Asks_For.zip" ---
    downloadZipBtn.addEventListener('click', () => {
        const filePath = 'assets/The_Files_The_AI_Asks_For.zip';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'The_Files_The_AI_Asks_For.zip'; // The name the file will have when downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- Button 4: Open TriadForge + DreamParserMAX HTML App ---
    openAppBtn.addEventListener('click', () => {
        const appPath = 'assets/triadforge-dreampaxmax.html'; // Adjust this path if your file is named differently or elsewhere
        
        // Show the container for the iframe
        embeddedAppContainer.classList.remove('hidden');
        
        // Set the src of the iframe to load the other HTML app
        embeddedAppFrame.src = appPath;

        // Optionally, scroll to the app container
        embeddedAppContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});