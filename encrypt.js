function encrypt() {
  var input = document.getElementById("inputText").value;
  var key = "mdbylcgx"; // 用于AES加密的密钥
  const secret_key = CryptoJS.enc.Utf8.parse(key);
  const iv = secret_key
  const encrypted = CryptoJS.DES.encrypt(input, secret_key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });
  var ciphertext =encrypted.toString();
  document.getElementById("outputText").value = ciphertext;
}

function copyToClipboard() {
  var output = document.getElementById("outputText");
  output.select();
  document.execCommand("copy");
  alert("已复制到剪贴板");
}
