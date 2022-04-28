Content.makeFrontInterface(600, 600);

const var Panel1 = Content.getComponent("Panel1");
const var laf = Engine.createGlobalScriptLookAndFeel();
//const var nOffWhite = Colours.fromVec4([0.98, 0.976, 0.965, 1.0]);
const var nBlack = Colours.fromVec4([0.071, 0.071, 0.071, 1.0]);
const var Button1 = Content.getComponent("Button1");


laf.registerFunction("drawToggleButton", function(g, obj)
{
	g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.6]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.5]));
	if(obj.value)
	{
		g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.8]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.5]));
	}
	
	g.drawLine(1, obj.value ? 149.5 : 11, 1, 1, obj.over ? 1.0 : 0.0);
	g.drawLine(obj.value ? 1 : 140, 149.5, 29, 29, obj.over ? 1.0 : 0.0);
	g.drawLine(1.5, 1.5, 0.5, obj.value ? 29.5 : 11, obj.over ? 1.0 : 0.0);
	g.drawLine(149, 149, obj.value ? 0.5 : 20, 29.5, obj.over ? 1.0 : 0.0);
	
	g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 0.8]) 
				: Colours.fromVec4([0.98, 0.976, 0.965, 0.3]));
	
	if(obj.value)
		{
			g.setColour(obj.over ? Colours.fromVec4([0.98, 0.976, 0.965, 1.0]) 
					: Colours.fromVec4([0.98, 0.976, 0.965, 0.9]));
					
		}
	g.drawText(obj.value ? "DE-ACTIFY" : "ACTIFY", obj.area);
	
});

Panel1.setPaintRoutine(function(g)
{
	g.fillAll(nBlack);

});function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 