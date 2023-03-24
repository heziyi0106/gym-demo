const getBMI3 = (height, weight, point = 2) => (weight / (height / 100) ** 2).toFixed(point);

// 取得網頁物件DOM，放在變數之中[外部放變數們]
// 可帶tag,class,id
const elementEL = document.querySelector(".title");
const calcEL = document.querySelector("#calc");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
console.log(heightEl, weightEl);
console.log(elementEL);
console.log(calcEL);


elementEL.innerHTML = "<u>BMI Calculator</u>";
calcEL.innerText = "分析";

// 將按鈕增加事件監聽[內部]
calcEL.addEventListener("click", () => {

    let bmiEL = document.querySelector("#comment .bmi");
    let textEl = document.querySelector("#comment .text");
    console.log(bmiEL);
    let height = heightEl.value;
    let weight = weightEl.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空!");
        return
    }

    let bmi = getBMI3(height, weight);
    if (isNaN(bmi)) {
        alert("請輸入數值!");
        return;
    }
    console.log(bmi);
    bmiEL.innerText = ":" + bmi;


    let comments = [
        { 'bmi': 35, 'color': 'red', 'comment': '異常範圍，請節食運動!' },
        { 'bmi': 24, 'color': 'yellow', 'comment': '正常範圍，恭喜你，請繼續保持。' },
        { 'bmi': 18.5, 'color': 'blue', 'comment': '體重過輕，請多攝取營養。' },
    ];
    bmiEL.style.color = comments[comments.length - 1]["color"];
    textEl.innerText = comments[comments.length - 1]["comment"];


    bmiEL.style.color = "blue";
    for (let i = 0; i < comments.length; i++) {
        if (bmi >= comments[i].bmi) {
            bmiEL.style.color = comments[i]["color"];
            textEl.innerText = comments[i]["comment"];
            break;
        }
    }

    // comments.forEach(comment => {
    //         if (bmi >= comment["bmi"]) {
    //             bmiEL.style.color = comment["color"];
    //             return;
    //         }
    //     })
    // tempStr = `${name} BMI:${bmi} `
    // if (bmi < 18.5) {
    //     tempStr += "體重過輕";
    // } else if (bmi >= 18.5 & bmi < 24) {
    //     tempStr += "健康體位";
    // } else if (bmi >= 24 & bmi < 27) {
    //     tempStr += "過重";
    // } else if (bmi >= 27 & bmi < 30) {
    //     tempStr += "輕度肥胖";
    // } else if (bmi >= 30 & bmi < 35) {
    //     tempStr += "輕度肥胖";
    // } else if (bmi >= 35) {
    //     tempStr += "重度肥胖";
    // } else {
    //     tempStr += "輸入錯誤!";
    // }
    // alert(tempStr);




});