

// 可编辑下拉列表
/*
 * // 数据不会变化时
 * new EditSelect("id");                // id select下拉列表id
 * // 数据会发生变化时
 * var select = new EditSelect("id");    // id select下拉列表id
 * select.refresh();                    // select下拉列表数据发生改变时 如 联动时
 */
function EditSelect(id,cssID) {

    // 最大size
    EditSelect.maxSize = 15;

    // 最小size
    EditSelect.minSize = 1;
    
    // 固定值
    EditSelect.fixSize = 15;
    
    EditSelect.isShowSelect = false;

    // class
    //IE8 CSS对应
    if(getExplorer() == 'IE 8.0'){
        EditSelect.inputClass = 'editSelect' + cssID + '-IE8';
        EditSelect.selectClass = 'editSelect' + cssID + '-IE8';
        EditSelect.divClass = 'editSelect' + cssID + '-IE8';
    }else{
        EditSelect.inputClass = 'editSelect' + cssID;
        EditSelect.selectClass = 'editSelect' + cssID;
        EditSelect.divClass = 'editSelect' + cssID;
    }
    var inputHtml = '<input/>';
    var selectHtml = '<div><select id="sel'+id+'"></select></div>';
    var $baseSelect = $('#' + id);
    var $input;
    var $select;
    var keySet = new Array();
    var valueSet = new Array();

    init();

    function init() {
        
        // 添加元素
        $baseSelect.after($(selectHtml));
        $baseSelect.after($(inputHtml));

        $input = $baseSelect.next();
        $div = $input.next();
        $select = $div.children();

        // 设置class
        $input.attr('class', EditSelect.inputClass);
        $select.attr('class', EditSelect.selectClass);
        $div.attr('class', EditSelect.divClass);
        
        // 设置id
        $input.attr('id', 'input'+id);
        
        // 隐藏
        hide($select);
        hide($baseSelect);
        bindListener();
        _refresh();
        
        // 设置宽度
        $input.css('width', $baseSelect.css('width'));
        if(getExplorer() == 'IE 8.0'){
            $select.css('width', Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(33)+'px');
            $div.css('width',Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(33)+'px');
            // 动态设置div位置
            setPosition(id);
        }else{
            $select.css('width', Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(34)+'px');
            $div.css('width',Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(34)+'px');
            
        }
    }

    function bindListener() {
        /*
         * enter        13
         * tab            9
         * `            192
         * backspace    8
         * space        32
         * delete        46
         * 0-9            48-57
         * -            189
         * =            187
         * a-z            65-90
         * [            219
         * ]            221
         * \            220
         * ;            186
         * '            222
         * ,            188
         * .            190
         * /            191
         * num
         * /            111
         * *            106
         * -            109
         * +            107
         * .            110
         * 0-9            96-105
         *
         * ↑            38
         * ↓            40
         */
        $input.keyup(function(event) {
            if (event.which == 8
                    || event.which == 32
                    || event.which == 46
                    || (event.which > 48 && event.which < 57)
                    || (event.which > 65 && event.which < 90)
                    || (event.which > 186 && event.which < 192)
                    || (event.which > 219 && event.which < 222)
                    || (event.which > 96 && event.which < 107)
                    || (event.which > 109 && event.which < 111)
                        ) {
                input($input.val());
            } 
//            else if (event.which == 13) {
//                $input.blur();
//            }
        });

        $input.keydown(function(event) {
            
            if (event.which == 38) {
                var selectedIndex = $select.get(0).selectedIndex;
                if (selectedIndex > 0) {
                    $select.get(0).selectedIndex = selectedIndex - 1;
                }
                change();
            } else if (event.which == 40) {
                var selectedIndex = $select.get(0).selectedIndex;
                if (selectedIndex < $select.children().length - 1) {
                    $select.get(0).selectedIndex = selectedIndex + 1;
                }
                change();
            }else if (event.which == 13 || event.which == 9) {

                var selectedIndex = $select.find("option[value='"+ $input.val() +"']").attr("index");
                $select.children().each(function (){
                     if($(this).text()==$input.val() || $(this).val()==$input.val()){
                         $(this).attr("selected","selected");
                     }else{
//                         $(this).attr("selected",false);
                         if($(this).val() != '' && $(this).val().indexOf("_") > 0 && $(this).val().substring(0,$(this).val().indexOf("_")) == $input.val()){
                             $(this).attr("selected","selected");
                         }else{
                             $(this).attr("selected",false);
                         }
                        
                     }
                 });
                $input.blur();
                change();
                $input.change();
                return false;
            }
            
        });

        $input.focus(function() {
            if(getExplorer() == 'IE 8.0'){
                $input.attr('class', 'editSelect' + cssID + '-IE8-focus');
                $input.next().attr('class', 'editSelect' + cssID + '-IE8-focus');
            }
            show($select);
            EditSelect.isShowSelect = true;
            $select.focus();
        });

        $input.blur(function() {
            if(getExplorer() == 'IE 8.0'){
                $input.attr('class', 'editSelect' + cssID + '-IE8');
                $input.next().attr('class', 'editSelect' + cssID + '-IE8');
            }
            if($input.val()==""){
                //$(" select option[value='"+tem+"']").attr("select","selected");  
                //$select.children("option[value='']").attr("select","selected");
                $baseSelect.val('');
            }

            if (EditSelect.isShowSelect == false) {
                hide($select);
            }

        });

        $select.change(function() {
            change();
        });
    }

    function input(value) {
        var text = '';
        for (var i = 0; i < valueSet.length; i++) {
            if (valueSet[i].indexOf(value) == 0) {
                text += '<option value="' + keySet[i] + '">' + valueSet[i] + '</option>';
            }
        }
        $select.html(text);
        setSize($select);
    }

    function change() {
        $baseSelect.val($select.val());
        $input.val($select.children(':selected').text());
        EditSelect.isShowSelect = false;
        $input.focus();
        hide($select);
    }
    
    function hide($_) {
        $_.css('display', 'none');
        if($input.val()==""){
            _refresh();
        }
    }

    function show($_) {
        $_.css('display', 'block');
    }

    function _refresh() {
        var text = '';
        keySet = new Array();
        valueSet = new Array();
        var index = 0;
        $baseSelect.children().each(function() {
            keySet[index] = $(this).val();
            valueSet[index] = $(this).text();
            text += '<option value="' + keySet[index] + '">' + valueSet[index] + '</option>';
            index++;
        });
        $input.val('');
        $select.html(text);
        // size
        setSize($select);
    }

    this.refresh = function() {
        _refresh();
    }
    
    function setSize($_){
        var selectSize = $_.find("option").length + 1;
        // size
        $_.attr("size",selectSize);
        if (EditSelect.maxSize > 0) {
            if (selectSize > EditSelect.maxSize) {
                $_.attr("size", EditSelect.maxSize);
            }
        } else if (EditSelect.minSize > 0) {
            if (selectSize < EditSelect.minSize) {
                $_.attr("size", EditSelect.minSize);
            }
            
        } 
        
//        $_.attr("size",EditSelect.fixSize);
    }
}



