gdjs.LevelCode = {};
gdjs.LevelCode.GDPlayerObjects3_1final = [];

gdjs.LevelCode.GDCoinsObjects1= [];
gdjs.LevelCode.GDCoinsObjects2= [];
gdjs.LevelCode.GDCoinsObjects3= [];
gdjs.LevelCode.GDCoinsObjects4= [];
gdjs.LevelCode.GDTimerObjects1= [];
gdjs.LevelCode.GDTimerObjects2= [];
gdjs.LevelCode.GDTimerObjects3= [];
gdjs.LevelCode.GDTimerObjects4= [];
gdjs.LevelCode.GDStatsObjects1= [];
gdjs.LevelCode.GDStatsObjects2= [];
gdjs.LevelCode.GDStatsObjects3= [];
gdjs.LevelCode.GDStatsObjects4= [];
gdjs.LevelCode.GDGemObjects1= [];
gdjs.LevelCode.GDGemObjects2= [];
gdjs.LevelCode.GDGemObjects3= [];
gdjs.LevelCode.GDGemObjects4= [];
gdjs.LevelCode.GDJumpObjects1= [];
gdjs.LevelCode.GDJumpObjects2= [];
gdjs.LevelCode.GDJumpObjects3= [];
gdjs.LevelCode.GDJumpObjects4= [];
gdjs.LevelCode.GDLuckObjects1= [];
gdjs.LevelCode.GDLuckObjects2= [];
gdjs.LevelCode.GDLuckObjects3= [];
gdjs.LevelCode.GDLuckObjects4= [];
gdjs.LevelCode.GDPlayerObjects1= [];
gdjs.LevelCode.GDPlayerObjects2= [];
gdjs.LevelCode.GDPlayerObjects3= [];
gdjs.LevelCode.GDPlayerObjects4= [];
gdjs.LevelCode.GDBedObjects1= [];
gdjs.LevelCode.GDBedObjects2= [];
gdjs.LevelCode.GDBedObjects3= [];
gdjs.LevelCode.GDBedObjects4= [];
gdjs.LevelCode.GDCoinObjects1= [];
gdjs.LevelCode.GDCoinObjects2= [];
gdjs.LevelCode.GDCoinObjects3= [];
gdjs.LevelCode.GDCoinObjects4= [];
gdjs.LevelCode.GDGoalObjects1= [];
gdjs.LevelCode.GDGoalObjects2= [];
gdjs.LevelCode.GDGoalObjects3= [];
gdjs.LevelCode.GDGoalObjects4= [];
gdjs.LevelCode.GDground1Objects1= [];
gdjs.LevelCode.GDground1Objects2= [];
gdjs.LevelCode.GDground1Objects3= [];
gdjs.LevelCode.GDground1Objects4= [];
gdjs.LevelCode.GDground2Objects1= [];
gdjs.LevelCode.GDground2Objects2= [];
gdjs.LevelCode.GDground2Objects3= [];
gdjs.LevelCode.GDground2Objects4= [];
gdjs.LevelCode.GDground3Objects1= [];
gdjs.LevelCode.GDground3Objects2= [];
gdjs.LevelCode.GDground3Objects3= [];
gdjs.LevelCode.GDground3Objects4= [];
gdjs.LevelCode.GDground4Objects1= [];
gdjs.LevelCode.GDground4Objects2= [];
gdjs.LevelCode.GDground4Objects3= [];
gdjs.LevelCode.GDground4Objects4= [];
gdjs.LevelCode.GDbridgebackObjects1= [];
gdjs.LevelCode.GDbridgebackObjects2= [];
gdjs.LevelCode.GDbridgebackObjects3= [];
gdjs.LevelCode.GDbridgebackObjects4= [];
gdjs.LevelCode.GDbridgefrontObjects1= [];
gdjs.LevelCode.GDbridgefrontObjects2= [];
gdjs.LevelCode.GDbridgefrontObjects3= [];
gdjs.LevelCode.GDbridgefrontObjects4= [];
gdjs.LevelCode.GDwater1Objects1= [];
gdjs.LevelCode.GDwater1Objects2= [];
gdjs.LevelCode.GDwater1Objects3= [];
gdjs.LevelCode.GDwater1Objects4= [];
gdjs.LevelCode.GDwater2Objects1= [];
gdjs.LevelCode.GDwater2Objects2= [];
gdjs.LevelCode.GDwater2Objects3= [];
gdjs.LevelCode.GDwater2Objects4= [];
gdjs.LevelCode.GDcloudsObjects1= [];
gdjs.LevelCode.GDcloudsObjects2= [];
gdjs.LevelCode.GDcloudsObjects3= [];
gdjs.LevelCode.GDcloudsObjects4= [];
gdjs.LevelCode.GDdarkObjects1= [];
gdjs.LevelCode.GDdarkObjects2= [];
gdjs.LevelCode.GDdarkObjects3= [];
gdjs.LevelCode.GDdarkObjects4= [];
gdjs.LevelCode.GDmoonObjects1= [];
gdjs.LevelCode.GDmoonObjects2= [];
gdjs.LevelCode.GDmoonObjects3= [];
gdjs.LevelCode.GDmoonObjects4= [];
gdjs.LevelCode.GDskyObjects1= [];
gdjs.LevelCode.GDskyObjects2= [];
gdjs.LevelCode.GDskyObjects3= [];
gdjs.LevelCode.GDskyObjects4= [];

