Content.makeFrontInterface(600, 600);


include("TextButton.js");
include("DefaultColours.js");
include("RotarySlider.js");


reg compInit = 0;
////////////////////////Components References////////////////////////////////////////
const var Panel1 = Content.getComponent("Panel1");
	Panel1.setPaintRoutine(function(g)
{
	g.fillAll(nBlack);

});

const var Knob1 = Content.getComponent("Knob1");
	Knob1.setControlCallback(onKnob1Control);
	
const var Button1 = Content.getComponent("Button1");
const var Label1 = Content.getComponent("Label1");
const var knbTimer = Engine.createTimerObject();


//////////////////Components Functions///////////////////////////////////////////////
inline function onKnob1Control(component, value)
{
	knbTimer.startTimer(400);
	if(compInit == 1)
		Label1.set("text", Math.round(value * 100) + Knob1.get("suffix"));
	Label1.changed();
	compInit = 1;
};


knbTimer.setTimerCallback(function()
{
	Label1.set("text", Knob1.get("text"));
	Label1.changed();
	knbTimer.stopTimer();

});


function onNoteOn()
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
 