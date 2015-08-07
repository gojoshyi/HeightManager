/* Height Managing Function beta- Joshua Yi*/

function HeightManager(leftcont, rightcont) {
    this._ = {
        "leftContainer": leftcont,
        "rightContainer": rightcont,
        "setAutoAdjustHook": function (hm, element) {
            $(element + " select").on("change", function (event) {
                hm.formatDataTableHeight(element);
            })
        }
    };

    this.setLeftContainer = function (element) {
        this._.leftContainer = $(element);
    };

    this.setRightContainer = function (element) {
        this._.rightContainer = $(element);
       
    };

    this.setHeight = function (elementToAddHeight) {
        $(elementToAddHeight).removeAttr('style');
        var leftOuterHeight = $(this._.leftContainer).outerHeight();
        var rightOuterHeight = $(this._.rightContainer).outerHeight();

        if (leftOuterHeight < rightOuterHeight) {
            var heightDifference = rightOuterHeight - leftOuterHeight;
            $(elementToAddHeight).css("height", $(elementToAddHeight).height() + heightDifference);
        }
        else
        {
            $(elementToAddHeight).css("padding-bottom", 50);
        }
    };

    this.setBottomLeft = function (element) {
        $(element).removeAttr('style');
        $(element).css({
            'position': 'absolute',
            'bottom': '0',
            'left': '0',
            'padding-bottom': '10px'
        });
    };

    this.setBottomRight = function (element) {
        $(element).removeAttr('style');
        $(element).css({
            'position': 'absolute',
            'bottom': '0',
            'right': '0',
            'padding-bottom': '10px'
        });
    };

    this.formatDataTableHeight = function (element) {
        this.setHeight(element + " .dataTables_wrapper");
        this.setBottomLeft(element + " .dataTables_info");
        this.setBottomRight(element + " .dataTables_paginate");
        this._.setAutoAdjustHook(this, element);
    };

};

/************************************************** var hm = new HeightManager() ****************************************************************
* declare the function/object with left container and right container as parameters                                                             *
* var hm = new HeightManager();                                                                                                                 *
************************************************************************************************************************************************/


/************************************************ .setLeftContainer() / .setRightContainer() ****************************************************
* Set Left/Right Container using identifier string                                                                                              *
* (must be declared before calling any other method inside object)                                                                              *
* hm.setLeftContainer("#id") // hm.setLeftContainer(".class") // hm.setLeftContainer("[data-attribute]")                                        *
* hm.setRightContainer("#id") // hm.setLeftContainer(".class") // hm.setLeftContainer("[data-attribute]")                                       *
*                                                                                                                                               *
* EXAMPLE: hm.setLeftContainer("[data-leftcontainer]"); hm.setRightContainer("[data-rightcontainer]");                                          *
************************************************************************************************************************************************/


/**************************************************** .setHeight() / .setBottomRight() **********************************************************
* Set Height of any element inside of [left container]. Adds difference of height between two containers to element passed in                   *
* hm.setHeight([parent element identifier where data tables is a child element])                                                                *
*                                                                                                                                               *
* EXAMPLE: hm.setHeight("[fan-controller='jobsSearch'] .dataTables_wrapper")                                                                    *
************************************************************************************************************************************************/


/*************************************************** .setBottomLeft() / .setBottomRight() *******************************************************
* clear any existing style css inside html                                                                                                      *
* Position an element at the bottom left/right corner of its parent container                                                                   *
* hm.setBottomRight / hm.setBottomLeft([parent element identifier where data tables is a child element])                                        *
*                                                                                                                                               *
* EXAMPLE: hm.setBottomRight("[fan-controller='jobsSearch'] .dataTables_paginate")                                                              *
*          hm.setBottomLeft("[fan-controller='jobsSearch'] .dataTables_info")                                                                   *
************************************************************************************************************************************************/


/*************************************************** .formatDataTableHeight() *******************************************************************
* Automatically set the height of the data table wrapper, position the information text, and position the pagination                            *
* accoring to the parent container heights                                                                                                      *
* hm.formatDataTableHeight([parent element identifier where data tables is a child element])                                                    *
*                                                                                                                                               *
* EXAMPLE: hm.formatDataTableHeight("[fan-controller='jobsSearch']")                                                                            *
*          will automatically call - set height of dataTables_wrapper                                                                           *
*                                  - set bottom left dataTables_info                                                                            *
*                                  - set bottom right dataTables_paginate                                                                       *
************************************************************************************************************************************************/