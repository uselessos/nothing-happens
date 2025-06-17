
gdjs.evtsExt__Message_box__Message_box = gdjs.evtsExt__Message_box__Message_box || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Message_box__Message_box.Message_box = class Message_box extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
  // gdjs.TextContainer interface implementation
  _text = '';
  getText() {
    return this._text;
  }
  setText(text) {
    this._text = text;
  }

}

// Methods:
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext = {};
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects2= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects2= [];


gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("txt"), gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1);
{for(var i = 0, len = gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsString());
}
}}

}


};

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDtxtObjectsList = [...runtimeScene.getObjects("txt")];
var GDtxtObjects = Hashtable.newFrom({"txt": thisGDtxtObjectsList});
var thisGDbackground_9595panelObjectsList = [...runtimeScene.getObjects("background_panel")];
var GDbackground_9595panelObjects = Hashtable.newFrom({"background_panel": thisGDbackground_9595panelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "txt": GDtxtObjects
, "background_panel": GDbackground_9595panelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "txt": thisGDtxtObjectsList
, "background_panel": thisGDbackground_9595panelObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Message_box"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Message_box"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects2.length = 0;

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDtxtObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.onCreatedContext.GDbackground_9595panelObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext = {};
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects2= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects2= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects1= [];
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects2= [];


gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_text = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDtxtObjectsList = [...runtimeScene.getObjects("txt")];
var GDtxtObjects = Hashtable.newFrom({"txt": thisGDtxtObjectsList});
var thisGDbackground_9595panelObjectsList = [...runtimeScene.getObjects("background_panel")];
var GDbackground_9595panelObjects = Hashtable.newFrom({"background_panel": thisGDbackground_9595panelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "txt": GDtxtObjects
, "background_panel": GDbackground_9595panelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "txt": thisGDtxtObjectsList
, "background_panel": thisGDbackground_9595panelObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Message_box"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Message_box"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects2.length = 0;

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDtxtObjects2.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects1.length = 0;
gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.change_textContext.GDbackground_9595panelObjects2.length = 0;


return;
}

gdjs.evtsExt__Message_box__Message_box.Message_box.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("Message_box::Message_box", gdjs.evtsExt__Message_box__Message_box.Message_box);
