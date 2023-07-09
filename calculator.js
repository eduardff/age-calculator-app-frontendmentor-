const $year = document.getElementById('year');
const $month = document.getElementById('month');
const $day = document.getElementById('day');

const $buttonAge = document.getElementById('btn-age');

const $textYear = document.getElementById('text-year');
const $textMonths = document.getElementById('text-months');
const $textDays = document.getElementById('text-days');

// validaciones
const isRequired = (value) => {
  return value === '' ? false : true;
};
const validateNumbersInput = (value) => {
  const pattern = /^[0-9]+$/;
  return pattern.test(value);
};
const validateRange1to31 = (value) => {
  return value <= 0 || value > 31 ? false : true;
};
const validateRange1to12 = (value) => {
  return value < 1 || value > 12 ? false : true;
};
const isValidYear = (value) => {
  const validYear = new Date();
  return value > validYear.getFullYear() ? false : true;
};
const validateDate = (year, month, day) => {
  month = month - 1;
  const dateOfBirth = new Date(year, month, day);
  return month != dateOfBirth.getMonth() ? false : true;
};
// mostrar y remover mensajes de error
const showError = (input, message) => {
  const divInputContainer = input.parentElement;
  divInputContainer.classList.add('show-error');

  const $errorSmall = divInputContainer.querySelector('small');
  $errorSmall.textContent = message;
};
const removeError = (input) => {
  const divInputContainer = input.parentElement;
  divInputContainer.classList.remove('show-error');

  const $errorSmall = divInputContainer.querySelector('small');
  $errorSmall.textContent = '';
};
// validar las validaciones

const checkInputDay = () => {
  const inputDayValue = $day.value.trim();
  switch (true) {
    case !isRequired(inputDayValue):
      showError($day, 'This field is required');
      break;
    case !validateNumbersInput(inputDayValue):
      showError($day, 'Input must be a number');
      break;
    case !validateRange1to31(inputDayValue):
      showError($day, 'Must be a valid day');
      break;
    default:
      removeError($day);
      return true;
  }
  return false;
};
const checkInputMonth = () => {
  const inputMonthValue = $month.value.trim();
  switch (true) {
    case !isRequired(inputMonthValue):
      showError($month, 'This field is required');
      break;
    case !validateNumbersInput(inputMonthValue):
      showError($month, 'Input must be a number');
      break;
    case !validateRange1to12(inputMonthValue):
      showError($month, 'Must be a valid month');
      break;
    default:
      removeError($month);
      return true;
  }
  return false;
};
const checkInputYear = () => {
  const inputYearValue = $year.value.trim();
  if (!isRequired(inputYearValue)) {
    showError($year, 'This field is required');
  } else if (!validateNumbersInput(inputYearValue)) {
    showError($year, 'Input must be a number');
  } else if (!isValidYear(inputYearValue)) {
    showError($year, 'Must be in the past');
  } else {
    removeError($year);
    return true;
  }
  return false;
};
const checkEntryDate = () => {
  const inputDayValue = $day.value.trim();
  const inputMonthValue = $month.value.trim();
  const inputYearValue = $year.value.trim();
  if (!validateDate(inputYearValue, inputMonthValue, inputDayValue)) {
    showError($day, 'Must be a valid date');
  } else {
    removeError($day);
    return true;
  }
  return false;
};

const ageCalculator = () => {
  $buttonAge.addEventListener('click', (event) => {
    let one = checkInputDay();
    let two = checkInputMonth();
    let three = checkInputYear();
    let four = checkEntryDate();

    let validationsValids = one && two && three && four;

    const birthDay = +$day.value.trim();
    const birthMonth = +$month.value.trim() - 1;
    const birthYear = +$year.value.trim();
    let today = new Date();

    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();

    let ageInYears = todayYear - birthYear;
    let ageInMonths = 0;
    let ageInDays = 0;
    // mostrar años de vida
    const showYearsLife = () => {
      if (
        birthMonth > todayMonth ||
        (birthMonth === todayMonth && birthDay > todayDay)
      ) {
        ageInYears--;
      }
      // if (ageInYears > 0) {
      //   $textYear.textContent = ageInYears;
      // } else {
      //   $textYear.textContent = '';
      // }
      $textYear.textContent = ageInYears;
    };
    const showMonthsLife = () => {
      if (todayDay >= birthDay) {
        ageInMonths = todayMonth - birthMonth;
      } else {
        ageInMonths = todayMonth - birthMonth - 1;
      }

      if (ageInMonths < 0) {
        // ageInMonths += 12;
        ageInMonths = ageInMonths + 12;
      }
      // if (ageInMonths > 0) {
      //   $textMonths.textContent = ageInMonths;
      // } else {
      //   $textMonths.textContent = '';
      // }
      $textMonths.textContent = ageInMonths;
    };
    const showDaysLife = () => {
      if (todayDay >= birthDay) {
        ageInDays = todayDay - birthDay;
      } else {
        const daysInPrevMonth = new Date(
          todayYear,
          todayMonth - 1,
          0
        ).getDate();
        ageInDays = daysInPrevMonth - birthDay + todayDay;
      }
      // if (ageInDays > 0) {
      //   $textDays.textContent = ageInDays;
      // } else {
      //   $textDays.textContent = '';
      // }
      $textDays.textContent = ageInDays;
    };
    // si el contenido de entrada es válido entonces ejcuta las funciones
    // si no deja los campos de texto como estaban
    if (validationsValids) {
      showYearsLife();
      showMonthsLife();
      showDaysLife();
    } else {
      $textYear.textContent = '--';
      $textMonths.textContent = '--';
      $textDays.textContent = '--';
    }
    // validationsValids && showYearsLife();
    // showMonthsLife();
    // showDaysLife();
    // !validationsValids && ($textYear.textContent = '--');
    // !validationsValids && ($textMonths.textContent = '--');
    // !validationsValids && ($textDays.textContent = '--');
  });
};
export { ageCalculator };
