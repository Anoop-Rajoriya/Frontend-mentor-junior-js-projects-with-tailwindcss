console.log("script is runnig!");

const appForm = document.querySelector("#input-form");
const inputSecList = [...appForm.querySelectorAll("#input")];
const inputList = [...appForm.querySelectorAll("#input input")];
const errorMsgElm = [...appForm.querySelectorAll("#input p")];
const ageElmList = [...document.querySelectorAll("#output-sec p span")];
const currentDate = new Date();

appForm.addEventListener("submit", checkUserInput);

function checkUserInput(event) {
  event.preventDefault();

  if (!inputList[inputList.length - 1].value) {
    showError(errorMsgElm[errorMsgElm.length - 1], "year must be required!");
    inputSecList[inputSecList.length - 1].classList.add("error");
    return;
  }

  if (
    Number(inputList[inputList.length - 1].value) > currentDate.getFullYear()
  ) {
    showError(errorMsgElm[errorMsgElm.length - 1], "year must in past!");
    inputSecList[inputSecList.length - 1].classList.add("error");
    return;
  }

  if (Number(inputList[inputList.length - 2].value) > 12) {
    showError(errorMsgElm[errorMsgElm.length - 2], "month must be a valid!");
    inputSecList[inputSecList.length - 2].classList.add("error");
    return;
  }

  if (Number(inputList[inputList.length - 3].value) > 31) {
    showError(errorMsgElm[errorMsgElm.length - 3], "day must be a valid!");
    inputSecList[inputSecList.length - 3].classList.add("error");
    return;
  }

  const userAge = calculateAge(
    inputList.map((elm) => {
      return elm.value;
    }),
  );

  // console.log(userAge);
  // console.log(ageElmList);

  ageElmList.forEach(function (elm, index) {
    if (userAge[index]) {
      elm.innerText = userAge[index];
    } else {
      elm.innerText = "00";
    }
  });
}

function showError(elm, errorMsg) {
  if (elm) elm.innerText = errorMsg;
  setTimeout(function () {
    inputSecList.forEach(function (elm) {
      elm.classList.remove("error");
    });
  }, 2000);
}

function calculateAge(dob) {
  const userAge = [];
  userAge[0] = currentDate.getFullYear() - Number(dob[2]);

  if (dob[1] && Number(dob[1]) > currentDate.getMonth() + 1) {
    userAge[0]--;
  } else if (dob[1] && Number(dob[1] < currentDate.getMonth() + 1)) {
    userAge[1] = currentDate.getMonth() + 1 - Number(dob[1]);

    if (dob[0] && Number(dob[0]) > currentDate.getDate()) {
      userAge[1]--;
    } else if (dob[0] && Number(dob[0]) < currentDate.getDate()) {
      userAge[2] = currentDate.getDate() - Number(dob[0]);
    }
  }

  return userAge;
}
