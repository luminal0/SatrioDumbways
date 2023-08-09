function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

if (name == "") {
    return alert("Nama Harus Diisi!");
  } else if (email == "") {
    return alert("Email Harus Diisi!");
  } else if (phone == "") {
    return alert("No HP Harus Diisi!");
  } else if (subject == "") {
    return alert("Subject Harus Diisi!");
  } else if (message == "") {
    return alert("Pesan Harus Diisi!");
  }

  let emailReciever = "satrioazizi0@gmail.com";

  let a = document.createElement('a');
  a.href = `mailto:${emailReciever}?subject${subject}&body=Hello, my name is ${name},${message} and this is my phone number ${phone}, thank you!`;
  a.click();
}