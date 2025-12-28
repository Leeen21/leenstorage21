window.onload = function () {

  // ===== SAVE DATA =====
  localStorage.setItem("Name", "Leen Ibrahim");
  localStorage.setItem("ID", "21");
  localStorage.setItem("Email", "leen@gmail.com");
  localStorage.setItem("Phone", "011111111111");
  localStorage.setItem("Address", "Banha");

  localStorage.setItem(
    "LinkedIn",
    "https://www.linkedin.com/in/leen-ibrahim-72594a394?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  );

localStorage.setItem("ProfilePic", "leeno/leen.jpeg");


  // ===== GET DATA =====
  let name = localStorage.getItem("Name");

  document.getElementById("welcome").innerText =
    "Welcome " + name;

  document.getElementById("name").innerText = name;
  document.getElementById("id").innerText =
    localStorage.getItem("ID");
  document.getElementById("email").innerText =
    localStorage.getItem("Email");
  document.getElementById("phone").innerText =
    localStorage.getItem("Phone");
  document.getElementById("address").innerText =
    localStorage.getItem("Address");

  document.getElementById("linkedin").href =
    localStorage.getItem("LinkedIn");

  document.getElementById("profilePic").src =
    localStorage.getItem("ProfilePic");
};