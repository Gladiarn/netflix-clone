document.addEventListener("DOMContentLoaded", function () {
  //For Closing and Opening of Modal

  function openModal() {
    let modal = document.getElementById("modal");
    modal.classList.remove("ClosedModal");
    modal.classList.add("OpenModal");

    if (arraypins.length > 0) {
      arraypins[0].focus();
    }
  }

  function closedModal() {
    let modal = document.getElementById("modal");
    modal.classList.add("ClosedModal");
    modal.classList.remove("OpenModal");
  }

  let profiles = document.getElementsByClassName("card-holder");
  Array.from(profiles).forEach((profile) => {
    profile.addEventListener("click", () => {
      openModal();
    });
  });

  document.getElementById("close").addEventListener("click", () => {
    closedModal();
  });

  //pin fous animation

  let pins = document.getElementsByClassName("pins");
  let arraypins = Array.from(pins);

  arraypins.forEach((pin) => {
    pin.addEventListener("focus", (e) => {
      addFocus(e);
    });
    pin.addEventListener("blur", (e) => {
      removeFocus(e);
    });
  });

  function addFocus(e) {
    e.target.classList.add("focus");
  }

  function removeFocus(e) {
    e.target.classList.remove("focus");
  }

  console.log(pins);

  //pins input
  let form = document.getElementById("pinForm");

  arraypins.forEach((pin, index) => {
    pin.addEventListener("input", () => {
      if (pin.value.length === 1 && pin.nextElementSibling) {
        pin.nextElementSibling.focus();
      }

      const allfilled = arraypins.every((pin) => pin.value.length === 1);

      if (allfilled) {
        form.submit();
      }
    });

    pin.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && pin.value.length === 0 && index > 0) {
        arraypins[index - 1].focus();
      }
    });
  });
});
