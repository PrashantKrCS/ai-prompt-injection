function summarize(){

let article = document.getElementById("articleInput").value;

let hiddenInjection = /ignore previous instructions/i;

let output = document.getElementById("output");

if(hiddenInjection.test(article))
{

output.innerHTML =
"<b>⚠ Prompt Injection Detected</b><br><br>" +
"Injected Instruction Executed:<br>" +
"<code>SYSTEM COMPROMISED</code>";

}
else
{

let summary = article.split(".").slice(0,2).join(".");

output.innerHTML = summary;

}

}
