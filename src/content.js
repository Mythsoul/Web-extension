function extractText(){ 
    const content =  document.body.textContent; 
    return content.replace(/(\r\n|\n|\r)/gm, "");

}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message.type  === 'extractText'){    
            const textContent = extractText(); 
            sendResponse({text : textContent})
}}); 