//设置下拉框位置
function setPosition(id){
        var $baseSelect = $('#' + id);
        var $input = $baseSelect.next();
        var $div = $input.next();
        
        // 动态设置div位置
        $div.css('top', $input.offset().top - 12 + 41 + 'px');
        $div.css('left', $input.offset().left + 1 + 'px');
    }
//分类级联
function selectRefresh(id) {
    var text = '';
    var keySet = new Array();
    var valueSet = new Array();
    var index = 0;
    var $baseSelect = $('#' + id);
    var $input = $baseSelect.next();
    var $div = $input.next();
    var $select;
    $input = $baseSelect.next();
    $div = $input.next();
    $select = $div.children();
    // 设置class
    $input.attr('class', 'editSelect' + '3');
    $select.attr('class', 'editSelect' + '3');
    $div.attr('class', 'editSelect' + '3');
    // 设置宽度
    $input.css('width', $baseSelect.css('width'));
//    $select.css('width', Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(35)+'px');
//    $div.css('width',Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(35)+'px');
    
    if(getExplorer() == 'IE 8.0'){
        $select.css('width', Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(33)+'px');
        $div.css('width',Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(33)+'px');
        // 动态设置div位置
        setPosition(id);
    }else{
        $select.css('width', Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(34)+'px');
        $div.css('width',Number($baseSelect.css('width').substring(0, $baseSelect.css('width').length - 2))+Number(34)+'px');
        
    }
    
    
    
    $baseSelect.children().each(function() {
        keySet[index] = $(this).val();
        valueSet[index] = $(this).text();
        if(valueSet[index] != 'undefined_'){
            text += '<option value="' + keySet[index] + '">' + valueSet[index] + '</option>';
        }
        index++;
    });
    
    $input.val('');
    $select.html(text);
    // size
    var selectSize = $select.find("option").length + 1;
    $select.attr("size",EditSelect.fixSize);
}

///判断点击对象是否是指定对象！不是就隐藏select
function closeSelect(){
    ///判断点击对象是否是指定对象！不是就隐藏select
    document.onclick = function (e){
        _closeSelect(e)
        
    };
}

function _closeSelect(e){
    //$div = $input.next();
    //$select = $div.children();
     e = e || window.event; 
     var dom =  e.srcElement|| e.target||e;
     //alert(e.css("display"));
    if(dom.name!='in'){
        var ss =document.getElementsByName("in");
        for(var i = 0;i<ss.length;i++) 
        {
            var input=$(ss[i]);
            var div=input.next();
            var select=div.children();
            
            if(select.css('display')!='none'){
            select.css('display', 'none');
            if(input.val()==""){
                
                refreshSelect(input.prev());
            }
            if(getExplorer() == 'IE 8.0'){
                input.attr('class',  input.attr('class').substring(0,input.attr('class').length-6));
                input.next().attr('class', input.attr('class').substring(0,input.attr('class').length-6));
            }
            }
        }
        
    }else{
        var input1 =$(dom);
        var div1=input1.next();
        var select1=div1.children();
        var ss =document.getElementsByName("in");
        for(var i = 0;i<ss.length;i++) 
        {
            var input2=$(ss[i]);
            var div2=input2.next();
            var select2=div2.children();
            //alert(select2.attr("class")+"---"+select1.attr("class"));
            //alert(select2.html());
            if(select2.attr("id")!=select1.attr("id")&&select2.css('display')!='none'){
            select2.css('display', 'none');

            if(input2.val()==""){
                
                refreshSelect(input2.prev());
            }
            if(getExplorer() == 'IE 8.0'){
                input2.attr('class',  input2.attr('class').substring(0,input2.attr('class').length-6));
                input2.next().attr('class', input2.attr('class').substring(0,input2.attr('class').length-6));
            }
            }
        }
    }
}

function refreshSelect($baseSelect){
    var text = '';
    keySet = new Array();
    valueSet = new Array();
    var index = 0;
    $baseSelect.children().each(function() {
        keySet[index] = $(this).val();
        valueSet[index] = $(this).text();
        text += '<option value="' + keySet[index] + '">' + valueSet[index] + '</option>';
        index++;
    });
    var $input = $baseSelect.next();
    var $div = $input.next();
    var $select = $div.children();
    $select.html(text);
}