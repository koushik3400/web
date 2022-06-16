$scope.cut = false; 
$scope.copy = false; 
$scope.paste = false; 
function saveTextAsFile() 
{ 
    var textToSave = document.getElementById("inputTextToSave").value; 
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"}); 
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a"); 
    downloadLink.download = fileNameToSaveAs; 
    downloadLink.innerHTML = "Download File"; 
    downloadLink.href = textToSaveAsURL; 
    downloadLink.onclick = destroyClickedElement; 
    downloadLink.style.display = "none"; 
    document.body.appendChild(downloadLink); 
    downloadLink.click(); 
} 
function destroyClickedElement(event) 
{ 
    document.body.removeChild(event.target); 
} 
function loadFileAsText() 
{ 
    var fileToLoad = document.getElementById("fileToLoad").files[0]; 
    var fileReader = new FileReader(); 
    fileReader.onload = function(fileLoadedEvent) 
    { 
        var textFromFileLoaded = fileLoadedEvent.target.result; 
        document.getElementById("inputTextToSave").value = textFromFileLoaded; 
    };
    fileReader.readAsText(fileToLoad, "UTF-8"); 
} 
function edit() 
{ 

    var x = document.getElementById("select").value; 
    document.getElementById("demo").innerHTML = x + " successful !!"; 
} 
function copytoClipboard()
{ 
    var textArea = document.getElementById("inputTextToSave"); 
    textArea.select(); 
    document.execCommand("Copy"); 
} 
function cuttoClipboard()
{ 
    var textArea = document.getElementById("inputTextToSave"); 
    textArea.select(); 
    document.execCommand("Cut"); 
} 
function pastetoClipboard()
{ 
    let pasteArea = document.getElementById('inputTextToSave');
    navigator.clipboard.readText() 
    .then((text)=>{pasteArea.value+='\n'+ text; 
    })

} 
function exitFile()
{ 
    window.close(); 
} 