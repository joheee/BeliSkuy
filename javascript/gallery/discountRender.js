// DISCOUNT COUNTDOWN
export let discountCountdown = () => {
    let minute = 60
    let second = minute * 60
    let countSecond = () => {
        let currentMinute = Math.floor(second / 60)
        let currentSecond = second % 60
        
        currentSecond = currentSecond < 10 ? '0' + currentSecond : currentSecond
        
        // console.log(currentMinute + ":" + currentSecond)
        document.getElementById('discount-timer-minute').innerHTML = currentMinute
        document.getElementById('discount-timer-second').innerHTML = currentSecond
        second--
    }
    setInterval(countSecond, 1000)
}