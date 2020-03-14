function lineChart(){
	//this is the line chart
	new Chartist.Line('#chart1', {
		//X-axis
		labels: ['1st hr', '2nd hr', '3rd hr', '4th hr', '5th hr'],
		//Y-axis
		series: [
			[10, 20, 30, 20, 40],
		]
	}, 
	{
		//how high the Y-axis is and if the line should end at the beginning of the last collumn
		high: 50,
		fullWidth: false,
		// this is so the axis have round numbers 
		axisY: {
			onlyInteger: true,
			labelInterpolationFnc: function(value) {
				return (value / 1) + 'mi';
		    }
		}
	});
	new Chartist.Line('.ct-chart', data);
}