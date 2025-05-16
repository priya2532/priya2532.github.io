let str = "";
for (let i = 1; i <= 100; i++) {
  str = str + `<option>${i}</option>`;
}
n1.innerHTML = str

let str2 = "";
for (let i = 2000; i <= 2026; i++) {
  str2 = str2+ `<option>${i}</option>`;
}
n2.innerHTML = str2

   function toggleCustomFields(show) {
      const customFields = document.getElementById("fields");
      customFields.style.display = show ? "block" : "none";
    }
    function handleSubmit(event) {
    event.preventDefault(); // Prevents page refresh
    alert("Form submitted successfully!");
  }