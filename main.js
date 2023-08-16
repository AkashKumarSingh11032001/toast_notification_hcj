let toastBox = document.getElementById("toastBox");
let SuccessMsg =
  '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let ErrorMsg = '<i class="fa-solid fa-circle-xmark"></i>Fix the Error';
let InvalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("Error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