gdjs.LevelCode.conditionTrue_0 = {val:false};
gdjs.LevelCode.condition0IsTrue_0 = {val:false};
gdjs.LevelCode.condition1IsTrue_0 = {val:false};
gdjs.LevelCode.condition2IsTrue_0 = {val:false};
gdjs.LevelCode.conditionTrue_1 = {val:false};
gdjs.LevelCode.condition0IsTrue_1 = {val:false};
gdjs.LevelCode.condition1IsTrue_1 = {val:false};
gdjs.LevelCode.condition2IsTrue_1 = {val:false};


gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LevelCode.GDPlayerObjects2, gdjs.LevelCode.GDPlayerObjects3);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
{gdjs.LevelCode.conditionTrue_1 = gdjs.LevelCode.condition0IsTrue_0;
gdjs.LevelCode.GDPlayerObjects3_1final.length = 0;gdjs.LevelCode.condition0IsTrue_1.val = false;
gdjs.LevelCode.condition1IsTrue_1.val = false;
{
gdjs.LevelCode.condition0IsTrue_1.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 60, "Timer");
if( gdjs.LevelCode.condition0IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
}
}
{
gdjs.copyArray(gdjs.LevelCode.GDPlayerObjects2, gdjs.LevelCode.GDPlayerObjects4);

for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerObjects4[i].getY() > 360 ) {
        gdjs.LevelCode.condition1IsTrue_1.val = true;
        gdjs.LevelCode.GDPlayerObjects4[k] = gdjs.LevelCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerObjects4.length = k;if( gdjs.LevelCode.condition1IsTrue_1.val ) {
    gdjs.LevelCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.LevelCode.GDPlayerObjects4.length;j<jLen;++j) {
        if ( gdjs.LevelCode.GDPlayerObjects3_1final.indexOf(gdjs.LevelCode.GDPlayerObjects4[j]) === -1 )
            gdjs.LevelCode.GDPlayerObjects3_1final.push(gdjs.LevelCode.GDPlayerObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.LevelCode.GDPlayerObjects3_1final, gdjs.LevelCode.GDPlayerObjects3);
}
}
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


};gdjs.LevelCode.eventsList1 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.LevelCode.GDTimerObjects3);
{for(var i = 0, len = gdjs.LevelCode.GDTimerObjects3.length ;i < len;++i) {
    gdjs.LevelCode.GDTimerObjects3[i].setString("Time left:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(60 - gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer"))));
}
}
{ //Subevents
gdjs.LevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPlayerObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Timer"), gdjs.LevelCode.GDTimerObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDTimerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDTimerObjects2[i].setString("Time elapsed:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer"))));
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(0);
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 600, 0);
}
}}

}


};gdjs.LevelCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LevelCode.GDCoinsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.LevelCode.GDStatsObjects2);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LevelCode.GDPlayerObjects2.length !== 0 ? gdjs.LevelCode.GDPlayerObjects2[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.LevelCode.GDStatsObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDStatsObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoinsObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinsObjects2[i].setString("Coins:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + (100), "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, 180, "", 0);
}
{ //Subevents
gdjs.LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.LevelCode.GDStatsObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDStatsObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDStatsObjects1[i].setString("The stats are:");
}
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.LevelCode.GDPlayerObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.LevelCode.GDCoinObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelCode.GDPlayerObjects1});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.LevelCode.GDGoalObjects1});gdjs.LevelCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects2);

