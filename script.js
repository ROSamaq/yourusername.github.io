function calculateSIP() {
    const monthlyInvestment = document.getElementById("monthlyInvestment").value;
    const rateOfReturn = document.getElementById("rateOfReturn").value;
    const years = document.getElementById("years").value;

    if (monthlyInvestment && rateOfReturn && years) {
        const months = years * 12;
        const monthlyRate = rateOfReturn / 100 / 12;
        const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

        document.getElementById("result").innerText = `Future Value: ₹${futureValue.toFixed(2)}`;
    } else {
        document.getElementById("result").innerText = "Please fill all fields.";
    }
}
