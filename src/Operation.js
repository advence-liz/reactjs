import _ from "lodash";

var Enum ={};

Enum.getName=(object,value)=>{

return _.findKey(object, function(o) 
    { 
        return o==value; 
    });
}
Enum.getNames= function(){

}
Enum.getValue = function(){

}
Enum.getValues = function(){

}

class CAOperation {
  
    static getName(operation) {
        return operation.siteCollectionUrl.replace(/(\/|:)/g, '');
    }
    static getID(operation) {

        return this.getName(operation) + 'ID';
    }

}


export {Enum as default ,CAOperation };