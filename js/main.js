
	
	// Graph Variables
	var graphPosX = 100, // x position on the page from top-left
		graphPosY = 100, // y postion on the page from top-left
		graphWidth = 3000, //overal graph width
		graphHeight = 768; // overal graph height

	var r = Raphael(graphPosX, graphPosY, graphWidth, graphHeight);

	//line graph variables
	var x = 50,
		y = 0,
		width = 3000,
		height = 600,
		valueX = [0,1,2,3,4,5], // x-axis increments -- array
		valueY = [[20, 58,2,30,4,21], [30, 1,3,9,16,25], [80, 100,50,25,12,6]], // your lines, each points maps to the x-axis -- multiple arrays
		options = {
			gutter : 0,
			symbol : 'circle', // 'circle' or ''
			width : 4, //width of symbol
			colors : ['#000', '#045', '#980'],
			shade : true,
			nostroke : false,
			smooth : true, //straight or curved lines
			axis : '0 0 1 1',
			axisxstep : 1,
			axisystep : 10
		}

	//build the line graph
	var myLineChart = r.linechart(x, y, width, height, valueX, valueY, options);

	var popup = '';
	//Loop through every point on the graph
	myLineChart.each(function(){
		this.symbol.hover(function(){
			console.log(this);
			popup = this.symbol.paper.popup(this.x, this.y, this.value, 'up', 5);
		},
		function(){
			console.log('remove');
			popup.remove();
		}, this, this);
	})