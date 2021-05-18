gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDControlsObjects1= [];
gdjs.MenuCode.GDControlsObjects2= [];
gdjs.MenuCode.GDControlsObjects3= [];
gdjs.MenuCode.GDAimObjects1= [];
gdjs.MenuCode.GDAimObjects2= [];
gdjs.MenuCode.GDAimObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDStartTextObjects1= [];
gdjs.MenuCode.GDStartTextObjects2= [];
gdjs.MenuCode.GDStartTextObjects3= [];
gdjs.MenuCode.GDCheatObjects1= [];
gdjs.MenuCode.GDCheatObjects2= [];
gdjs.MenuCode.GDCheatObjects3= [];
gdjs.MenuCode.GDCheatTextObjects1= [];
gdjs.MenuCode.GDCheatTextObjects2= [];
gdjs.MenuCode.GDCheatTextObjects3= [];
gdjs.MenuCode.GDMuteTextObjects1= [];
gdjs.MenuCode.GDMuteTextObjects2= [];
gdjs.MenuCode.GDMuteTextObjects3= [];
gdjs.MenuCode.GDMuteObjects1= [];
gdjs.MenuCode.GDMuteObjects2= [];
gdjs.MenuCode.GDMuteObjects3= [];
gdjs.MenuCode.GDmountainObjects1= [];
gdjs.MenuCode.GDmountainObjects2= [];
gdjs.MenuCode.GDmountainObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteText"), gdjs.MenuCode.GDMuteTextObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMuteTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMuteTextObjects2[i].setString("Mute");
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) != 100;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteText"), gdjs.MenuCode.GDMuteTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMuteTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMuteTextObjects1[i].setString("Unmute");
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatObjects1Objects = Hashtable.newFrom({"Cheat": gdjs.MenuCode.GDCheatObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMuteObjects1Objects = Hashtable.newFrom({"Mute": gdjs.MenuCode.GDMuteObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) != 100;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteText"), gdjs.MenuCode.GDMuteTextObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDMuteTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDMuteTextObjects2[i].setString("Mute");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) == 100;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MuteText"), gdjs.MenuCode.GDMuteTextObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDMuteTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMuteTextObjects1[i].setString("Unmute");
}
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\music.wav", true, 2, 1);
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cheat"), gdjs.MenuCode.GDCheatObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCheatObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mute"), gdjs.MenuCode.GDMuteObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMuteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDControlsObjects1.length = 0;
gdjs.MenuCode.GDControlsObjects2.length = 0;
gdjs.MenuCode.GDControlsObjects3.length = 0;
gdjs.MenuCode.GDAimObjects1.length = 0;
gdjs.MenuCode.GDAimObjects2.length = 0;
gdjs.MenuCode.GDAimObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDStartTextObjects1.length = 0;
gdjs.MenuCode.GDStartTextObjects2.length = 0;
gdjs.MenuCode.GDStartTextObjects3.length = 0;
gdjs.MenuCode.GDCheatObjects1.length = 0;
gdjs.MenuCode.GDCheatObjects2.length = 0;
gdjs.MenuCode.GDCheatObjects3.length = 0;
gdjs.MenuCode.GDCheatTextObjects1.length = 0;
gdjs.MenuCode.GDCheatTextObjects2.length = 0;
gdjs.MenuCode.GDCheatTextObjects3.length = 0;
gdjs.MenuCode.GDMuteTextObjects1.length = 0;
gdjs.MenuCode.GDMuteTextObjects2.length = 0;
gdjs.MenuCode.GDMuteTextObjects3.length = 0;
gdjs.MenuCode.GDMuteObjects1.length = 0;
gdjs.MenuCode.GDMuteObjects2.length = 0;
gdjs.MenuCode.GDMuteObjects3.length = 0;
gdjs.MenuCode.GDmountainObjects1.length = 0;
gdjs.MenuCode.GDmountainObjects2.length = 0;
gdjs.MenuCode.GDmountainObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
