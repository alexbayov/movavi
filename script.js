function tab_1(){
    var test = document.getElementById('tab-first');
    test.setAttribute('class', 'b-tabs__tab b-tabs__tab_active');
    var del = document.getElementById('tab-second');
    del.setAttribute('class', 'b-tabs__tab');
    var testGroup = document.getElementById('tab-bl-first');
    testGroup.setAttribute('class', 'bx-wrapper b-tabs__tab-content b-tabs__tab-content_active');
    var testGroupDel = document.getElementById('tab-bl-second');
    testGroupDel.setAttribute('class', 'bx-wrapper b-tabs__tab-content');

}

function tab_2(){
    var test = document.getElementById('tab-second');
    test.setAttribute('class', 'b-tabs__tab b-tabs__tab_active');
    var del = document.getElementById('tab-first');
    del.setAttribute('class', 'b-tabs__tab');
    var testGroup = document.getElementById('tab-bl-second');
    testGroup.setAttribute('class', 'bx-wrapper b-tabs__tab-content b-tabs__tab-content_active');
    var testGroupDel = document.getElementById('tab-bl-first');
    testGroupDel.setAttribute('class', 'bx-wrapper b-tabs__tab-content');

}


