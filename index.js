// input
const amount = document.getElementById("amountInput");
const years = document.getElementById("yearInput");
const rate = document.getElementById("rateInput");

// checkboxes
const repayment = document.getElementById("repayment");
const interest = document.getElementById("interest");
const repaymentToggle = document.getElementById("repaymentToggle");
const interestToggle = document.getElementById("interestToggle");

// Buttons
const button = document.getElementById("button");
const clearBtn = document.getElementById("clear");

// Error Messages
const amountError = document.getElementById("amountError");
const yearError = document.getElementById("yearError");
const interestError = document.getElementById("interestError");
const toggleError = document.getElementById("toggleError");

// output Texts
const monthlyPayment = document.getElementById("monthlyText");
const totalPayment = document.getElementById("overallText");

// Pages
const coverPage = document.getElementById("coverPage");
const outputPage = document.getElementById("outputPage");

// CLear Button funtionality
clearBtn.addEventListener("click", () => {
    years.value = "";
    amount.value = "";
    rate.value = "";
    repayment.checked = false;
    interest.checked = false;
    amountError.style.display = "none";
    yearError.style.display = "none";
    interestError.style.display = "none";
    toggleError.style.display = "none";
    interestToggle.style.backgroundColor = "transparent";
    repaymentToggle.style.backgroundColor = "transparent";
    interestToggle.style.borderColor = "hsla(200, 26%, 54%)";
    repaymentToggle.style.borderColor = "hsla(200, 26%, 54%)";
    outputPage.style.display = "none";
    coverPage.style.display = "flex";
});

// Submit button funtionality
button.addEventListener("click", () => {
    const userInput = amount.value;
    const userYears = years.value;
    const userRate = rate.value / 100;
    const totalInterest =
    Number(userInput) * Number(userRate) * Number(userYears);
    const totalRepayment = Number(totalInterest) + Number(userInput);

    if (repayment.checked) {
        monthlyPayment.innerHTML = `$${Math.floor(totalRepayment / 12)}`;
        totalPayment.innerHTML = `$${Math.floor(totalRepayment)}`;
    }
    if (interest.checked) {
        monthlyPayment.innerHTML = `$${Math.floor(totalInterest / 12)}`;
        totalPayment.innerHTML = `$${totalInterest}`;
        console.log(Math.floor(totalInterest / 12));
        console.log(Math.floor(totalInterest));
    }

    if (amount.value == "") {
        amountError.style.display = "block";
    } else {
        amountError.style.display = "none";
    }

    if (years.value == "") {
        yearError.style.display = "block";
    } else {
        yearError.style.display = "none";
    }

    if (rate.value == "") {
        interestError.style.display = "block";
    } else {
        interestError.style.display = "none";
    }

    if (!repayment.checked && !interest.checked) {
        toggleError.style.display = "block";
    } else {
        toggleError.style.display = "none";
    }

    if (repayment.checked || interest.checked) {
        outputPage.style.display = "flex";
        coverPage.style.display = "none";
    } else {
        outputPage.style.display = "none";
        coverPage.style.display = "flex";
    }
});

// Toggler funtionality
repaymentToggle.addEventListener("click", () => {
    repayment.checked = !repayment.checked;
    if (repayment.checked) {
        interest.checked = false;
    }

    repaymentToggle.style.backgroundColor = "hsla(61, 70%, 52%, 0.2)";
    repaymentToggle.style.borderColor = "hsla(61, 70%, 52%, 0.7)";

    interestToggle.style.backgroundColor = "transparent";
    interestToggle.style.borderColor = "hsla(200, 26%, 54%)";
});

interestToggle.addEventListener("click", () => {
    interest.checked = !interest.checked;
    if (interest.checked) {
        repayment.checked = false;
    }

    interestToggle.style.backgroundColor = "hsla(61, 70%, 52%, 0.2)";
    interestToggle.style.borderColor = "hsla(61, 70%, 52%, 0.7)";

    repaymentToggle.style.backgroundColor = "transparent";
    repaymentToggle.style.borderColor = "hsla(200, 26%, 54%)";
});
