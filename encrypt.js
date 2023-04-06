function encrypt() {
  var input = document.getElementById("inputText").value;
  var key = "mdbylcgx"; // 用于AES加密的密钥
  var ciphertext = CryptoJS.AES.encrypt(input, key).toString();
  document.getElementById("outputText").value = ciphertext;
}

function copyToClipboard() {
  var output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("已复制到剪贴板");
}
