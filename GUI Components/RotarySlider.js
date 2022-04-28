

laf.registerFunction("drawRotarySlider", function(g, obj)
{
	var a = obj.area;
	var start = 2.5;
	var end = start * 2 * obj.valueNormalized - start;

	g.setColour(nOffWhite);
	g.setFont("Actay Wide", (obj.value * 10) + 20);
	g.drawText("S", [25, 30, 20, 20]);
	
	
	g.drawEllipse([1, 1, a[2] - 2, a[3] - 2], 1);
	
	g.rotate(end, [a[2] / 2, a[3] / 2]);
	g.fillEllipse([a[2] / 2 - 7 / 2, 7, 7, 7]);
	

});