async function summarizeText(text) {
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
    const apiKey = "AIzaSyCEap2rnDHaiNERr_AKoCyXPgkzLIRM3BI"; // Replace with your actual API key
  
    try {
      const response = await fetch(`${apiUrl}?key=${apiKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: text }, // Pass the text to summarize here
              ],
            },
          ],
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Details:", errorData);
        throw new Error(`API error: ${errorData.error.message}`);
      }
  
      const data = await response.json();
      console.log("API Response Data:", data);  // Log the full response to inspect its structure
      console.log(data.candidates[0].content.parts[0].text)
      // Inspect the structure of candidates and content
      return data.candidates[0].content.parts[0].text;
  
    } catch (error) {
      console.error("Error communicating with Google Generative AI:", error);
      return "Failed to generate summary.";
    }
  }
  
  // Example usage:
  document.getElementById('summarize-btn').addEventListener('click', async () => {
    const textToSummarize = document.getElementById('input-text').value;
    const summary = await summarizeText(textToSummarize);
    document.getElementById('summary').textContent = summary;
  });
  