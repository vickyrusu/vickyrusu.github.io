window.addEventListener('load', () => {
  var app = {
    pollLogo: document.querySelectorAll('.poll-logo'),
    frameworks: ['Angular', 'Ember', 'React', 'Vue']
  }

  app.handlePollEvent = function(event, index) {
    const framework = this.frameworks[index];
    axios.post('http://localhost:3000/vote', {framework: framework})
    .then((data) => {
      alert (`Voted ${framework}`);
    })
  }

  app.setup = function() {
    this.pollLogo.forEach((pollBox, index) => {
      pollBox.addEventListener('click', (event) => {
        this.handlePollEvent(event, index)
      }, true)
    })
  }

  app.setup();

})

let dataPoints = [
  { label: "Angular", y: 0 },
  { label: "Ember", y: 0 },
  { label: "React", y: 0 },
  { label: "Vue", y: 0 },
]
const chartContainer = document.querySelector('#chartContainer');


if(chartContainer) {
  var chart = new CanvasJS.Chart("chartContainer",
  	{
  		animationEnabled: true,
  		theme: "theme2",
  		//exportEnabled: true,
  		title:{
  			// text: "Simple Column Chart"
  		},
  		data: [
  		{
  			type: "column",
  			dataPoints: dataPoints
  		}
  		]
  	});
  chart.render();

  Pusher.logToConsole = true;

  var pusher = new Pusher('5985beebd573e3b810b5', {
    encrypted: true,
    cluster: 'eu'
  });

  var channel = pusher.subscribe('poll_unu');
  channel.bind('vote', function(data) {
    console.log(dataPoints)
    dataPoints = dataPoints.map(x => {
      if(x.label == data.framework) {
        x.y += data.points;
        return x
      } else {
        return x
      }
    });
    chart.render()
  });
}