
import Chart from 'chart.js/auto';
const cal = document.getElementById('calculate')

cal.addEventListener('click', () => {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var result = document.getElementById('ans')
    console.log(`a:${a} b:${b} c:${c}`)

    let discriminant = b**2 - 4*a*c
    console.log(`discriminant: ${discriminant}`)
    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2*a)
        let x2 = (-b - Math.sqrt(discriminant)) / (2*a)
        var ans = `x1: ${x1} x2: ${x2}`
        result.innerText = ans
    } else if (discriminant == 0) {
        let x1 = -b / (2*a)
        let x2 = x1

        var ans = `x1: ${x1} x2: ${x2}`
        result.innerText = ans

    } else{
        var ans = 'No real roots(the quadratic equation has two complex (imaginary) roots)'
        result.innerText = ans

    } 
    chart(a,b)
})



function chart(x1,x2){
    const myChart = document.getElementById('quadratic').getContext('2d');
    new Chart(myChart, {
        type:'line',
        data:{
            labels: ['x1', 'x2'],
            datasets:[{
                label: 'plotting a and b(testing)',
                data: [x1, x2],
                borderColor: 'green',
                tension: 0.1
            }]
        }
    })

}