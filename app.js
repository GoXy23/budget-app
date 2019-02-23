// Budget controller
var budgetController = (function() {

    

})();



// UI controller
var UIcontroller = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };


    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();



// Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            
            if(event.keyCode === 13 || event.which === 13) {  
                ctrlAddItem();
            }

        });
    }

    

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
    
        // 2. Add item to the budget controller

        // 3. Add the new item to UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    return {
        init: function() {
            console.log('started');
            setupEventListeners();
        }
    };

})(budgetController, UIcontroller);

controller.init();