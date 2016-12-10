/**
 * Created by vandana on 12/3/16.
 */
var formComponent=angular.module('formComponent', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

formComponent.controller('formComponentController', function($scope, $mdDialog) {
    $scope.item="chandan";
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showAlert = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };
    $scope.showPrompt = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
            .title('What would you name your dog?')
            .textContent('Bowser is a common name.')
            .placeholder('Dog name')
            .ariaLabel('Dog name')
            .initialValue('Buddy')
            .targetEvent(ev)
            .ok('Okay!')
            .cancel('I\'m a cat person');

        $mdDialog.show(confirm).then(function(result) {
            $scope.status = 'You decided to name your dog ' + result + '.';
        }, function() {
            $scope.status = 'You didn\'t name your dog.';
        });
    };



});
formComponent.directive("formComponentLeftPanel", function($compile){
    return function(scope, element, attrs){
        var allAutomicElements=element.find('li');
        angular.forEach(allAutomicElements, function (item, index) {
            angular.element(item).on("click", function(evt){
                scope.showPrompt(evt);
               var targetElemnt=$(this);
               var generatedHtml;
               switch(targetElemnt.attr("tagType")){
                   case 'text':generatedHtml=createTextBox("defaultLabel");
                                break;
                   case 'checkbox':generatedHtml=createCheckBox(2,["check1","check2"]);
                                break;
                   case 'radio':generatedHtml=createRadio(2,["radio1","radio2"]);
                                  break;
                   case  'select':generatedHtml=createSelect("defaultLabel",["option1","option2"]);
                                break;
               }
                //console.log(generatedHtml);
                var listElement=$("<li></li>").html(generatedHtml);
                angular.element($("[form-component-right-panel]").find('ol')).append($compile(listElement)(scope));
            });
        });
       /* element.bind("click", function(){
            scope.count++;
            angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
        });*/
    };
});



