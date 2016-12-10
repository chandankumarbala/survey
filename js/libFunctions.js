/**
 * Created with JetBrains PhpStorm.
 * User: chandan
 * Date: 12/10/16
 * Time: 11:56 PM
 * To change this template use File | Settings | File Templates.
 */
var createTextBox=function(label){
    var textboxID="text_"+generateRandomStamp();
    var html='<input type="text" class="form-control" id="'+textboxID+'" placeholder="'+label+'">';
    return html;
}
var createSelect=function(label,options){
    var selectID="select_"+generateRandomStamp();
    var html='<select id="'+selectID+'" class="form-control"><option selected value="0">'+label+'</option>';
    for(var i=0;i<options.length;i++){
        html+='<option value="'+options[i]+'">'+options[i]+'</option>';
    }
    return html+"</select>";
}
var createRadio=function(numberOfItems,labels){
    var html="";
    var radioName="radio_"+generateRandomStamp();
    for(var i=0;i<numberOfItems;i++){
     html+='<div class="radio"><label><input type="radio" id=""  value="'+labels[i]+'" name="'+radioName+'">'+labels[i]+'</label></div>';
    }
    return html;
}
var createCheckBox=function(numberOfItems,labels){
    var html="";
    var radiocheckboxName="radio_"+generateRandomStamp();
    for(var i=0;i<numberOfItems;i++){
        html+='<div class="checkbox"><label><input type="checkbox" id="" value="'+labels[i]+'" name="'+radiocheckboxName+'">'+labels[i]+'</label></div>';
    }
    return html;
}

var generateRandomStamp=function(){
    return Math.round(new Date().getTime()/1000);
}