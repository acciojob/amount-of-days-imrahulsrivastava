const noOfDays = (year) => {
  // write your code here

  year = parseInt(year);

  if (year < 1 && year > 9999) {
    return "Please enter a valid year";
  }

  let isLeapYear;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeapYear = true;
      } else {
        isLeapYear = false;
      }
    } else {
      isLeapYear = true;
    }
  } else {
    isLeapYear = false;
  }

  if (isLeapYear) {
    return 366;
  } else {
    return 365;
  }
};

// Do not change the code below.
const year = prompt("Enter the year - ");
alert(noOfDays(year));
