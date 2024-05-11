var el = document.getElementById("menu_stat");
el.addEventListener("click", function() {
    let moneymoney = JSON.parse(localStorage.getItem('moneymoney'));
    let total = 0;
    let classic = 0;
    moneymoney.forEach((moneymoney, index) => {
        const convertToShortDate = dateTimeString => {
            const [timePart, datePart] = dateTimeString.split(" ");
            const [day, month, year] = datePart.split("/");
            return `${year}-${month}-${day}`;
        };

        let shortDate = convertToShortDate(moneymoney.createdAt);
        shortDate = shortDate.replace(",", "");
        if (moneymoney.salePercent == null) {
            classic = classic + Number(moneymoney.prePrice) * Number(moneymoney.count);
        }
        else {
            classic = classic + (Number(moneymoney.prePrice) - (Number(moneymoney.prePrice) * Number(moneymoney.salePercent) / 100)) * Number(moneymoney.count);
        }
        console.log(classic)
    })
    total = classic;
    document.getElementById('total_stat').innerHTML = total + '$';
}); 