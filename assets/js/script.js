AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// CHARTJS
// Scatter
var xyValues = [
  {x:50, y:7},
  {x:60, y:8},
  {x:70, y:8},
  {x:80, y:9},
  {x:90, y:9},
  {x:100, y:9},
  {x:110, y:10},
  {x:120, y:11},
  {x:130, y:14},
  {x:140, y:14},
  {x:150, y:15}
];

new Chart("myChart1", {
  type: "scatter",
  data: {
    datasets: [{
      pointRadius: 4,
      pointBackgroundColor: '#022a30',
      data: xyValues
    }]
  },
  options:{title: {
    display: true,
    text: "House Prices vs. Size",
  },
  legend:{
    display:false,
  }
  }
});



// DOUGHNUT
var xValues = ["Smart phone", "Computer", "Tablet", "TV"];
var yValues = [145, 96, 32, 5];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
function prct(values) {
  let total = values.reduce((a, b) => a + b, 0);
  let prctage = values.map(num => (num/total)*100).map(num => num.toFixed(2))
  return prctage;
};

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: prct(yValues)
    }]
  },
  options: {
    title: {
      display: true,
      text: "Devices used to watch live streaming in %"
    },
    plugins: {
      datalabels: {
          formatter: (value, ctx) => {

              let datasets = ctx.chart.data.datasets;

              if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
                  let sum = 0;
                  datasets.map(dataset => {
                      sum += dataset.data[ctx.dataIndex];
                  });
                  let percentage = Math.round((value / sum) * 100) + '%';
                  return percentage;
              } else {
                  return percentage;
              }
          },
          color: 'black',
               }
  }
  }
});


// BAR CHART
new Chart(document.getElementById("myChart3"), {
  type: 'bar',
  data: {
    labels: ["2020", "2021", "2022"],
    datasets: [
      {
        label: "Attraction",
        backgroundColor: "#3e95cd",
        data: [500,613,783]
      }, {
        label: "Churn",
        backgroundColor: "#8e5ea2",
        data: [65,87]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Customer Attraction & Churn by year'
    }
  }
});

// MIXED PLOT
new Chart(document.getElementById("myChart4"), {
  type: 'bar',
  data: {
    labels: ["1900", "1950", "1999", "2050"],
    datasets: [{
        label: "Europe",
        type: "line",
        borderColor: "#8e5ea2",
        data: [408,547,675,734],
        fill: false
      }, {
        label: "Africa",
        type: "line",
        borderColor: "#3e95cd",
        data: [133,221,783,2478],
        fill: false
      }, {
        label: "Europe",
        type: "bar",
        backgroundColor: "rgba(0,0,0,0.2)",
        data: [408,547,675,734],
      }, {
        label: "Africa",
        type: "bar",
        backgroundColor: "rgba(0,0,0,0.2)",
        backgroundColorHover: "#3e95cd",
        data: [133,221,783,2478]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Population growth (millions): Europe & Africa'
    },
    legend: { display: true }
  }
});

// BUBBLE CHART
new Chart(document.getElementById("myChart5"), {
  type: 'bubble',
  data: {
    labels: "Africa",
    datasets: [
      {
        label: ["China"],
        backgroundColor: "rgba(255,221,50,0.2)",
        borderColor: "rgba(255,221,50,1)",
        data: [{
          x: 21269017,
          y: 5.245,
          r: 15
        }]
      }, {
        label: ["Denmark"],
        backgroundColor: "rgba(60,186,159,0.2)",
        borderColor: "rgba(60,186,159,1)",
        data: [{
          x: 258702,
          y: 7.526,
          r: 10
        }]
      }, {
        label: ["Germany"],
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#000",
        data: [{
          x: 3979083,
          y: 6.994,
          r: 15
        }]
      }, {
        label: ["Japan"],
        backgroundColor: "rgba(193,46,12,0.2)",
        borderColor: "rgba(193,46,12,1)",
        data: [{
          x: 4931877,
          y: 5.921,
          r: 15
        }]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }, scales: {
      yAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        }
      }],
      xAxes: [{ 
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }]
    }
  }
});