function barChart(){
	//this is the bar chart
	new Chartist.Bar('#chart2', {
		//X-axis
		labels: ['fuel'],
		//Y-axis
		series: [
			[54]
		]
	}, {
		//how high the chart should be
		high: 100,
		//this will give the Y-axis roundnumbers and a %-symbol
		axisY: {
			onlyInteger: true,  
		    labelInterpolationFnc: function(value) {
		   		return (value / 1) + '\u0025';
		    }
		}
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
		      	style: 'stroke-width: 30px'
		    });
		}
	});
}