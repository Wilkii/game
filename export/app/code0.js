gdjs.LevelCode = {};
gdjs.LevelCode.GDPlayerObjects1= [];
gdjs.LevelCode.GDPlayerObjects2= [];
gdjs.LevelCode.GDPlayerObjects3= [];
gdjs.LevelCode.GDPlatformObjects1= [];
gdjs.LevelCode.GDPlatformObjects2= [];
gdjs.LevelCode.GDPlatformObjects3= [];
gdjs.LevelCode.GDCoinObjects1= [];
gdjs.LevelCode.GDCoinObjects2= [];
gdjs.LevelCode.GDCoinObjects3= [];
gdjs.LevelCode.GDGoalObjects1= [];
gdjs.LevelCode.GDGoalObjects2= [];
gdjs.LevelCode.GDGoalObjects3= [];
gdjs.LevelCode.GDExplanationObjects1= [];
gdjs.LevelCode.GDExplanationObjects2= [];
gdjs.LevelCode.GDExplanationObjects3= [];
gdjs.LevelCode.GDCoinsObjects1= [];
gdjs.LevelCode.GDCoinsObjects2= [];
gdjs.LevelCode.GDCoinsObjects3= [];

gdjs.LevelCode.conditionTrue_0 = {val:false};
gdjs.LevelCode.condition0IsTrue_0 = {val:false};
gdjs.LevelCode.condition1IsTrue_0 = {val:false};
gdjs.LevelCode.condition2IsTrue_0 = {val:false};


gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.LevelCode.GDPlayerObjects1.length !== 0 ? gdjs.LevelCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.4, "", 0);
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.LevelCode.GDPlayerObjects2});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.LevelCode.GDCoinObjects2});gdjs.LevelCode.eventsList1 = function(runtimeScene) {

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
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(500 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 500);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelCode.GDCoinObjects2);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDCoinObjects2.length;i<l;++i) {
    if ( gdjs.LevelCode.GDCoinObjects2[i].getVariableNumber(gdjs.LevelCode.GDCoinObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDCoinObjects2[k] = gdjs.LevelCode.GDCoinObjects2[i];
        ++k;
    }
}
gdjs.LevelCode.GDCoinObjects2.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDCoinObjects2 */
{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects2[i].setAnimation(1);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.LevelCode.GDCoinsObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinsObjects1[i].setString("Coins:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.LevelCode.GDCoinObjects1});gdjs.LevelCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LevelCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.LevelCode.GDPlayerObjects1[i].getY() > 1500 ) {
        gdjs.LevelCode.condition0IsTrue_0.val = true;
        gdjs.LevelCode.GDPlayerObjects1[k] = gdjs.LevelCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.LevelCode.GDPlayerObjects1.length = k;}if (gdjs.LevelCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LevelCode.GDCoinObjects1);
/* Reuse gdjs.LevelCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].setPosition(160,768);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.LevelCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(500 + gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * 500);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDCoinObjects1Objects);
}{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects1[i].returnVariable(gdjs.LevelCode.GDCoinObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.LevelCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCoinObjects1[i].setAnimation(0);
}
}}

}


};gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.LevelCode.GDPlayerObjects1});gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoalObjects1Objects = Hashtable.newFrom({"Goal": gdjs.LevelCode.GDGoalObjects1});gdjs.LevelCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goal"), gdjs.LevelCode.GDGoalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.LevelCode.GDPlayerObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDPlayerObjects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDGoalObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.LevelCode.eventsList4 = function(runtimeScene) {

{


gdjs.LevelCode.eventsList0(runtimeScene);
}


{


gdjs.LevelCode.eventsList1(runtimeScene);
}


{


gdjs.LevelCode.eventsList2(runtimeScene);
}


{


gdjs.LevelCode.eventsList3(runtimeScene);
}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDPlayerObjects1.length = 0;
gdjs.LevelCode.GDPlayerObjects2.length = 0;
gdjs.LevelCode.GDPlayerObjects3.length = 0;
gdjs.LevelCode.GDPlatformObjects1.length = 0;
gdjs.LevelCode.GDPlatformObjects2.length = 0;
gdjs.LevelCode.GDPlatformObjects3.length = 0;
gdjs.LevelCode.GDCoinObjects1.length = 0;
gdjs.LevelCode.GDCoinObjects2.length = 0;
gdjs.LevelCode.GDCoinObjects3.length = 0;
gdjs.LevelCode.GDGoalObjects1.length = 0;
gdjs.LevelCode.GDGoalObjects2.length = 0;
gdjs.LevelCode.GDGoalObjects3.length = 0;
gdjs.LevelCode.GDExplanationObjects1.length = 0;
gdjs.LevelCode.GDExplanationObjects2.length = 0;
gdjs.LevelCode.GDExplanationObjects3.length = 0;
gdjs.LevelCode.GDCoinsObjects1.length = 0;
gdjs.LevelCode.GDCoinsObjects2.length = 0;
gdjs.LevelCode.GDCoinsObjects3.length = 0;

gdjs.LevelCode.eventsList4(runtimeScene);
return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
