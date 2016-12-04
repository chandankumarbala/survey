/**
 * Created by vandana on 12/3/16.
 */
var formComponent=angular.module('formComponent', []);
formComponent.controller("formComponentController",function($scope){
    $scope.item="chandan";
});


formComponent.directive("formComponentLeftPanel", function($compile){
    return function(scope, element, attrs){

        var allAutomicElements=element.find('li');
        angular.forEach(allAutomicElements, function (item, index) {
            console.log(item);

            angular.element(item).bind("click", function(){
                var targetElemnt=$(this);
                var clonedObject=angular.copy(targetElemnt.html());
                var enabledClonedObj=$(clonedObject).removeClass('disabled');
                var label=enabledClonedObj.find('label').text("");
                enabledClonedObj.find('label').remove().append(label);

                var listElement=$("<li></li>").html(enabledClonedObj);
                angular.element($("[form-component-right-panel]").find('ol')).append($compile(listElement)(scope));
            });
        });
       /* element.bind("click", function(){
            scope.count++;
            angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
        });*/
    };
});