gdjs.LevelCode.condition0IsTrue_0.val = false;
gdjs.LevelCode.condition1IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects2Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects2Objects, false, runtimeScene, false);
}if ( gdjs.LevelCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDCoinObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDCoinObjects2[i].getVariableNumber(gdjs.LevelCode.GDCoinObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.LevelCode.condition1IsTrue_0.val = true;
        gdjs.LevelCode.GDCoinObjects2[k] = gdjs.LevelCode.GDCoinObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDCoinObjects2.length = k;}}
if (gdjs.LevelCode.condition1IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDCoinObjects2 */
/* Reuse gdjs.LevelCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects2[i].returnVariable(gdjs.LevelCode.GDCoinObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects2[i].setAnimation(1);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").getMaxSpeed() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 100));
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setAcceleration(gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").getAcceleration() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 150));
}
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setDeceleration(gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").getDeceleration() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 100));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sounds\\gem.wav", false, 2, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.LevelCode.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoalObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Level Timer").setNumber(gdjs.evtTools.common.trunc(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Timer") * 100) / 100);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", true);
}}

}


};gdjs.LevelCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.LevelCode.GDPlayerObjects2, gdjs.LevelCode.GDPlayerObjects3);


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerObjects3[k] = gdjs.LevelCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerObjects3.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects3[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.LevelCode.GDPlayerObjects2 */

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerObjects2[k] = gdjs.LevelCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].setAnimationName("Idle");
}
}}

}


};gdjs.LevelCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects2);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerObjects2[k] = gdjs.LevelCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LevelCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


};gdjs.LevelCode.eventsList6 = function(runtimeScene) {

{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sky"), gdjs.LevelCode.GDskyObjects1);
gdjs.copyArray(runtimeScene.getObjects("water1"), gdjs.LevelCode.GDwater1Objects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{for(var i = 0, len = gdjs.LevelCode.GDwater1Objects1.length ;i < len;++i) {
    gdjs.LevelCode.GDwater1Objects1[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.LevelCode.GDskyObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDskyObjects1[i].setOpacity(150);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.LevelCode.eventsList2(runtimeScene);
}


{


gdjs.LevelCode.eventsList3(runtimeScene);
}


{


gdjs.LevelCode.eventsList5(runtimeScene);
}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDCoinsObjects1.length = 0;
gdjs.LevelCode.GDCoinsObjects2.length = 0;
gdjs.LevelCode.GDCoinsObjects3.length = 0;
gdjs.LevelCode.GDCoinsObjects4.length = 0;
gdjs.LevelCode.GDTimerObjects1.length = 0;
gdjs.LevelCode.GDTimerObjects2.length = 0;
gdjs.LevelCode.GDTimerObjects3.length = 0;
gdjs.LevelCode.GDTimerObjects4.length = 0;
gdjs.LevelCode.GDStatsObjects1.length = 0;
gdjs.LevelCode.GDStatsObjects2.length = 0;
gdjs.LevelCode.GDStatsObjects3.length = 0;
gdjs.LevelCode.GDStatsObjects4.length = 0;
gdjs.LevelCode.GDGemObjects1.length = 0;
gdjs.LevelCode.GDGemObjects2.length = 0;
gdjs.LevelCode.GDGemObjects3.length = 0;
gdjs.LevelCode.GDGemObjects4.length = 0;
gdjs.LevelCode.GDJumpObjects1.length = 0;
gdjs.LevelCode.GDJumpObjects2.length = 0;
gdjs.LevelCode.GDJumpObjects3.length = 0;
gdjs.LevelCode.GDJumpObjects4.length = 0;
gdjs.LevelCode.GDLuckObjects1.length = 0;
gdjs.LevelCode.GDLuckObjects2.length = 0;
gdjs.LevelCode.GDLuckObjects3.length = 0;
gdjs.LevelCode.GDLuckObjects4.length = 0;
gdjs.LevelCode.GDPlayerObjects1.length = 0;
gdjs.LevelCode.GDPlayerObjects2.length = 0;
gdjs.LevelCode.GDPlayerObjects3.length = 0;
gdjs.LevelCode.GDPlayerObjects4.length = 0;
gdjs.LevelCode.GDBedObjects1.length = 0;
gdjs.LevelCode.GDBedObjects2.length = 0;
gdjs.LevelCode.GDBedObjects3.length = 0;
gdjs.LevelCode.GDBedObjects4.length = 0;
gdjs.LevelCode.GDCoinObjects1.length = 0;
gdjs.LevelCode.GDCoinObjects2.length = 0;
gdjs.LevelCode.GDCoinObjects3.length = 0;
gdjs.LevelCode.GDCoinObjects4.length = 0;
gdjs.LevelCode.GDGoalObjects1.length = 0;
gdjs.LevelCode.GDGoalObjects2.length = 0;
gdjs.LevelCode.GDGoalObjects3.length = 0;
gdjs.LevelCode.GDGoalObjects4.length = 0;
gdjs.LevelCode.GDground1Objects1.length = 0;
gdjs.LevelCode.GDground1Objects2.length = 0;
gdjs.LevelCode.GDground1Objects3.length = 0;
gdjs.LevelCode.GDground1Objects4.length = 0;
gdjs.LevelCode.GDground2Objects1.length = 0;
gdjs.LevelCode.GDground2Objects2.length = 0;
gdjs.LevelCode.GDground2Objects3.length = 0;
gdjs.LevelCode.GDground2Objects4.length = 0;
gdjs.LevelCode.GDground3Objects1.length = 0;
gdjs.LevelCode.GDground3Objects2.length = 0;
gdjs.LevelCode.GDground3Objects3.length = 0;
gdjs.LevelCode.GDground3Objects4.length = 0;
gdjs.LevelCode.GDground4Objects1.length = 0;
gdjs.LevelCode.GDground4Objects2.length = 0;
gdjs.LevelCode.GDground4Objects3.length = 0;
gdjs.LevelCode.GDground4Objects4.length = 0;
gdjs.LevelCode.GDbridgebackObjects1.length = 0;
gdjs.LevelCode.GDbridgebackObjects2.length = 0;
gdjs.LevelCode.GDbridgebackObjects3.length = 0;
gdjs.LevelCode.GDbridgebackObjects4.length = 0;
gdjs.LevelCode.GDbridgefrontObjects1.length = 0;
gdjs.LevelCode.GDbridgefrontObjects2.length = 0;
gdjs.LevelCode.GDbridgefrontObjects3.length = 0;
gdjs.LevelCode.GDbridgefrontObjects4.length = 0;
gdjs.LevelCode.GDwater1Objects1.length = 0;
gdjs.LevelCode.GDwater1Objects2.length = 0;
gdjs.LevelCode.GDwater1Objects3.length = 0;
gdjs.LevelCode.GDwater1Objects4.length = 0;
gdjs.LevelCode.GDwater2Objects1.length = 0;
gdjs.LevelCode.GDwater2Objects2.length = 0;
gdjs.LevelCode.GDwater2Objects3.length = 0;
gdjs.LevelCode.GDwater2Objects4.length = 0;
gdjs.LevelCode.GDcloudsObjects1.length = 0;
gdjs.LevelCode.GDcloudsObjects2.length = 0;
gdjs.LevelCode.GDcloudsObjects3.length = 0;
gdjs.LevelCode.GDcloudsObjects4.length = 0;
gdjs.LevelCode.GDdarkObjects1.length = 0;
gdjs.LevelCode.GDdarkObjects2.length = 0;
gdjs.LevelCode.GDdarkObjects3.length = 0;
gdjs.LevelCode.GDdarkObjects4.length = 0;
gdjs.LevelCode.GDmoonObjects1.length = 0;
gdjs.LevelCode.GDmoonObjects2.length = 0;
gdjs.LevelCode.GDmoonObjects3.length = 0;
gdjs.LevelCode.GDmoonObjects4.length = 0;
gdjs.LevelCode.GDskyObjects1.length = 0;
gdjs.LevelCode.GDskyObjects2.length = 0;
gdjs.LevelCode.GDskyObjects3.length = 0;
gdjs.LevelCode.GDskyObjects4.length = 0;

gdjs.LevelCode.eventsList6(runtimeScene);
return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
