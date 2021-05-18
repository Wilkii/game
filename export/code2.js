gdjs.EndCode = {};
gdjs.EndCode.GDCongratulationsObjects1= [];
gdjs.EndCode.GDCongratulationsObjects2= [];
gdjs.EndCode.GDGemsObjects1= [];
gdjs.EndCode.GDGemsObjects2= [];
gdjs.EndCode.GDTimeObjects1= [];
gdjs.EndCode.GDTimeObjects2= [];
gdjs.EndCode.GDfountainObjects1= [];
gdjs.EndCode.GDfountainObjects2= [];
gdjs.EndCode.GDMenuTextObjects1= [];
gdjs.EndCode.GDMenuTextObjects2= [];
gdjs.EndCode.GDmenuObjects1= [];
gdjs.EndCode.GDmenuObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDmenuObjects1Objects = Hashtable.newFrom({"menu": gdjs.EndCode.GDmenuObjects1});gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Gems"), gdjs.EndCode.GDGemsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time"), gdjs.EndCode.GDTimeObjects1);
{for(var i = 0, len = gdjs.EndCode.GDGemsObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDGemsObjects1[i].setString("Gems: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.EndCode.GDTimeObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDTimeObjects1[i].setString("Time taken: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) * 100) / 100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("menu"), gdjs.EndCode.GDmenuObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDmenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDCongratulationsObjects1.length = 0;
gdjs.EndCode.GDCongratulationsObjects2.length = 0;
gdjs.EndCode.GDGemsObjects1.length = 0;
gdjs.EndCode.GDGemsObjects2.length = 0;
gdjs.EndCode.GDTimeObjects1.length = 0;
gdjs.EndCode.GDTimeObjects2.length = 0;
gdjs.EndCode.GDfountainObjects1.length = 0;
gdjs.EndCode.GDfountainObjects2.length = 0;
gdjs.EndCode.GDMenuTextObjects1.length = 0;
gdjs.EndCode.GDMenuTextObjects2.length = 0;
gdjs.EndCode.GDmenuObjects1.length = 0;
gdjs.EndCode.GDmenuObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
