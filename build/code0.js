gdjs.webclickCode = {};
gdjs.webclickCode.localVariables = [];
gdjs.webclickCode.GDNewTextObjects1= [];
gdjs.webclickCode.GDNewTextObjects2= [];
gdjs.webclickCode.GDNewTiledSpriteObjects1= [];
gdjs.webclickCode.GDNewTiledSpriteObjects2= [];
gdjs.webclickCode.GDPlayable_9595CharacterObjects1= [];
gdjs.webclickCode.GDPlayable_9595CharacterObjects2= [];
gdjs.webclickCode.GDdialogue_9595backgroundObjects1= [];
gdjs.webclickCode.GDdialogue_9595backgroundObjects2= [];
gdjs.webclickCode.GDMessage_9595boxObjects1= [];
gdjs.webclickCode.GDMessage_9595boxObjects2= [];
gdjs.webclickCode.GDdialogue_9595txtObjects1= [];
gdjs.webclickCode.GDdialogue_9595txtObjects2= [];
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects1= [];
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects2= [];
gdjs.webclickCode.GDFilterObjects1= [];
gdjs.webclickCode.GDFilterObjects2= [];
gdjs.webclickCode.GDLightObjects1= [];
gdjs.webclickCode.GDLightObjects2= [];
gdjs.webclickCode.GDFilter_9595endObjects1= [];
gdjs.webclickCode.GDFilter_9595endObjects2= [];


gdjs.webclickCode.asyncCallback14550492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.webclickCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intro", false);
}gdjs.webclickCode.localVariables.length = 0;
}
gdjs.webclickCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.webclickCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.webclickCode.asyncCallback14550492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.webclickCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.webclickCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.webclickCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.webclickCode.GDNewTextObjects1.length = 0;
gdjs.webclickCode.GDNewTextObjects2.length = 0;
gdjs.webclickCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.webclickCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.webclickCode.GDPlayable_9595CharacterObjects1.length = 0;
gdjs.webclickCode.GDPlayable_9595CharacterObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595backgroundObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595backgroundObjects2.length = 0;
gdjs.webclickCode.GDMessage_9595boxObjects1.length = 0;
gdjs.webclickCode.GDMessage_9595boxObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595txtObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595txtObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects2.length = 0;
gdjs.webclickCode.GDFilterObjects1.length = 0;
gdjs.webclickCode.GDFilterObjects2.length = 0;
gdjs.webclickCode.GDLightObjects1.length = 0;
gdjs.webclickCode.GDLightObjects2.length = 0;
gdjs.webclickCode.GDFilter_9595endObjects1.length = 0;
gdjs.webclickCode.GDFilter_9595endObjects2.length = 0;

gdjs.webclickCode.eventsList1(runtimeScene);
gdjs.webclickCode.GDNewTextObjects1.length = 0;
gdjs.webclickCode.GDNewTextObjects2.length = 0;
gdjs.webclickCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.webclickCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.webclickCode.GDPlayable_9595CharacterObjects1.length = 0;
gdjs.webclickCode.GDPlayable_9595CharacterObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595backgroundObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595backgroundObjects2.length = 0;
gdjs.webclickCode.GDMessage_9595boxObjects1.length = 0;
gdjs.webclickCode.GDMessage_9595boxObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595txtObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595txtObjects2.length = 0;
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects1.length = 0;
gdjs.webclickCode.GDdialogue_9595txt_9595introObjects2.length = 0;
gdjs.webclickCode.GDFilterObjects1.length = 0;
gdjs.webclickCode.GDFilterObjects2.length = 0;
gdjs.webclickCode.GDLightObjects1.length = 0;
gdjs.webclickCode.GDLightObjects2.length = 0;
gdjs.webclickCode.GDFilter_9595endObjects1.length = 0;
gdjs.webclickCode.GDFilter_9595endObjects2.length = 0;


return;

}

gdjs['webclickCode'] = gdjs.webclickCode;
