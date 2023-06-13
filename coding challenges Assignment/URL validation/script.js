const regex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\.\-_]+[a-zA-Z]+$/;

function checkURL(input) {
  if (regex.test(input)) {
    console.log("Valid URL");
  } else {
    console.log("Invalid URL");
  }
}

// Example usage
checkURL("http://www.example.com");  // Valid URL
checkURL("https://example123.com");  // Valid URL
checkURL("http://invalid");  // Invalid URL
checkURL("ftp://example.com");  // Invalid URL
