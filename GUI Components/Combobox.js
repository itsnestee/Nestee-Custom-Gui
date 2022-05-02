laf.registerFunction("drawComboBox", function(g, obj)
{

	g.setColour(obj.bgColour);
	g.drawRoundedRectangle(obj.area, 0, 2.5);
    g.setFont("Actay Wide", 11.0); 
	var a = obj.area;
	g.drawAlignedText(obj.text, [a[0] + 10, a[1], a[2]-10, a[3]], "left");
	var h = a[3];
	g.fillTriangle([a[0] + a[2] - h/3 - 10, a[1] + h/3, h/3, h/3], Math.PI);

});


laf.registerFunction("drawPopupMenuItem", function(g, obj)
{
    var a = obj.area;
    var h = a[3];
    
    if(obj.isSeparator)
    {
        g.setColour(Colours.white);
        g.drawLine(a[0]+10, a[0] + a[2]-10, a[1] + a[3]/2, a[1] + a[3]/2, 1.0);
        return;
    }
    
    if(obj.isTicked)
    {
        g.setColour(nOffWhite);
        
        g.fillEllipse([a[0] + h/5, a[1] + h/2.5, h/5, h/5]);
    }
    
    if(obj.isHighlighted)
    {
        g.setColour(nOffWhite);
        g.setOpacity(0.1);
        g.fillRect(obj.area);
    }
    
    g.setFont("Actay Wide", 9.0);
    g.setColour(Colours.white);
    g.drawAlignedText(obj.text, [a[0] + h, a[1], a[2] - h, a[3]], "left");
});



laf.registerFunction("drawPopupMenuBackground", function(g, obj)
{
    g.fillAll(nBlack);
    g.setColour(nOffWhite);
    
    g.drawRect([0, 0, obj.width, obj.height], 1);
});