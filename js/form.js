window.onload = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const localDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  const dateInput = document.getElementById("senddate");
  dateInput.value = localDateTime;
  dateInput.max = localDateTime;  
};

function validateForm(event) {
  if (event) event.preventDefault();  

  const steam = document.getElementById("steamurl").value;
  const date = document.getElementById("senddate").value;

  const steamRegex = /^https:\/\/steamcommunity\.com\/(profiles|id)\/.+/;

  if (!steamRegex.test(steam)) {
    alert("Steam URL must start with:\nhttps://steamcommunity.com/...");
    return false;
  }

  const chosenDate = new Date(date);
  const now = new Date();

  if (chosenDate.getTime() > now.getTime()) {
    alert("Date and time cannot be in the future.");
    return false;
  }

  alert("Form sent! Thank you for helping us develop our mode");

  window.location.href = "form.html";   

  return true;
}


