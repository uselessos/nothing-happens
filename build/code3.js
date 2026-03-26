gdjs.outroCode = {};
gdjs.outroCode.localVariables = [];
gdjs.outroCode.idToCallbackMap = new Map();


gdjs.outroCode.eventsList0 = function(runtimeScene) {

};

gdjs.outroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.outroCode.eventsList0(runtimeScene);


return;

}

gdjs['outroCode'] = gdjs.outroCode;
