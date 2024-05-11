function stats() {
    let moneymoney = JSON.parse(localStorage.getItem('moneymoney'));
    let from = document.getElementById('datefrom').value;
    let to = document.getElementById('dateto').value;
    let total = 0;
    let variant = 0;
    let classic = 0;
    let accessories = 0;
    moneymoney.forEach((moneymoney, index) => {
        console.log(from)
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
    })
    total = classic + variant + accessories;
    document.getElementById('cost_classic').innerHTML = classic + '$';
    document.getElementById('cost_variant').innerHTML = variant + '$';
    document.getElementById('cost_accessories').innerHTML = accessories + '$';
    document.getElementById('total_stat').innerHTML = total + '$';
}