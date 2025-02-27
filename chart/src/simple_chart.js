import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart').getContext('2d');


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red-white', 'Blue', 'Yellow'],
    datasets: [{
      label: 'Votes',
    //   barPercentage:0.5,
      data: [12, 55, 31],
      backgroundColor: ['red', 'blue', 'yellow']
    }]
  }
});

// 
const cass = document.getElementById('cassava-growth').getContext('2d');
const xValues = ['week1','week2','week3','week4'];
const yValues = [40, 40, 60, 80];

new Chart(cass, {
    type: 'line',
    data: {
        labels: xValues,
        datasets: [{
            label: 'Cassava Growth',
            data: yValues,
            borderColor: 'green',
            tension: 0.1
    }]
    }
})

const multi_cass = document.getElementById('ph_o2').getContext('2d');
const x_Values = ['week1','week2','week3','week4'];
const y_Values = [40, 40, 60, 80];

new Chart(multi_cass, {
    type: 'line',
    data: {
        labels: x_Values,
        datasets: [{
            label: 'o2',
            data: [10,77,88,65],
            borderColor: 'green',
            tension: 0.1
    },{
        label: 'ph',
        data: [12,45,13,90],
        borderColor: 'red',
        tension: 0.1
}],
    }
})

// -----------------------------------

const country = document.getElementById('nuke').getContext('2d');


new Chart(country, {
  type: 'pie',
  data: {
    labels: ['france', 'usa', 'nigeria'],
    datasets: [{
      label: 'nuke',
      data: [15, 50, 35],
      backgroundColor: ['blue', 'red', 'green']
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide nuke Production"
    }
  }
});

const country_do = document.getElementById('agriculture').getContext('2d');


new Chart(country_do, {
  type: 'doughnut',
  data: {
    labels: ['france', 'usa', 'nigeria'],
    datasets: [{
      label: 'agriculture',
      data: [15, 50, 35],
      backgroundColor: ['blue', 'red', 'green']
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide agricultural Production"
    }
  }
});