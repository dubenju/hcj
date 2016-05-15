﻿/* message start */
var MSG001 = "删除操作不可恢复，点击确定进行删除。";
var MSG002 = "保存成功！";
var MSG003 = "此用户ID已经存在！";
var MSG004 = "保存失败！";
var MSG005 = "请重新确认填写信息或者联系管理员，谢谢！";
var MSG006 = "请重新填写用户ID，谢谢！";
var MSG007 = "请填写日期";
var MSG009 = "长度应为4~12位";
var MSG010 = "存在非法字符";
var MSG011 = "请输入确认密码";
var MSG012 = "两次输入的密码不同";
var MSG013 = "【月别】，【周别】，【日别】请至少填写一项。";
var MSG014 = "警告！";
var MSG015 = "错误！";
var MSG016 = "发生异常，请联系管理员，谢谢！";
var MSG017 = "请按照【99999999.99】格式输入。只可输入数字及【.】，最多可输入2位小数，8位整数。";
var MSG018 = "请按照【9999.99】格式输入。只可输入数字及【.】，最多可输入2位小数，4位整数。";
var MSG019 = "请按照【999.99】格式输入。只可输入数字及【.】，最多可输入2位小数，3位整数。";
var MSG020 = "请按照【99】格式输入。只可输入数字，最多可输入2位整数。";
var MSG021 = "请点击确定按钮导出单品大库库存";
var MSG022 = "页面上存在修改后未保存的数据，是否放弃保存跳转页面？";
var MSG023 = "提示！";
var MSG024 = "导出中，请等待！";
var MSG025 = "确认退出本系统？";
var MSG026 = "您的权限已修改，请重新登陆系统！";
var MSG027 = "查询中，请等待！";
var MSG028 = "保存中，请等待！";
var MSG029 = "日别周期只可查询42日内数据。";
var MSG030 = "请输入{0}";
var MSG031 = "请至少选择一个{0}。";
var MSG032 = "删除中，请等待！";
var MSG033 = "无任何标签组，请先设定标签组。";
var MSG034 = "图片加载中，请等待！";
var MSG052 = "该用户已在其他地方登录";
var MSG055 = "请按照【9999】格式输入。只可输入数字，最多可输入4位整数。";
var MSG056 = "结束时间不能早于开始时间。";
var MSG057="请输入开始日期";
var MSG058="请输入结束日期";
var MSG059="请检查输入的时间是否正确，格式为：（yyyy-mm-dd）";
var MSG060="不是正整数！";
var MSG061="无此商品！";
var MSG062="修改内容还未保存，点击确定将放弃修改。如需保存，请点击取消按钮返回画面进行保存。";
var MSG063="请先保存标签组！";
var MSG064="请选择标签组！";
var MSG065="请选择标签！";
var MSG066="请选择要删除的标签组！";
var MSG067="不能删除此标签组！";
var MSG068="请选择要删除的标签！";
var MSG069="不能删除此标签！";
var MSG070="请先保存标签！";
var MSG071="请选择分类！";
var MSG072="上传中请等待！";
var MSG073="下载中请等待！";
var cllbackFunction;
/* message end */

/*设置录入、修改、确认、详细画面内容div高度 滚动条自适应*/
function setNoSearchDivHeight(){
	var noSearchDiv = $("#noSearchDiv");
	//获得元素在屏幕中的竖坐标
	var Y = noSearchDiv.offset().top;
	
//	//设置消息div高度
//	var mesDiv = $("#message");
//	if(mesDiv.length > 0){
//		if(mesDiv.html() != null && mesDiv.html() != ""){
//			mesDiv.css("height","50");
//			mesDiv.attr("class","message");
//		}
//	}
//	
//	if($("#editSearchResult").length > 0){
//		editSearchResultTable('editSearchResultTable');
//	}
	
	//设置页面内容高度
	var divHeight = $(window).height() - 4 - Y + "px";
	if(Y > 84){
		divHeight = $(window).height() - 88 + "px";
	}
	
	noSearchDiv.css("height",divHeight);
}

//设置查询结果div高度
function setSearchResultHeight(flag){
	//offsetTop、offsetLest参考div
	var consultDiv = null;
	var divHeight = 0;
	var divWidth = 0;
	
	var parentFrm = window.parent.frames["mainframeSet"];
	if (parentFrm.cols == "210,29,*") {
		if(flag == "1"){
			menuWidth = 0;
		}else{
			menuWidth = 70;
		}
	} else {
		menuWidth = 60;
	}
	
	//获得元素在屏幕中的横竖坐标
	if($("#currentPage").length>0){
		consultDiv = $("#currentPage").parent().parent().parent().parent().parent();
	}else{
		consultDiv = $('#searchBtn');
	}
	var Y = consultDiv.offset().top;
	var X = $(".mrbox").offset().left;
	// ie div高度/宽度
		
	if(getExplorer() == 'IE 9.0'){
		if($('#currentPage').length > 0){
			if(menuWidth==0){
			divHeight = $(window).height() - Y-30;
			}else{
			divHeight = $(window).height() - Y-30;
			}
		}else{
			if(menuWidth==0){
				divHeight = $(window).height()- Y-65;
			}else{
				divHeight = $(window).height()- Y-65;
			}
		}
		if(menuWidth == 0){
			divWidth = $(window).width() - X+ menuWidth;
		}else{
			divWidth = $(window).width() - X;
		}
		
	}else if(getExplorer() == 'IE 8.0'){
		if($("#currentPage").length > 0){
			divHeight = $(window).height() - Y-30;
		}else{
			divHeight = $(window).height() - Y - 65;
		}
		if(menuWidth == 0){
			divWidth = $(window).width() - X  + menuWidth;
		}else{
			
			divWidth = $(window).width() - X;
			
		}
	}else if(getExplorer() == 'IE 11.0'){
		if($('#currentPage').length > 0){
			divHeight = $(window).height() - Y-40;
		}else{
			divHeight = $(window).height() - Y - 60;
		}
		
		if(menuWidth == 0){
			divWidth = $(window).width() - X + menuWidth;
		}else{
			divWidth = $(window).width() - X;
		}
	}else if(getExplorer() == 'IE 10.0'){
		if($('#currentPage').length > 0){
			divHeight = $(window).height() - Y-30;
		}else{
			divHeight = $(window).height() - Y - 65;
		}
		
		if(menuWidth == 0){
			divWidth = $(window).width() - X  + menuWidth;
		}else{
			divWidth = $(window).width() - X;
		}
		
	// 火狐 div高度/宽度
	}else if($.browser.mozilla){
		if($('#findpage').length > 0){
			divHeight = window.screen.availHeight - Y - 190;
		}else{
			divHeight = window.screen.availHeight - Y - 207;
		}
		divWidth = $(window).width() - X +120 - 4;

		//divWidth = window.screen.availWidth - X - 217;
		if(getExplorer() == 'firefox 26.0') {
			divWidth += 4;
		}
		
		// 无横向滚动条的table固定表头
		if($("#editScrollSearchResult").length == 0){
			fixHeader();
		}
	}else if(getExplorer().match(/chrome/) != null){
		if($('#currentPage').length > 0){
			divHeight = $(window).height() - Y-40;
		}else{
			divHeight = $(window).height() - Y - 60;
		}
		
		if(menuWidth == 0){
			divWidth = $(window).width() - X + menuWidth;
		}else{
			divWidth = $(window).width() - X;
		}
	}
	//设置查询结果div高度、宽度
	if($('#searchResult').length > 0){
		$('#searchResult').css("height",divHeight+"px");
		$('#searchResult').css("width",divWidth +"px");
		
	}
	
	// onload时，为table加载固定表头
	if(flag == 1){
		if($("#searchResultTable").length > 0){
			$("#searchResultTable").FixedHead({ tableLayout: "fixed" });
		}else if($("#searchResultDoubleTable").length > 0){
			$("#searchResultDoubleTable").FixedHead({ tableLayout: "fixed" });
		}
		
		
	}else if(flag == 2){
		//resize时，重新设置固定表头的宽度
		$("#fixDiv").css("width",$('#searchResult')[0].clientWidth);
	}
	
}

//火狐固定表头
function fixHeader(){

	if (getExplorer() == "IE 11.0" || getExplorer().indexOf("firefox") > -1) {
		var resultDiv = "";
		var resultTable = "";
		if ($('#searchResult').length > 0) {
			resultDiv = "searchResult";
			resultTable = "searchResultTable";
		} else if ($('#editSearchResult').length > 0) {
			resultDiv = "editSearchResult";
			resultTable = "editSearchResultTable";
		}
		if (resultDiv != "") {
			var srheight = $('#' + resultDiv).height();
			var srthead;

			$("#searchResult").scroll(function() {
				if ($(this).scrollTop() > 0) {
					if($("#thead").length == 0) {
						var thead = $('<div id="theadDiv" style="width: ' + $("#" + resultDiv).width() + 'px; overflow: hidden; position: absolute;">'
									+ '<table id="thead" cellpadding="0" cellspacing="0" style="position: relative;">'
									+ $("#" + resultTable).find("thead").html()
									+ '</table>'
									+ '</div>');

						thead.children().find("th").each(function() {
							var trIndex = $(this).parent().index();
							var tdIndex = $(this).index();
							var tdWidth = $("#" + resultTable + " tr:eq(" + trIndex + ") th:eq(" + tdIndex + ")").attr("width");
							$(this).attr("width", tdWidth);
						});

						$("#" + resultDiv).prepend(thead);
						$("#thead").css("width", $("#" + resultTable).width() + "px");

						$("#thead th[sort='true']").click(function() {
							thIndex = $(this).index();
							$("#" + resultTable + " th:eq(" + thIndex + ")").click();
						});
					}
					$("#thead").css("right", $(this).scrollLeft());
				} else {
					$("#theadDiv").remove();
				}
			});
		}
		return;
	}

    var browser_version=$.browser.version;
    if($('#searchResult').length > 0){
    	var srheight =$('#searchResult').height();
    	var srthead;
    	
	    $("#searchResult").scroll(function(e) {
	        if($(this).scrollTop()>0){
	            if($("#thead").length==0){
	                var thead=$('<table id="thead" cellpadding="0" cellspacing="0">'+$("#searchResultTable").find("thead").html()+'</table>');
	                
	                if($('#xzgl005scroll').length > 0){
	                	thead=$('<table id="thead" cellpadding="0" cellspacing="0" style="position:static;">'+$("#searchResultTable").find("thead").html()+'</table>');
	                }
	                thead.find("th").each(function(){
                		var trIndex = $(this).parent().index();
	                	var tdIndex = $(this).index();
//	                	var tdWidth = $("#searchResultTable tr:eq("+trIndex+") th:eq("+tdIndex+")").width();
	                	var tdWidth = $("#searchResultTable tr:eq("+trIndex+") th:eq("+tdIndex+")").attr("width");
	                	$(this).attr("width",tdWidth);
	                });



	                if($('#xzgl005scroll').length > 0){
		                var td1 =$('<div id="headDiv" style="overflow:hidden;"></div>');
		                thead.appendTo(td1);
		                $("#testdivj").prepend(td1);
		                
		                $("#headDiv").css("width",$("#searchResult").width()-17 + "px");
		                $("#thead").css("width",$("#searchResultTable").width() + "px");
		                if($.browser.mozilla){
		                	$("#searchResult").css("height",srheight -355 + "px");
		                }else {
		            		var ieVersion = getIEVersion();
		            		if(ieVersion == 10){
		            			$("#searchResult").css("height",srheight -420 + "px");
		            		}
		                }
		                
		                
		                srthead = $("#searchResultTable").find("thead").detach();
		                
		                $("#AsynchronousDataList").find("tr").eq(0).find("td").each(function(){
	                		
		                	var tdIndex = $(this).index();
		                	var tdWidth = $("#thead tr:eq(0) th:eq("+tdIndex+")").attr("width");
		                	
		                	$(this).attr("width",parseInt(tdWidth)-4+"px");
		                });
	                }else {
		                $("#searchResult").prepend(thead);
		                $("#thead").css("width",$("#searchResultTable").width() + "px");
	                }
	                
	                var thIndex = -1;
	                $("#thead th[sort='true']").click(function(){
	                	thIndex = $(this).index();
	                	$("#searchResultTable th:eq("+thIndex+")").click();
	                });
	                
	            }
	            
	        }else if('6.0'==browser_version||'7.0'==browser_version){
	                $("#thead").css("position","relative");
	                $("#thead").css("top",$(this).scrollTop());
	            
	        }else{
	            $("#thead").remove();
	            
                if($('#xzgl005scroll').length > 0){
                	if($.browser.mozilla){
                		$("#searchResult").css("height",srheight -320 + "px");
	                }else {
	            		var ieVersion = getIEVersion();
	            		if(ieVersion == 10){
	            			$("#searchResult").css("height",srheight -385 + "px");
	            		}
	                }
                	
                	$("#searchResultTable").prepend(srthead);
                }
	            
	        }
	        
	        if($('#xzgl005scroll').length > 0){
	        	if($('#searchResult').length > 0){
			        if($("#searchResult").scrollLeft()>0){
			        	var leftscr = $("#searchResult").scrollLeft();
			        	$("#headDiv").scrollLeft(leftscr);
			        }else {
			        	if($('#headDiv').length > 0){
			        		$("#headDiv").scrollLeft(0);
			        	}
			        }
	        	}
	        }

	    });

	    
    }else if($('#editSearchResult').length > 0){
    	$("#editSearchResult").scroll(function(e) {
	        if($(this).scrollTop()>0){
	            if($("#thead").length==0){
	                var thead=$('<table id="thead" cellpadding="0" cellspacing="0">'+$("#editSearchResultTable").find("thead").html()+'</table>');
	                thead.find("th").each(function(){
                		var trIndex = $(this).parent().index();
	                	var tdIndex = $(this).index();
//	                	var tdWidth = $("#editSearchResultTable tr:eq("+trIndex+") th:eq("+tdIndex+")").width();
	                	var tdWidth = $("#searchResultTable tr:eq("+trIndex+") th:eq("+tdIndex+")").attr("width");
	                	$(this).attr("width",tdWidth);
	                });
	                $("#editSearchResult").prepend(thead);
	                $("#thead").css("width",$("#editSearchResultTable").width() + "px");
	                $("#thead th[sort='true']").click(function(){
	                	var thIndex = $(this).index();
	                	$("#editSearchResultTable th:eq("+thIndex+")").click();
	                });
	            }else if('6.0'==browser_version||'7.0'==browser_version){
	                $("#thead").css("position","relative");
	                $("#thead").css("top",$(this).scrollTop());
	            }
	        }else{
//	            $("#theadDiv").remove();
	            $("#thead").remove();
	        }
	    });
    }
}

//查询画面全选
function checkAll(obj) {
//	if($('#allcheck').attr("checked")==true || $('#allcheck').attr("checked") == "checked"){
//		$("input[name='ids']").each(function(){
//			if(!$(this).attr("disabled")){
//				$(this).attr("checked",true);
//			}else{
//				$(this).attr("checked",false);
//			}
//		});
	if(obj.checked == true || obj.checked == "checked"){
		$("input[name='ids']").attr("checked",true); 
	}else{
		$("input[name='ids']").attr("checked",false); 
	}
}

//删除确认
function confirmDelete() {
	if (confirm("\u786e\u5b9a\u8981\u5220\u9664\u9009\u62e9\u7684\u8bb0\u5f55\uff1f")) {
		return true;
	} else {
		return false;
	}
}

//画面迁移返回查询页面后显示原排序图片
function showSortPic(){
    var sortColumn = $("#sortColumn").val();
    var sortType = $("#sortType").val();
    if(sortColumn != null && sortColumn != ""){
    	var sortTh = $("#searchResultTable").find("input[value='"+sortColumn+"']").parent();
	    sortTh.children(".asc,.desc").hide();
	    if(sortType == "asc"){
		    sortTh.children(".asc").show();
		    sortTh.attr("by","desc");
	    }else if(sortType == "desc"){
		    sortTh.children(".desc").show();
		    sortTh.attr("by","asc");
	    }
    }
}

//小数、整数check
function checkFloatOrInt(data,intCharCount,floatCharCount){
	if(data == null || data == ""){
		return false;
	}
	
	var reg = "^-?(";
	if(intCharCount < 1){
		reg += "[0-9]\\d*";
	}else if(intCharCount == 1){
		reg += "\\d{1}";
	}else{
		reg += "[0-9]\\d{0," + (intCharCount - 1) + "}";
	}
	
	reg += "(\\.";
	if(floatCharCount < 1){
		reg += "//d*";
	}else{
		reg += "\\d{0," + (floatCharCount) + "}";
	}
	
	reg += ")?)$";
	
	var re = new RegExp(reg);
	if(!re.exec(data)){
		return true;
	}else{
		return false;
	}
}

//货币格式化
function formatCurrency(num) {

    num = num.toString().replace(/\$|\,/g,'');
	// 如果未输入任何值，则直接返回空
	if(num == null || num == ""){
		return "&nbsp;";
	}

    if(isNaN(num)){
		num = "0";
	}

    sign = (num == (num = Math.abs(num)));

    num = Math.floor(num*100+0.50000000001);

    cents = num%100;

    num = Math.floor(num/100).toString();

    if(cents<10)

    cents = "0" + cents;

    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)

    num = num.substring(0,num.length-(4*i+3))+','+

    num.substring(num.length-(4*i+3));

    return (((sign)?'':'-') + num + '.' + cents);

}

//数量格式化
function formatCount(num) {

    num = num.toString().replace(/\$|\,/g,'');
	// 如果未输入任何值，则直接返回空
	if(num == null || num == ""){
		return "&nbsp;";
	}

    if(isNaN(num)){
		num = "0";
	}

    sign = (num == (num = Math.abs(num)));

    num = Math.floor(num*100+0.50000000001);


    num = Math.floor(num/100).toString();
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)

    num = num.substring(0,num.length-(4*i+3))+','+

    num.substring(num.length-(4*i+3));

    return (((sign)?'':'-') + num);

}

//查询结果双击可编辑table
//function editSearchResultTableAT(){
//	if($("#editSearchResultTable tr td[name='edit']").length > 0){
//		$("#editSearchResultTable tr td[name='edit']").css("color", "blue");
//		$("#editSearchResultTable tr td[name='edit']").dblclick(function(){
//			//取得焦点点击位置TD
//			var td = $(this);
//			var index = $(this).index();
//			var tr = $(this).parent();
//	
//			//取得隐藏域
//			var hiddenItem = td.children("input[type='hidden']");
//	
//		    //取得单元格内的值
//			var tdValue = hiddenItem.val();
//			tdValue = $.trim(tdValue);
//			
//			//取得标志位用来判断是否需要插入文本框
//			var flg = td.children("input[type='text']").length;
//			if(flg <= 0){
//				//在焦点点击位置添加文本框并设置文本框格式和文本框的值
//				td.html('<input type="text" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
//				//为文本框获取焦点
//				td.children("input").focus();
//				td.children("input").select();
//			}	
//			//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
//			td.children("input[type='text']").blur(function(){
//				if($("#xin_zi_deng_ji").length == 0){
//					var decimals = /^(\d+(\.\d{1,2})?)?$/;
//					// 输入内容校验
//					if(!decimals.exec($(this).val())){
//						alert("请按照【99999999.99】格式输入。只可输入数字及【.】，最多可输入2位小数，8位整数。");
//						$(this).focus();
//						$(this).select();
//					}else{
//						// 设置TD中的内容
//						td.html(formatCurrency($(this).val()));
//						td.append(hiddenItem);
//		
//						// 判断内容是否有所改变
//						if($(this).val() != tdValue){ // 内容改变
//							if($("#winterVacationHours").length > 0){
//								var diffVal = $(this).val() - tdValue;
//								var shengyu = tr.find("td").eq(index+1).text();
//								var shengyuVal = shengyu - diffVal;
//								var hiddenInput = tr.find("td").eq(index+1).find("input[type='hidden']");
//								hiddenInput.val(shengyuVal);
//								tr.find("td").eq(index+1).html(shengyuVal);
//								tr.find("td").eq(index+1).append(hiddenInput);
//							}
//							
//							hiddenItem.attr("value", $(this).val());
//							td.css("color","#FFA500");
//							td.css("font-weight","bold");
//							$("#editSaveButton").attr("disabled", false);
//							// 设置数据修改标记 ‘1’为数据已更改
//							td.parent("tr").children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//							// 设置本页数据修改标记 ‘1’为数据已更改
//							$("#editFlg").val('1');
//						}
//					}
//				}else{
//					var intNum = /^(\d{1,2})$/;
//					// 输入内容校验
//					if(!intNum.exec($(this).val())){
//						alert("只可输入数字，最多可输入2位整数。");
//						$(this).focus();
//						$(this).select();
//					}else if($(this).val() > 30){
//						alert("只可输入小于等于30的数");
//						$(this).focus();
//						$(this).select();
//					}else{
//						// 设置TD中的内容
//						td.html($(this).val());
//						td.append(hiddenItem);
//		
//						// 判断内容是否有所改变
//						if($(this).val() != tdValue){ // 内容改变
//							hiddenItem.attr("value", $(this).val());
//							td.css("color","#FFA500");
//							td.css("font-weight","bold");
//							$("#editSaveButton").attr("disabled", false);
//							// 设置数据修改标记 ‘1’为数据已更改
//							td.parent("tr").children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//							// 设置本页数据修改标记 ‘1’为数据已更改
//							$("#editFlg").val('1');
//						}
//					}
//				}	
//			});
//		});
//	}
//}
//
////查询结果双击可编辑table
//function editSearchResultTable(tableId){
//	if(tableId == null || tableId == ''){
//		tableId = "editSearchResultTable";
//	}
//	var findEidtStr = "#" + tableId + " tr td[name='edit']";
//	if($(findEidtStr).length > 0){
//		$(findEidtStr).css("color", "blue");
//		$(findEidtStr).dblclick(function(){
//			//取得焦点点击位置TD
//			var td = $(this);
//			var index = $(this).index();
//			var tr = $(this).parent();
//			//取得标志位用来判断是否需要插入文本框
//			var flg = td.children("input[type='text']").length;
//			if(flg <= 0){
//				// 取得值隐藏域
//				var hiddenItem = td.children("input[type='hidden']:eq(0)");
//				// 取得修改标记藏域
//				var hiddenIsEdit = td.children("input[type='hidden']:eq(1)");
//				// 取得工资项别名隐藏域
////				var hiddenItemOtherName = td.children("input[type='hidden']:eq(2)");
//				// 取得工资项方法ID隐藏域
////				var hiddenPayWageItemId = td.children("input[type='hidden']:eq(3)");
//				// 获得其余隐藏域
//				var hiddenOthers = td.children("input[type='hidden']:gt(1)");
//				// 是否需要单独check
//				var tdCheckFlag = td.children("input[name='tdCheckFlag']");
//
//			    //取得单元格内的值
//				var tdValue = hiddenItem.val();
//				tdValue = $.trim(tdValue);
//				//在焦点点击位置添加文本框并设置文本框格式和文本框的值
//				td.html('<input type="text" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
//				//为文本框获取焦点
//				td.children("input").focus();
//				td.children("input").select();
//				
//				//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
//				td.children("input[type='text']").blur(function(){
//					var inputVal = $.trim($(this).val());
//					//整理输入的值
//					inputVal = formatInputVal(inputVal);
//					
//					var checkTypeVal = $("#editCheckType").val();
//					
//					// 如果不存在td的特殊check要求，则进行通用check
//					if(tdCheckFlag == null || tdCheckFlag.val() == null){
//						//check
//						checkflg = checkDbEditDate($(this),checkTypeVal);
//					} else { // 如存在td的特殊check要求，则调用特殊check
//						var tdCheckFlagType = tdCheckFlag.attr('checkType');
//						checkflg = checkDbEditDate($(this),tdCheckFlagType);
//					}
//					
//					if(!checkflg){
//						// 设置TD中的内容
//						if(checkTypeVal == "2,0"){
//							td.html(inputVal);
//						}else{
//							td.html(formatCurrency(inputVal));
//						}
//						
//						td.append(hiddenItem);
//						td.append(hiddenIsEdit);
////						td.append(hiddenItemOtherName);
////						td.append(hiddenPayWageItemId);
//						td.append(hiddenOthers);
//						// 判断内容是否有所改变
//						if(inputVal != tdValue){ // 内容改变
//							if(tr.find("#winterVacationHours").length > 0){
//								if(td.attr("id") == "winterVacationHours"){
//									var nextTdHidden =  td.next("td").find("input[type='hidden']");
//									var syHours = nextTdHidden.val() - (inputVal - tdValue);
//									if(checkTypeVal == "2,0"){
//										td.next("td").html(syHours);
//									}else{
//										td.next("td").html(formatCurrency(syHours));
//									}
//									
//									nextTdHidden.val(syHours);
//									td.next("td").append(nextTdHidden);
//								}
//							}
//							hiddenItem.attr("value", inputVal);
//							// 判断修改标志是否和其他项目合并为同一个隐藏域
//							if(hiddenIsEdit.length){
//								if(hiddenIsEdit.val().indexOf(",") != -1){
//									var hiddenIsEditVal = hiddenIsEdit.val();
//									hiddenIsEditVal = '1' + hiddenIsEditVal.substring(1, hiddenIsEditVal.length);
//									hiddenIsEdit.val(hiddenIsEditVal);
//								} else {
//									hiddenIsEdit.val('1');
//								}
//							}
//							td.css("color","#FFA500");
//							td.css("font-weight","bold");
//							$("#editSaveButton").attr("disabled", false);
//							var targetTr = null;
//							// 判断是否含有冻结窗格
//							if($("#columnDiv").length){
//								var index = td.parent("tr").index();
//								targetTr = $("#columnTable tr").eq(index);
//							} else {
//								targetTr = td.parent("tr");
//							}
//							if(targetTr.children("td").eq(0).children("input[type='checkbox']").length <= 0){
//								// 设置数据修改标记 ‘1’为数据已更改
//								targetTr.children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//							} else {
//								targetTr.children("td").eq(1).children("input[type='hidden']").eq(0).val('1');
//							}
//							// 设置本页数据修改标记 ‘1’为数据已更改
//							$("#editFlg").val('1');
//						}
//					}
//				});
//			}
//		});
//	}
//}

//自定义startWith函数
String.prototype.startWith=function(s){
	if(s==null||s==""||this.length==0||s.length>this.length)
		return false;
	if(this.substr(0,s.length)==s)
		return true;
	else
		return false;
	return true;
}

//整理输入框输入的值   
//0000009.36或.9或00009的值整理为正常格式9.36 0.9 9
function formatInputVal(inputVal){
	if(inputVal != '0'){
		if(inputVal.startWith('0')){
			inputVal = inputVal.substr(1);
			inputVal = formatInputVal(inputVal);
		}else if(inputVal.startWith('.')){
			inputVal = "0" + inputVal;
		}
	}
	return inputVal;
}


//双击可编辑数据check
function checkDbEditDate(inputText,checkTypeVal){
	var checkflg = false;
	var inputVal = inputText.val();
	if(checkTypeVal == "10,2"){
		var decimals = /^(-)?(\d{1,8}(\.\d{1,2})?)$/;
		if(!decimals.exec(inputVal)){
			alert(MSG017);
			inputText.focus();
			inputText.select();
			checkflg = true;
		}
	}else if(checkTypeVal == "6,2"){
		var decimals = /^(-)?(\d{1,4}(\.\d{1,2})?)$/;
		if(!decimals.exec(inputVal)){
			alert(MSG018);
			inputText.focus();
			inputText.select();
			checkflg = true;
		}
	}else if(checkTypeVal == "5,2"){
		var decimals = /^(-)?(\d{1,3}(\.\d{1,2})?)$/;
		if(!decimals.exec(inputVal)){
			alert(MSG019);
			inputText.focus();
			inputText.select();
			checkflg = true;
		}
	}else if(checkTypeVal == "2,0"){
		var decimals = /^(-)?\d{1,2}$/;
		if(!decimals.exec(inputVal)){
			alert(MSG020);
			$(this).focus();
			$(this).select();
			checkflg = true;
		}
	}else if(checkTypeVal == "INT"){
		if(checkFloatOrInt(inputVal, 4, 0)){
			alert(MSG055);
			inputText.focus();
			inputText.select();
			checkflg = true;
		}
	}
	
	return checkflg;
}

//查询结果双击可编辑td
//function editSearchResultTdAT(obj){
//	//取得焦点点击位置TD
//	var td = $(obj);
//
//	//取得隐藏域
//	var hiddenItem = td.children("input[type='hidden']");
//
//    //取得单元格内的值
//	var tdValue = hiddenItem.val();
//	tdValue = $.trim(tdValue);
//	
//	//取得标志位用来判断是否需要插入文本框
//	var flg = td.children("input[type='text']").length;
//	if(flg <= 0){
//		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
//		td.html('<input type="text" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
//		//为文本框获取焦点
//		td.children("input").focus();
//		td.children("input").select();
//	}	
//	//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
//	td.children("input[type='text']").blur(function(){
//		var decimals = /^(\d+(\.\d{1,2})?)?$/;
//
//		// 输入内容校验
//		if(!decimals.exec($(this).val())){
//			alert("请按照【99999999.99】格式输入。只可输入数字及【.】，最多可输入2位小数，8位整数。");
//			$(this).focus();
//			$(this).select();
//		}else{
//			// 设置TD中的内容
//			td.html(formatCurrency($(this).val()));
//			td.append(hiddenItem);
//
//			// 判断内容是否有所改变
//			if($(this).val() != tdValue){ // 内容改变
//				hiddenItem.attr("value", $(this).val());
//				td.css("color","#FFA500");
//				td.css("font-weight","bold");
//				$("#editSaveButton").attr("disabled", false);
//				// 设置数据修改标记 ‘1’为数据已更改
//				td.parent("tr").children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//				// 设置本页数据修改标记 ‘1’为数据已更改
//				$("#editFlg").val('1');
//			}
//		}
//	});
//}
//
////查询结果双击可编辑td
//function editSearchResultTd(obj){
//	var td = $(obj);
//	//取得标志位用来判断是否需要插入文本框
//	var flg = td.children("input[type='text']").length;
//	if(flg <= 0){
//		//取得焦点点击位置TD
//		
//		//取得隐藏域
//		var hiddenItem = td.children("input[type='hidden']:eq(0)");
//		// 取得修改标记藏域
//		var hiddenIsEdit = td.children("input[type='hidden']:eq(1)");
//		// 取得工资项别名隐藏域
////		var hiddenItemOtherName = td.children("input[type='hidden']:eq(2)");
//		// 取得工资项方法ID隐藏域
////		var hiddenPayWageItemId = td.children("input[type='hidden']:eq(3)");
//		// 获得其余隐藏域
//		var hiddenOthers = td.children("input[type='hidden']:gt(1)");
//		// 是否需要单独check
//		var tdCheckFlag = td.children("input[name='tdCheckFlag']");
//		
//		//取得单元格内的值
//		var tdValue = hiddenItem.val();
//		tdValue = $.trim(tdValue);
//		
//		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
//		td.html('<input type="text" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
//		//为文本框获取焦点
//		td.children("input").focus();
//		td.children("input").select();
//	
//		//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
//		td.children("input[type='text']").blur(function(){
//			var inputVal = $.trim($(this).val());
//			//整理输入的值
//			inputVal = formatInputVal(inputVal);
//			
//			var checkTypeVal = $("#editCheckType").val();
//			
//			var checkflg = false;
//			
//			// 如果不存在td的特殊check要求，则进行通用check
//			if(tdCheckFlag == null || tdCheckFlag.val() == null){
//				//check
//				checkflg = checkDbEditDate($(this),checkTypeVal);
//			} else { // 如存在td的特殊check要求，则调用特殊check
//				var tdCheckFlagType = tdCheckFlag.attr('checkType');
//				checkflg = checkDbEditDate($(this),tdCheckFlagType);
//			}
//			if(!checkflg){
//				// 设置TD中的内容
//				if(checkTypeVal == "2,0"){
//					td.html(inputVal);
//				}else{
//					td.html(formatCurrency(inputVal));
//				}
//				td.append(hiddenItem);
//				td.append(hiddenIsEdit);
////				td.append(hiddenItemOtherName);
////				td.append(hiddenPayWageItemId);
//				td.append(hiddenOthers);
//	
//				// 判断内容是否有所改变
//				if(inputVal != tdValue){ // 内容改变
//					if(td.attr("id") == "winterVacationHours"){
//						var nextTdHidden =  td.next("td").find("input[type='hidden']");
//						var syHours = nextTdHidden.val() - (inputVal - tdValue);
//						if(checkTypeVal == "2,0"){
//							td.next("td").html(syHours);
//						}else{
//							td.next("td").html(formatCurrency(syHours));
//						}
//						
//						nextTdHidden.val(syHours);
//						td.next("td").append(nextTdHidden);
//					}
//					hiddenItem.attr("value", inputVal);
//					// 判断修改标志是否和其他项目合并为同一个隐藏域
//					if(hiddenIsEdit.length){
//						if(hiddenIsEdit.val().indexOf(",") != -1){
//							var hiddenIsEditVal = hiddenIsEdit.val();
//							hiddenIsEditVal = '1' + hiddenIsEditVal.substring(1, hiddenIsEditVal.length);
//							hiddenIsEdit.val(hiddenIsEditVal);
//						} else {
//							hiddenIsEdit.val('1');
//						}
//					}
//					td.css("color","#FFA500");
//					td.css("font-weight","bold");
//					$("#editSaveButton").attr("disabled", false);
//					var targetTr = null;
//					// 判断是否含有冻结窗格
//					if($("#columnDiv").length){
//						var index = td.parent("tr").index();
//						targetTr = $("#columnTable tr").eq(index);
//					} else {
//						targetTr = td.parent("tr");
//					}
//					if(targetTr.children("td").eq(0).children("input[type='checkbox']").length <= 0){
//						// 设置数据修改标记 ‘1’为数据已更改
//						targetTr.children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//					} else {
//						targetTr.children("td").eq(1).children("input[type='hidden']").eq(0).val('1');
//					}
//					// 设置本页数据修改标记 ‘1’为数据已更改
//					$("#editFlg").val('1');
//				}
//			}
//		});
//	}
//}
//
////查询结果双击可编辑tds
//function editSearchResultTds(obj){
//	//取得焦点点击位置TD
//	var td = $(obj);
//
//	//取得隐藏域
//	var hiddenItem = td.children("input[type='hidden']");
//
//    //取得单元格内的值
//	var tdValue = hiddenItem.val();
//	tdValue = $.trim(tdValue);
//	
//	//取得标志位用来判断是否需要插入文本框
//	var flg = td.children("input[type='text']").length;
//	if(flg <= 0){
//		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
//		td.html('<input type="text" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
//		//为文本框获取焦点
//		td.children("input").focus();
//		td.children("input").select();
//	}	
//	//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
//	td.children("input[type='text']").blur(function(){
//		var decimals = /^([0-9a-zA-Z]{1,12})?$/;
//
//		// 输入内容校验
//		if(!decimals.exec($(this).val())){
//			alert("只能输入汉字或字母，字母大小写不敏感，最多只能输入12位字符。");
//			$(this).focus();
//			$(this).select();
//		}else{
//			// 设置TD中的内容
//			td.html($(this).val());
//			td.append(hiddenItem);
//
//			// 判断内容是否有所改变
//			if($(this).val() != tdValue){ // 内容改变
//				hiddenItem.attr("value", $(this).val());
//				td.css("color","#FFA500");
//				td.css("font-weight","bold");
//				$("#editSaveButton").attr("disabled", false);
//				// 设置数据修改标记 ‘1’为数据已更改
//				td.parent("tr").children("td").eq(0).children("input[type='hidden']").eq(0).val('1');
//				// 设置本页数据修改标记 ‘1’为数据已更改
//				$("#editFlg").val('1');
//			}
//		}
//	});
//}


//锁定表头和列
function FixTable(TableID, FixColumnNumber, width, height){
    //TableID            要锁定的Table的ID
	//FixColumnNumber    要锁定列的个数
	//width              显示的宽度
	//height             显示的高度
	$("#" + TableID).after("<div id='" + TableID + "_tableLayout' style='overflow:hidden;height:" + height + "px; width:" + width + "px;'></div>");
	$('<div id="' + TableID + '_tableFix"></div>'
		+ '<div id="' + TableID + '_tableHead"></div>'
		+ '<div id="' + TableID + '_tableColumn"></div>'
		+ '<div id="' + TableID + '_tableData"></div>').appendTo("#" + TableID + "_tableLayout");
	$("#" + TableID).appendTo($("#"+ TableID + "_tableLayout"));
	var tableFixClone = $("#" + TableID).clone(true);
	tableFixClone.attr("id", TableID + "_tableFixTB");
	tableFixClone.html("");
	var tableColumn = tableFixClone.clone(true);
	var tableFixWidth = 0;
	var tableFixHeight = 0;
	tableFixClone.append($("#" + TableID + " thead").clone(true));
	for(var i = 0; i < FixColumnNumber; i++){
		tableFixWidth += $("#" + TableID).find("tbody tr:eq(0) td:eq(" + i + ")").width();
	}
	tableFixHeight = $("#" + TableID).find("thead").height();
	$("#" + TableID + '_tableFix').append(tableFixClone);
	$("#" + TableID + '_tableFix').css("height", tableFixHeight + 1);
	$("#" + TableID + '_tableFix').css("width", tableFixWidth + 3);
	$("#" + TableID + "_tableFix").css({ "overflow": "hidden", "position": "relative", "z-index": "50", "background-color": "#EDEDED" });
	$("#" + TableID + "_tableFix").offset($("#" + TableID + "_tableLayout").offset());
	
	var tableHeadClone = tableFixClone.clone(true);
	tableFixClone.attr("id", TableID + "_tableHeadTB");
	$("#" + TableID + '_tableHead').append(tableHeadClone);
	$("#" + TableID + '_tableHead').css("height", tableFixHeight + 1);
	$("#" + TableID + "_tableHead").css({ "overflow": "hidden", "width": width - 17, "position": "relative", "z-index": "45", "background-color": "#EDEDED" });
	
	$("#" + TableID + "_tableHead").offset($("#" + TableID + "_tableLayout").offset());
	var trs = $("#" + TableID).find("tbody tr");
	$("#" + TableID + "_tableColumn").append(tableColumn);
	$("#" + TableID + "_tableColumn table").attr("id", TableID + "_tableColumnTB");
	$("#" + TableID + "_tableColumnTB").css("width", tableFixWidth + 2);
	$.each(trs, function(){
		$("#" + TableID + "_tableColumnTB").append($("<tr></tr>"));
		if($(this).height() < 25){
			$("#" + TableID + "_tableColumnTB").find("tr:last").css("height", 25);
		}else{
			$("#" + TableID + "_tableColumnTB").find("tr:last").css("height", $(this).height());
		}
		var tdColumn = 0;
		for(var i = 0; i < FixColumnNumber; i++){
			tdColumn = $(this).find("td:eq(" + i + ")").clone(true);
			tdColumn.css("width", $(this).find("td:eq(" + i + ")").width());
			tdColumn.css("background-color", "#EDEDED");
			$("#" + TableID + "_tableColumnTB").find("tr:last").append(tdColumn);
		}
	});
	$("#" + TableID + "_tableColumn").css({ "overflow": "hidden", "height": height - 17,"position": "relative","z-index": "40","padding-top": tableFixHeight});
	$("#" + TableID + "_tableColumn").css("width", tableFixWidth + 2);
	$("#" + TableID + "_tableColumn").offset($("#" + TableID + "_tableLayout").offset());
	$("#" + TableID).find("tr").each(function(){
		if($(this).height() < 25){
			$(this).css("height", 24);
		}
	});
	$("#" + TableID).appendTo( $("#" + TableID + "_tableData"));
    $("#" + TableID + "_tableData").css({ "overflow": "scroll", "width": width, "height": height,"position": "relative", "z-index": "35","border":"1px solid #CCC"});
	$("#" + TableID + "_tableData").offset($("#" + TableID + "_tableLayout").offset());
	
	$("#" + TableID + "_tableData").scroll(function () {
		$("#" + TableID + "_tableHead").scrollLeft($("#" + TableID + "_tableData").scrollLeft());
		$("#" + TableID + "_tableColumn").scrollTop($("#" + TableID + "_tableData").scrollTop());
	});
}

//添加固定列方法
function addColumn(tableId){
	if(columnNumber == 0){
		columnNumber = $("#" + tableId + "_tableColumn tbody tr:last td").length;
	}
	var tdClone;
	$("#" + tableId + "_tableColumn tbody").append($('<tr></tr>'));
	$("#" + tableId + "_tableColumn tbody tr:last").css("height", $("#" + tableId + " tbody tr:last").height());
	for(var i = 0; i < columnNumber; i++){
		tdClone = $("#" + tableId + " tbody tr:last td:eq(" + i + ")").clone(true);
		if(tdClone.find("select").length > 0){
			tdClone.find("select").change(function(){
				getSelectedVal(this,tableId);
			});
		}
		tdClone.css("width", $("#" + tableId + " tbody tr:last td:eq(" + i + ")").width());
		tdClone.css("background-color", "#EDEDED");
		$("#" + tableId + "_tableColumn tbody tr:last").append(tdClone);
	}
}

//关联选择
function getSelectedVal(obj,tableId){
	var selectVal = $(obj).val();
	var selectText = $(obj).find("option:selected").text();
	var trIndex = $(obj).parent().parent().index();
	var dataTableSelect = $("#" + tableId).find("tr").eq(trIndex+1).find("select");
	if(dataTableSelect.length > 0){
		dataTableSelect.val(selectVal);
		if(dataTableSelect.parent().find("input[type='hidden']").length > 0){
			dataTableSelect.parent().find("input[type='hidden']").val(selectText);
		}else{
			if(tableId=="scrollTable1") {
				dataTableSelect.parent().append($('<input type="hidden" name="monthPersonList['+trIndex+'].nowName" value="'+selectText+'" />'));
			} else if(tableId=="scrollTable") {
				dataTableSelect.parent().append($('<input type="hidden" name="monthDutyList['+trIndex+'].dutyTypeName" value="'+selectText+'" />'));
			}
			
		}
	}
}

//获取下拉框text值
function getSelectedText(obj){
	var selectText = $(obj).find("option:selected").text();
	if($(obj).parent().find("input[type='hidden']").length > 0){
		$(obj).parent().find("input[type='hidden']").val(selectText);
	}
}

//多层checkbox选中
function setCheckboxed(obj,tableId){
	var trIndex = $(obj).parent().parent().index();
	var dataCheckbox = $("#"+tableId + " tbody").find("tr").eq(trIndex).find("input[type='checkbox']");
	if($(obj).attr("checked") == true || $(obj).attr("checked") == "checked"){
		dataCheckbox.attr("checked",true);
	}else{
		dataCheckbox.attr("checked",false);
	}
}

//删除行
function deleteRows(tableId,chkName){
	var chk = "#" + tableId + " input[name='"+chkName+"']:checked";
	var num = chkName.substring(3);
	var ids = "";
	$(chk).each(function(){
		if($(this).val() != null && $(this).val() != "" && $(this).val() != "on"){
			ids += $(this).val() + ",";
		}
		var rowIndex = $(this).parent().parent().index();
		$("#" + tableId + " tbody tr").eq(rowIndex).find("input[type='hidden']").val("");
		$("#" + tableId + " tbody tr").eq(rowIndex).remove();
	});
	ids = ids.substring(0, ids.length - 1);
	$("#ids"+num).val(ids);
}

//退出
function loginOut(flg){
//	var returnVal = window.confirm(MSG025);
//	if(returnVal){
		myAjax(flg);
//	}
}

//ajax方法
function myAjax(flg){
	$.ajax({
		type:"POST",
		url : "login/Login!loginOut.action",
		success : function(data) {
			if(flg == 2){
				top.location="logingr.jsp";
			}else {
				top.location="login.jsp";
			}
			
		}	
	});
}

function reLoginOut(flg){
	if(flg == '1'){
		alert(MSG052);
	}
	myAjax();
}

// 判断页面是否有修改未保存的数据
function isEditCheck(){
	if($("#editFlg").val() == '1'){
		if(confirm(MSG022)){
			return true;
		}
		return false;
	}
	return true;
}
//弹出确认框 msg1:提示信息(h2),msg2:提示信息(p) flg:1 菜单调用,2 主画面调用
function confirms(msg1, msg2, flg){
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols");
	var str=new Array();
	str=s.split(",");
	var obj;
	var div;
	
	for(var i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				 obj=this.contentWindow;
				if(j==i){
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	var height =div.parent().height();	
	var width = div.parent().width();
	var maskLayer = "";	
	if($.browser.mozilla){	
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>' + 
		          "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b1.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div>";
	}else if(getExplorer()=="IE 10.0"){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b1.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div>";
	}
	else if($.browser.msie){
		maskLayer='<div style="z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;filter:alpha(opacity=50);">'+ 
        "<div id='affirm'><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b1.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div></div>";	
	}
	div.html(maskLayer);
}
//弹出确认框 msg1:提示信息(h2),msg2:提示信息(p) flg:1 菜单调用,2 主画面调用
function errorConfirms(msg1, msg2, flg){
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols");
	var str=new Array();
	str=s.split(",");
	var obj;
	var div;
	
	for(var i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				 obj=this.contentWindow;
				if(j==i){
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	var height =div.parent().height();	
	var width = div.parent().width();
	var maskLayer = "";	
	if($.browser.mozilla){	
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>' + 
		          "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1' style='background:#e06504'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div>";
	}else if(getExplorer()=="IE 10.0"){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1' style='background:#e06504'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div>";
	}
	else if($.browser.msie){
		maskLayer='<div style="z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;filter:alpha(opacity=50);">'+ 
        "<div id='affirm'><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmOpen("+flg+")' class='tt_btn1' style='background:#e06504'>确 定</a><a href='#' class='tt_btn2' onClick='affirmClose()'>取 消</a></div></div></div></form></div></div>";	
	}
	div.html(maskLayer);
}
//弹出正常操作提示框 msg1:提示信息(h2),msg2:提示信息(p)
function alertForm(msg1,msg2,cllback){
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols");
	var str=new Array();
	str=s.split(",");
	var obj;
	var div;
	for(var i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				 obj=this.contentWindow;
				if(j==i){
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	var height =div.parent().height();	
	var width = div.parent().width();
	var maskLayer = "";	
	if($.browser.mozilla){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>' + 
		          "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b2.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn3'>确 定</a></div></div></div></form></div>";
	}else if(getExplorer()=="IE 10.0"){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b2.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn3'>确 定</a></div></div></div></form></div>";
	}
	else if($.browser.msie){
		maskLayer='<div style="z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;filter:alpha(opacity=50);">'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b2.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn3'>确 定</a></div></div></div></form></div>";	
	}
	div.html(maskLayer);
	cllbackFunction=cllback;
}

//弹出错误提示框 msg1:提示信息(h2),msg2:提示信息(p)
function errorForm(msg1,msg2){
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols");
	var str=new Array();
	str=s.split(",");
	var obj;
	var div;
	for(var i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				 obj=this.contentWindow;
				if(j==i){
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	var height =div.parent().height();	
	var width = div.parent().width();
	var maskLayer = "";	
	if($.browser.mozilla){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>' + 
		          "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn6'>确 定</a></div></div></div></form></div>";
	}else if(getExplorer()=="IE 10.0"){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn6'>确 定</a></div></div></div></form></div>";
	}
	else if($.browser.msie){
		maskLayer='<div style="z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;filter:alpha(opacity=50);">'+ 
        "<div id='affirm' ><form id='Form' name='Form' action='#' method='post' enctype='multipart/form-data'><div class='ttbox_main'><div class='ttbox'><div class='ttboxt'><img onClick='affirmClose()' src='images/tanchuang/clo.png' style='cursor:hand'></div><div class='ttboxm'><img src='images/tanchuang/b3.png'  class='img'><h2>"+msg1+"</h2><p>"+msg2+"</p></div><div class='ttboxf'><a href='#' onClick='affirmClose()' class='tt_btn6'>确 定</a></div></div></div></form></div>";	
	}
	div.html(maskLayer);
}
//关闭按钮操作
function affirmClose(){
	$("#affirm").css("display","none");
	closeMaskLayer();
}
//确定按钮操作 flg:1 菜单调用,2 主画面调用
function affirmOpen(flg){
	affirmClose();
	if(flg == 1){
		var leftFrame=$(window.top.document).find("#mainframeSet");
		var obj;
		leftFrame.children().each(function(){
			obj=this.contentWindow;
				return false;
		});
	}else{
		var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
		var s=$frameSet.attr("cols");
		var str=new Array();
		str=s.split(",");
		var obj;
		for(var i=0;i<str.length;i++){
			if(str[i]=="*"){
				var j=0;
				$frameSet.children().each(function(){
					if(j==i){
						obj=this.contentWindow;
						return false;
					}
					j++;
				});
			}
			
		}
	}
	obj.window.fr_mat();
}
var str=$();
function maskLayer(msg) {
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols");
	var str=new Array();
	str=s.split(",");
	var div;
	for(var i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				var obj=this.contentWindow;
				if(j==i){
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	var height =div.parent().height();	
	var width = div.parent().width();
	var lineHeight = height - 80;

	var maskLayer = "";	
	if($.browser.mozilla){
		
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>' + 
		          '<div style="color:red;text-align:center;line-height:'+lineHeight+'px;background:url(./images/wait.gif) no-repeat center; background-color:transparent; width:'+width+'px;height:'+height+'px;"><h2>'+msg+'</h2></div>';
	}else if(getExplorer()=="IE 10.0"){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        '<div style="color:red;text-align:center;line-height:'+lineHeight+'px;background:url(./images/wait.gif) no-repeat center; background-color:transparent; width:'+width+'px;height:'+height+'px;"><h2>'+msg+'</h2></div>';
	}
	else if($.browser.msie){
		
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;filter:alpha(opacity=50);"></div>'+ 
        '<div style="color:red;text-align:center;line-height:'+lineHeight+'px;background:url(./images/wait.gif) no-repeat center; background-color:transparent; width:'+width+'px;height:'+height+'px;"><h2>'+msg+'</h2></div>';	
	}
	else if(getExplorer().match(/chrome/)!=null){
		maskLayer='<div style="position:absolute;z-index:-1; background:#666666; width:'+width+'px;height:'+height+'px;opacity:0.5;"></div>'+ 
        '<div style="color:red;text-align:center;line-height:'+lineHeight+'px;background:url(./images/wait.gif) no-repeat center; background-color:transparent; width:'+width+'px;height:'+height+'px;"><h2>'+msg+'</h2></div>';
	}
	div.html(maskLayer);
}

//关闭遮罩层
function closeMaskLayer(){
	var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
	var s=$frameSet.attr("cols")
	var str=new Array();
	str=s.split(",");
	var div;
	for(i=0;i<str.length;i++){
		if(str[i]=="*"){
			var j=0;
			$frameSet.children().each(function(){
				if(j==i){
					var obj=this.contentWindow;
					div=$(obj.document.getElementById("maskLayer"));
					return false;
				}
				j++;
			});
		}
	}
	div.html("");
	div.parent().css("background","");
	if(cllbackFunction){
		cllbackFunction();
	}
}

//权限修改提示消息
function reLogin(){
	alert(MSG026);
}

//格式化6位日期 返回yyyy-MM
function formatShortDate(date){
	date=date.toString();
	// 如果未输入任何值，则直接返回空
	if(date == null || date == ""){
		return "&nbsp;";
	}

    if(isNaN(date)){
		num = "0";
	}
	if(date.length!=6){
		return "&nbsp;";
	}
	else{
		return	date.substring(0,4)+'-'+date.substring(4,7);
	}
}

//格式化8位日期 返回yyyy-MM-dd
function formatDate(date){
	date = date.toString();
	if(date == null || date == ""){
		return "&nbsp;";
	}
	if(isNaN(date)){
		num = "0";
	}
	if(date.length!=8){
		return "&nbsp;";
	}else{
		return	date.substring(0,4)+'-'+date.substring(4,6)+'-'+date.substring(6,8);
	}
}

//获取所随机数函数
function getRadomNum(){
	//上限
	var x = 10000;
	//下限
	var y = 1;
	var rand = parseInt(Math.random() * (x - y + 1) + y); 
	return rand;
}

//禁用鼠标右键
//$(document).bind("contextmenu",function(){return false;});
//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
function banBackSpace(ev){
    var obj = ev.target || ev.srcElement;//获取事件源
    var t = obj.type || obj.getAttribute('type');//获取事件源类型
    //获取作为判断条件的事件类型
    var vReadOnly = obj.readOnly;
    var vDisabled = obj.disabled;
    //处理undefined值情况
    vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
    vDisabled = (vDisabled == undefined) ? true : vDisabled;
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
    //并且readOnly属性为true或disabled属性为true的，则退格键失效
    var flag1= ev.keyCode == 8 && (t=="password" || t=="text" || t=="textarea")&& (vReadOnly==true || vDisabled==true);
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
    var flag2= ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea" ;
    //判断
    if(flag2 || flag1){
    	return false;
    }
}

//禁用Alt+标的目标键←、Alt+标的目标键→、F5刷新、Ctrl+R、F11、Ctrl+N、Shift+F10
function banOtherKey(ev){
	if($.browser.msie) {
		if((ev.altKey)&&
			((ev.keyCode==37)||//Alt+标的目标键←
			(ev.keyCode==39))){//Alt+标的目标键→
			ev.returnValue=false;
		}
		if((ev.keyCode==116)||//F5刷新键	
			(ev.ctrlKey && event.keyCode==82)){//Ctrl+R
			ev.keyCode=0;
			ev.returnValue=false;
		}
		if(ev.keyCode==122){//F11
			ev.keyCode=0;
			ev.returnValue=false;
		}
		if(ev.ctrlKey && ev.keyCode==78){//Ctrl+N
			ev.returnValue=false;
		}
		if(ev.shiftKey && ev.keyCode==121){//shift+F10
			ev.returnValue=false;
		}
	}else{
		if((ev.altKey)&&
			((ev.which==37)||//Alt+标的目标键←
			(ev.which==39))){//Alt+标的目标键→
			ev.preventDefault();
		}
		if((ev.which==116)||//F5刷新键	
			(ev.ctrlKey && ev.which==82)){//Ctrl+R
			ev.which=0;
			ev.preventDefault();
		}
		if(ev.which==122){//F11
			ev.which=0;
			ev.preventDefault();
		}
		if(ev.ctrlKey && ev.which==78){//Ctrl+N
			ev.preventDefault();
		}
		if(ev.shiftKey && ev.which==121){//shift+F10
			ev.preventDefault();
		}
		if ((ev.altKey)&&(ev.keyCode==115)){//Alt+F4退出
			myAjax();
	    }
	}
}

function forbiddenKey(e){
	 var ev = e || window.event;//获取event对象
	 var backSpace = banBackSpace(ev);
	 banOtherKey(ev);
	 if(backSpace == undefined){
		 return true;
	 }else{
		 return false;
	 }
}
//禁止退格键 作用于Firefox、Opera
//document.onkeypress=forbiddenKey;
//禁止退格键 作用于IE、Chrome
document.onkeydown=forbiddenKey;

function onMouseOverf(obj,tableId){
	var trIndex = $(obj).index();
	if(tableId == 'dataTable'){
		$(obj).css("backgroundColor","#DEF");
		$("#columnTable tr:eq("+trIndex+")").css("backgroundColor","#DEF");
	}else if(tableId == 'columnTable'){
		$(obj).css("backgroundColor","#DEF");
		$("#dataTable tr:eq("+trIndex+")").css("backgroundColor","#DEF");
	}
}

function onMouseOutf(obj,tableId){
	var trIndex = $(obj).index();
	if(tableId == 'dataTable'){
		$(obj).css("backgroundColor","white");
		$("#columnTable tr:eq("+trIndex+")").css("backgroundColor","white");
	}else if(tableId == 'columnTable'){
		$(obj).css("backgroundColor","white");
		$("#dataTable tr:eq("+trIndex+")").css("backgroundColor","white");
	}
}

// 获取ie版本
function getIEVersion(){
	var userAgent = window.navigator.userAgent.toLowerCase();
	
	$.browser.msie10 = $.browser.msie && /msie 10\.0/i.test(userAgent);
	$.browser.msie9 = $.browser.msie && /msie 9\.0/i.test(userAgent); 
	$.browser.msie8 = $.browser.msie && /msie 8\.0/i.test(userAgent);
	$.browser.msie7 = $.browser.msie && /msie 7\.0/i.test(userAgent);
	$.browser.msie6 = !$.browser.msie8 && !$.browser.msie7 && $.browser.msie && /msie 6\.0/i.test(userAgent);
	
	var ieVersion = 8;
	if($.browser.msie10){
		ieVersion = 10;
	}else if($.browser.msie9){
		ieVersion = 9;
	}else if($.browser.msie8){
		ieVersion = 8;
	}else if($.browser.msie7){
		ieVersion = 7;
	}else if($.browser.msie6){
		ieVersion = 6;
	}
	
	return ieVersion;
}

function getExplorer() {
	var userAgent = navigator.userAgent, 
	rMsie = /(msie\s|trident.*rv:)([\w.]+)/, 
	rFirefox = /(firefox)\/([\w.]+)/, 
	rOpera = /(opera).+version\/([\w.]+)/, 
	rChrome = /(chrome)\/([\w.]+)/, 
	rSafari = /version\/([\w.]+).*(safari)/;
	var browser;
	var version;
	var ua = userAgent.toLowerCase();
	function uaMatch(ua) {
		var match = rMsie.exec(ua);
		if (match != null) {
			return { browser : "IE", version : match[2] || "0" };
		}
		var match = rFirefox.exec(ua);
		if (match != null) {
			return { browser : match[1] || "", version : match[2] || "0" };
		}
		var match = rOpera.exec(ua);
		if (match != null) {
			return { browser : match[1] || "", version : match[2] || "0" };
		}
		var match = rChrome.exec(ua);
		if (match != null) {
			return { browser : match[1] || "", version : match[2] || "0" };
		}
		var match = rSafari.exec(ua);
		if (match != null) {
			return { browser : match[2] || "", version : match[1] || "0" };
		}
		if (match != null) {
			return { browser : "", version : "0" };
		}
	}
	var browserMatch = uaMatch(userAgent.toLowerCase());
	if (browserMatch.browser) {
		browser = browserMatch.browser;
		version = browserMatch.version;
	}
	return browser + ' ' + version;
}


//设置查询结果div高度
function setChartSearchResultHeight(){
	//offsetTop、offsetLest参考div
	var consultDiv = null;
	var divHeight = 0;
	var divWidth = 0;
	
	//设置消息div高度
	var mesDiv = $("#message");
	if(mesDiv.length > 0){
		if(mesDiv.html() != null && mesDiv.html() != ""){
			mesDiv.css("height","50");
			mesDiv.attr("class","message");
		}
	}
	
	//获得元素在屏幕中的横竖坐标
	if($('#nofindpage').length > 0){
		consultDiv = $('#nofindpage');
	}else{
		consultDiv = $('#searchBtn');
	}
	var Y = consultDiv.offset().top;
	var X = consultDiv.offset().left;

	// ie div高度/宽度
	if($.browser.msie || getExplorer() == 'IE 11.0') {
		if($('#nofindpage').length > 0){
			divHeight = $(window).height() - Y - 48;
		}else{
			divHeight = $(window).height() - Y - 64;
		}
		divWidth = $(window).width() - X - 1;
		
		// 无横向滚动条的table固定表头
		var ieVersion = getIEVersion();
		if((ieVersion == 10 || getExplorer() == 'IE 11.0') && $("#editScrollSearchResult").length == 0){
			fixHeader();
		}
		
	// 火狐 div高度/宽度
	}else if($.browser.mozilla){
		if($('#nofindpage').length > 0){
			divHeight = window.screen.availHeight - Y - 190;
		}else{
			divHeight = window.screen.availHeight - Y - 207;
		}
		divWidth = $(window).width() - X - 4;
		//divWidth = window.screen.availWidth - X - 217;
		if(getExplorer() == 'firefox 26.0') {
			divWidth += 4;
		}
		
		// 无横向滚动条的table固定表头
		if($("#editScrollSearchResult").length == 0){
			fixHeader();
		}
	}
	
	if($("#bottom_button").length > 0){
		divHeight = divHeight - 28;
	}
	
	if($("#middleDiv").length > 0){
		divHeight = divHeight - 4;
	}

	//设置查询结果div高度、宽度
	if($('#searchResult').length > 0){
		$('#searchResult').css("height",divHeight/3+"px");
		$('#searchResult').css("width",divWidth +"px");
	}else if($("#editScrollSearchResult").length > 0){
		$('#editScrollSearchResult').css("height",divHeight/3+"px");
		$('#editScrollSearchResult').css("width",divWidth+"px");
		
		var fixedTableWidth = $("#fixedTable").width();
		var fixedTableHeight = $("#fixedTable").height();
		var scrollDivWidth = divWidth - fixedTableWidth;
		var scrollDivHeight = divHeight/3 - fixedTableHeight - 2;

		var dataTableHeight = $("#dataDiv").height();
		$("#dataDiv").css("width",scrollDivWidth+"px");

		if(dataTableHeight > scrollDivHeight){
			$("#headDiv").css("width",(scrollDivWidth - 17) +"px");
		}else{
			$("#headDiv").css("width",scrollDivWidth+"px");
		}
		
		$("#columnDiv").css("height",(scrollDivHeight - 17) + "px");
		$("#dataDiv").css("height",scrollDivHeight+"px");

//		editSearchResultTable('dataTable');

//		$("#columnTable tr:eq(0)").find("td").each(function(){
//			var tdIndex = $(this).index();
//			var width = $("#fixedTable tr:eq(0)").find("th").eq(tdIndex).width();
//			$(this).css("width",width);
//		});
//		$("#dataTable tr:eq(0)").find("td").each(function(){
//			var tdIndex = $(this).index();
//			var width = $("#headTable tr:eq(0)").find("th").eq(tdIndex).width();
//			$(this).css("width",width);
//		});
//		
//		if($('#Grgl00401DivHeight').length > 0){
//			
//			if(getExplorer() == 'firefox 26.0' || getExplorer() == 'firefox 25.0') {
//
//			} else if(getIEVersion() == 8){
//				$("#dataDiv").css("height",(scrollDivHeight+30)+"px");
//				$('#editScrollSearchResult').css("height",(divHeight/3 +30)+"px");
//			}else {
//				
//			}
//		}
	}
	
	//设置chart图查询结果div高度、宽度
	if($('#chartResult').length > 0){
		$('#chartResult').css("height",divHeight-100+"px");
		$('#chartResult').css("width",divWidth +"px");
	}
	
	var tr = $("#searchResultTable tr");
	$.each(tr, function(){
		$(this).children("td:last").css("border-right","none");
	});
	var tr = $("#searchResultTable tr");
	$.each(tr, function(){
		$(this).children("th:last").css("border-right","none");
	});
	
	//画面迁移返回查询页面后显示原排序图片
	showSortPic();
}

function comCheckAll() {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
	if($('#allcheck').attr("checked")==true || $('#allcheck').attr("checked") == "checked"){
		zTree.checkAllNodes(true);
	}else{
		zTree.checkAllNodes(false);
	}
}

function checkNull(obj){
	if(obj==null||obj==""){
		return false;
	}
	return true;
}
function checkNum(obj){
	var num=/^\d*$/;
	if(num.test(obj)==true){
		return true;
	}
	return false;
}
function checkTwoData(obj1,obj2){
	if(obj1==obj2){
		return true;
	}
	return false;
}
//检查时间格式
function checkDate(obj){
	var date=/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/;
	if(date.test(obj)){
		return true;
	}
	return false;
}
//日期范围检查
function dateScopeCheck(startDate,endDate,scopeNum){
	var dateScope=$("#dateScope");
	if(checkNull(startDate)&&checkNull(endDate)){
		if(checkDate(startDate)&&checkDate(endDate)){
			//得到一天的毫秒数
			var ds = 24*60*60*1000;
			
			var arr = new Array();
			 arr = startDate.split("-");
			 
			var mydate1=new Date(arr[0],arr[1],arr[2]);
			var num=mydate1.getTime()+ds*scopeNum;
			
			 arr = endDate.split("-");
			var mydate2=new Date(arr[0],arr[1],arr[2]);
			if(startDate==endDate){
				dateScope.html("");
				return true;
			}else if(mydate2.getTime()<mydate1.getTime()){
				dateScope.html("结束日期不能小于开始日期");
				return false;
			}
			if(mydate2.getTime()>mydate1.getTime()&&mydate2.getTime()<=num){
				if(mydate2.getTime()-mydate1.getTime()<=ds*scopeNum){
					dateScope.html("");
					return true;
				}
			}else{
				dateScope.html("日期范围不可超过"+scopeNum+"日，请重新输入");
				return false;
			}
		}else{
			dateScope.html(MSG059);
			return false;
		}
		
	}else if(checkNull(startDate)==false&&checkNull(endDate)){
		dateScope.html(MSG057);
		return false;
	}
	else if(checkNull(startDate)&&checkNull(endDate)==false){
		dateScope.html(MSG058);
		return false;
	}else{
		dateScope.html("");
	}
	return true;
}
//整数范围检查
function numScopeCheck(num,minNum,maxNum,lableName){
	if(num!=""&&num!=null){
		var numbera=/^\d+$/;
		if(numbera.test(num)==false){
			alert(lableName+MSG060);
			return false;
		}
		if(num<minNum||num>maxNum){
			alert(lableName+"只可输入从"+minNum+"到"+maxNum+"的数字，请重新输入。");
			return false;
		}
		return true;
	}
	return true;
}
function t(){
	
}
//新建店铺标签:参数1添加节点的对象，参数2添加的内容，参数3标识是否有两个输入框1一个2两个
function newTr2(obj,rows,id){
	$("#"+obj).append(rows);
	//Tr对象
	var child=$("#"+obj+" tr:last-child");
	//child.find("td").eq(0):取到tr的第一个td子节点下的隐藏文本框
	var hiddenItem1 = child.find("td").eq(1).children("input[type='hidden']");
	var hiddenItem2 = child.find("td").eq(2).children("input[type='hidden']");
	//取到文本框的值
	var td1Value=hiddenItem1.val();
	td1Value = $.trim(td1Value);
	var td2Value=hiddenItem2.val();
	td2Value = $.trim(td2Value);
	var num=child.index();
	//给radio标签name赋值
	var td1=child.find("td").eq(1);
	td1.attr("name","edit");
	//取得标志位用来判断是否需要插入文本框
	var flg1 = td1.children("input[type='text']").length;
	if(flg1 <= 0){
		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
		td1.html('<input type="text" maxlength="40" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + td1Value + '"/>');
		//为文本框获取焦点
		td1.children("input").focus();
		td1.children("input").select();
	}	
	//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
	td1.children("input[type='text']").blur(function(){
				// 设置TD中的内容
		td1.attr("id",$(this).val());
		td1.html($(this).val());
				// 判断内容是否有所改变
				if($(this).val() != td1Value){ // 内容改变
					hiddenItem1.attr("value", $(this).val());
					td1.css("color","#FFA500");
					td1.css("font-weight","bold");
				}
				
				hiddenItem1.attr("name", "dataStTags["+num+"].tagName");
				td1.append(hiddenItem1);
				editSearchResultTableAT(td1,1);
	});
	if(id==1){
	}else{
	var td2=child.find("td").eq(2);
	td2.attr("name","edit");
	var flg2 = td2.children("input[type='text']").length;
	if(flg2<=0){
			editSearchResultTableAT(td2,3);
		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
		td2.html('<input type="text" maxlength="11" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + td2Value + '"/>');
		//为文本框绑定获取焦点事件
		td2.children("input").mouseover(function (){
			//选中文本框的值
			td2.children("input").select();
			//numScopeCheck
		});
		td2.children("input").focusout(function (){
			var val=td2.children("input").eq(0).val();
			if(val!=""&&val!=null){
				//选中文本框的值
				if(checkNum(val)==false){
					//errorForm(MSG014, "值"+MSG060);
					alert("值"+MSG060);
					td2.children("input").select();
				}else{
					//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
					td2.children("input").blur(function(){
								// 设置TD中的内容
								td2.html($(this).val());
								hiddenItem2.attr("value", $(this).val());
								hiddenItem2.attr("name", "dataStTags["+child.index()+"].tagValue");
								td2.append(hiddenItem2);
								// 判断内容是否有所改变
								if($(this).val() != td2Value){ // 内容改变
									td2.css("color","#FFA500");
									td2.css("font-weight","bold");
									//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
									//child.find("td").eq(2).children("input[type='hidden']").attr("name","dataList["+child.index()+"].tagGrpType");
								}
					});
				}
			}
			
		});
		
	}
	}
	
	child.find("td").eq(0).children("input[type='hidden']").attr("name","dataStTags["+child.index()+"].tagId");
	//child.find("td").eq(3).children("input[type='hidden']").attr("name","dataStTags["+child.index()+"].status");
}

//新建店铺标签组:参数1添加节点的对象，参数2添加的内容，参数3标识是否有两个输入框1一个2两个
function newTr(obj,rows,id){
	$("#"+obj).append(rows);
	//Tr对象
	var child=$("#"+obj+" tr:last-child");
	//child.find("td").eq(0):取到tr的第一个td子节点下的隐藏文本框
	var hiddenItem1 = child.find("td").eq(1).children("input[type='hidden']");
	var hiddenItem2 = child.find("td").eq(3).children("input[type='hidden']");
	//取到文本框的值
	var td1Value=hiddenItem1.val();
	td1Value = $.trim(td1Value);
	var td2Value=hiddenItem2.val();
	td2Value = $.trim(td2Value);
	var num=child.index();
	//给radio标签name赋值
	var td1=child.find("td").eq(1);
	td1.attr("name","edit");
	//取得标志位用来判断是否需要插入文本框
	var flg1 = td1.children("input[type='text']").length;
	if(flg1 <= 0){
		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
		td1.html('<input type="text" maxlength="40" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + td1Value + '"/>');
		//为文本框获取焦点
		td1.children("input").focus();
		td1.children("input").select();
	}	
	//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
	td1.children("input[type='text']").blur(function(){
				// 设置TD中的内容
				td1.html($(this).val());
				td1.attr("id",$(this).val());
				// 判断内容是否有所改变
				if($(this).val() != td1Value){ // 内容改变
					hiddenItem1.attr("value", $(this).val());
					td1.css("color","#FFA500");
					td1.css("font-weight","bold");
				}
				hiddenItem1.attr("name", "dataList["+num+"].tagGrpName");
				td1.append(hiddenItem1);
				editSearchResultTableAT(td1,1);
	});
	if(id==1){
		child.find("td").eq(2).children("select").attr("name","dataList["+num+"].tagGrpType");
		/*child.find("td").eq(2).children("select").focusout(function(){
		child.find("td").eq(2).html($(this).val());
		var input=$("<input type='hidden'/>");
		input.attr("name","dataList["+num+"].tagGrpType");
		input.val($(this).val());
		child.find("td").eq(2).append(input);
		if($(this).val() != td1Value){ // 内容改变
			child.find("td").eq(2).css("color","#FFA500");
			child.find("td").eq(2).css("font-weight","bold");
		}
		//alert(child.find("td").eq(3).children("input[type='hidden']").attr("name"));
});*/
	
	}
	var td2=child.find("td").eq(3);
	td2.attr("name","edit");
	var flg2 = td2.children("input[type='text']").length;
	if(flg2<=0){
			editSearchResultTableAT(td2,2);
		//在焦点点击位置添加文本框并设置文本框格式和文本框的值
		td2.html('<input type="text" maxlength="11" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + td2Value + '"/>');
		//为文本框绑定获取焦点事件
		td2.children("input").mouseover(function (){
			//选中文本框的值
			td2.children("input").select();
			//numScopeCheck
		});
		td2.children("input").focusout(function (){
			var val=td2.children("input").eq(0).val();
			if(val!=""&&val!=null){
				//选中文本框的值
				if(checkNum(val)==false){
					//errorForm(MSG014, "权重"+MSG060);
					alert("权重"+MSG060);
					td2.children("input").select();
				}else{
					//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
					td2.children("input").blur(function(){
								// 设置TD中的内容
								td2.html($(this).val());
								hiddenItem2.attr("value", $(this).val());
								hiddenItem2.attr("name", "dataList["+child.index()+"].tagGrpWeight1");
								td2.append(hiddenItem2);
								// 判断内容是否有所改变
								if($(this).val() != td2Value){ // 内容改变
									td2.css("color","#FFA500");
									td2.css("font-weight","bold");
									//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
									//child.find("td").eq(2).children("input[type='hidden']").attr("name","dataList["+child.index()+"].tagGrpType");
								}
					});
				}
			}
			
		});
	}
	child.find("td").eq(0).children("input[type='hidden']").attr("name","dataList["+child.index()+"].tagGrpId");
	//child.find("td").eq(3).children("input[type='hidden']").attr("name","dataList["+child.index()+"].status");
}

//店铺标签,{0}点击对象,{1是否需要验证}
function editSearchResultTableAT(obj,num){
	//if($("#"+obj+" tr td[name='edit']").length > 0){
		//$("#"+obj+" tr td[name='edit']").dblclick(function(){
	if(num==1){
		$(obj).dblclick(function(){
			//取得焦点点击位置TD
			var td = $(this);
			td.css("color", "blue");
			var index = $(this).index();
			var tr = $(this).parent();

			//取得隐藏域
			var hiddenItem = td.children("input[type='hidden']");
		    //取得单元格内的值
			var tdValue = hiddenItem.val();
			tdValue = $.trim(tdValue);
			
			//取得标志位用来判断是否需要插入文本框
			var flg = td.children("input[type='text']").length;
			if(flg <= 0){
				//在焦点点击位置添加文本框并设置文本框格式和文本框的值
				td.html('<input type="text" maxlength="40" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
				//为文本框获取焦点
				td.children("input").focus();
				td.children("input").select();
			}	
			//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
			td.children("input[type='text']").blur(function(){
						// 设置TD中的内容
						td.html($(this).val());
						td.attr("id",$(this).val());
						hiddenItem.attr("value", $(this).val());
						td.append(hiddenItem);
						// 判断内容是否有所改变
						if($(this).val() != tdValue){ // 内容改变
							td.css("color","#FFA500");
							td.css("font-weight","bold");
						}
			});
		});
	}else{
		$(obj).dblclick(function(){
			//取得焦点点击位置TD
			var td = $(this);
			td.css("color", "blue");
			var index = $(this).index();
			var tr = $(this).parent();

			//取得隐藏域
			var hiddenItem = td.children("input[type='hidden']");
		    //取得单元格内的值
			var tdValue = hiddenItem.val();
			tdValue = $.trim(tdValue);
			
			//取得标志位用来判断是否需要插入文本框
			var flg = td.children("input[type='text']").length;
			if(flg <= 0){
				//在焦点点击位置添加文本框并设置文本框格式和文本框的值
				td.html('<input type="text" maxlength="11" style="width: 100%; hight: 100%; padding: 0px; margin: 0px; border: 0px;" value="' + tdValue + '"/>');
				//为文本框获取焦点
				td.children("input").focus();
				td.children("input").select();
			}	
			//焦点离开以后 使文本框恢复为单元格，并是文本框的值赋予单元格和单元格隐藏域
			td.children("input[type='text']").blur(function(){
				if(checkNum($(this).val())==false){
					//errorForm(MSG014, "值"+MSG060);
					if(num==3){
						alert("值"+MSG060);
					}else{
						alert("权重"+MSG060);
					}
					$(this).select();
				}else{
					// 设置TD中的内容
					td.html($(this).val());
					td.attr("id",$(this).val());
					hiddenItem.attr("value", $(this).val());
					td.append(hiddenItem);
					// 判断内容是否有所改变
					if($(this).val() != tdValue){ // 内容改变
						td.css("color","#FFA500");
						td.css("font-weight","bold");
					}
				}
						
			});
		});
	}
		//});
	//}
}
//date基准日期yyyy.mm.dd，AddDayCount 天数
function GetDateStr(date, AddDayCount) {
	var dd = new Date(date.replace(/\./g,"/")); 
	
	dd = dd.getTime() + AddDayCount*24*60*60*1000;
	dd= new Date(dd);//获取AddDayCount天后的日期 
	var y = dd.getFullYear(); 
	var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0

	var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate(); //获取当前几号，不足10补0
	return y+"."+m+"."+d;
}

//date基准月份yyyy.mm，AddMonthCount 月数
function GetYMStr(date, AddMonthCount) {
	
	var dd = new Date(date.replace(/\./g,"/") + "/01"); 
	var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;
	
	var newm = m + AddMonthCount;
	if(newm > 12){
		y = y + 1;
		newm = newm - 12;
	}else if(newm < 1){
		y = y - 1;
		newm = newm + 12;
	}
	
	if(newm < 10){
		newm = "0" + newm;
	}
	
	return y+"."+newm;
}

//IE8对应，动态设定边框线
$(document).ready(function(){
	$(".tsear .input1[type=text]").focus(function(){
	  	$(this).css("border","1px #f27441 solid");
	  	$(this).css("border-left","4px #f27441 solid");
	});
	
	$(".tsear .input1[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #f27441 solid");
	});
	
	$(".tsear .input2[type=text]").focus(function(){
	  	$(this).css("border","1px #30af84 solid");
	  	$(this).css("border-left","4px #30af84 solid");
	});
	
	$(".tsear .input2[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #30af84 solid");
	});
	
	$(".tsear .input3[type=text]").focus(function(){
	  	$(this).css("border","1px #53a9e1 solid");
	  	$(this).css("border-left","4px #53a9e1 solid");
	});
	
	$(".tsear .input3[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #53a9e1 solid");
	});
	
	$(".tsear .input4[type=text]").focus(function(){
	  	$(this).css("border","1px #f3e03c solid");
	  	$(this).css("border-left","4px #f3e03c solid");
	});
	
	$(".tsear .input4[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #f3e03c solid");
	});
	
	$(".tsear .Wdate1[type=text]").focus(function(){
		//_closeSelect($(this)); //关闭下拉框
	  	$(this).css("border","1px #f27441 solid");
	  	$(this).css("border-left","4px #f27441 solid");
	});
	
	$(".tsear .Wdate1[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #f27441 solid");
	});
	
	$(".tsear .Wdate2[type=text]").focus(function(){
		//_closeSelect($(this)); //关闭下拉框
	  	$(this).css("border","1px #30af84 solid");
	  	$(this).css("border-left","4px #30af84 solid");
	});
	
	$(".tsear .Wdate2[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #30af84 solid");
	});
	
	$(".tsear .Wdate3[type=text]").focus(function(){
		//_closeSelect($(this)); //关闭下拉框
	  	$(this).css("border","1px #53a9e1 solid");
	  	$(this).css("border-left","4px #53a9e1 solid");
	});
	
	$(".tsear .Wdate3[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #53a9e1 solid");
	});
	
	$(".tsear .Wdate4[type=text]").focus(function(){
		//_closeSelect($(this)); //关闭下拉框
	  	$(this).css("border","1px #f3e03c solid");
	  	$(this).css("border-left","4px #f3e03c solid");
	});
	
	$(".tsear .Wdate4[type=text]").blur(function(){
	  	$(this).css("border","1px #eeeeee solid");
	  	$(this).css("border-left","4px #f3e03c solid");
	});
	/*
	$(".login_box .t1 .input").focus(function(){
  	$(this).css("border","1px #f27441 solid");
	});
	
	$(".login_box .t1 .input").blur(function(){
  	$(this).css("border","none");
	});
	
	$(".login_box .t2 .input").focus(function(){
  	$(this).css("border","1px #f27441 solid");
	});
	
	$(".login_box .t2 .input").blur(function(){
  	$(this).css("border","none");
	});
	*/
});
//回车触发第一个按钮事件
//document.onkeydown = function (e) { 
//	var theEvent = window.event || e; 
//	var code = theEvent.keyCode || theEvent.which; 
//	if (code == 13) {
//		var $frameSet=$(window.top.document).find("#mainframeSet").find("#tabFrameSet");
//		var s=$frameSet.attr("cols")
//		var str=new Array();
//		str=s.split(",");
//		var div;
//		for(i=0;i<str.length;i++){
//			if(str[i]=="*"){
//				var j=0;
//				$frameSet.children().each(function(){
//					if(j==i){
//						var obj=this.contentWindow;
//						$btn=$(obj.document).find("input[type='button']");
//						return false;
//					}
//					j++;
//				});
//			}
//		}
//		$btn.click();
//	}
//}
function GetDateBeforeOneWeek(strTime) 
{ 
	
	var date;
	if(strTime ==""){
		date= new Date();
		date = getYestoday(date);
		date= date.replace(/\./g,"/");
		date= new Date(date);
	}else{
		if(strTime.indexOf(".")!=-1){
			strTime = strTime.replace(/-/g,   "/");
			strTime = strTime.replace(/\./g,"/");
			
			date= new Date(Date.parse(strTime)); //转换成Data();
		}else{
			date= new Date(Date.parse(strTime.replace(/-/g,   "/"))); //转换成Data();
		}
	}
	var dateOne = date;
	var dateSeven= date;
	var day = date.getDay();
	
	var time = dateOne.getTime();
	var sub;
	if(day==0){
		sub = day-6;
	}else{
		sub = 1-day;
	}
	
	time+=sub*24*3600000;
	dateOne.setTime(time);
	var month = dateOne.getMonth()+1;
	var year = dateOne.getFullYear();
	var strDay=dateOne.getDate();
	if(month<10)
	{
		month="0"+month;
	}
	 if(strDay<10)     
	    {     
	    	strDay="0"+strDay;     
	    }
	var str1=year+"."+month+"."+strDay;
	var time2 = dateSeven.getTime();
	var sub2;
		if(day==1){
			sub2 = 5+day;
		}else if(day==2){
			sub2 = 4+day;
		}else if(day==3){
			sub2 = 3+day;
		}else if(day==4){
			sub2 = 2+day;
		}else if(day==5){
			sub2 = 1+day;
		}else if(day==6){
			sub2 = 0+day;
		}else if(day==0){
			sub2 = 6+day;
		}
	time2+=sub2*24*3600000;
	dateSeven.setTime(time2);
	var strMonth1 = dateSeven.getMonth()+1;
	var year1 = dateSeven.getFullYear();
	var strDay1=dateSeven.getDate();
	if(strMonth1<10)
	{
		strMonth1="0"+strMonth1;
	}
	 if(strDay1<10)     
	    {     
	    	strDay1="0"+strDay1;     
	    }
	var str2=year1+"."+strMonth1+"."+strDay1;
	var value = new Array();
	 value[0]=str1;
	 value[1]=str2;
	return value;
}

function GetDateBeforeDay(strTime,addDays) 
{ 
	var today;   
	if(strTime ==""){
		today= new Date();
		today = getYestoday(today);
		today= today.replace(/\./g,"/");
		today= new Date(today);
	}else{
		if(strTime.indexOf(".")!=-1){
			strTime = strTime.replace(".",   "/");
			strTime = strTime.replace(".",   "/");
			today= new Date(Date.parse(strTime)); //转换成Data();
		}else{
			today= new Date(Date.parse(strTime.replace(/-/g,   "/"))); //转换成Data();
		}
	}
	var   yesterday_milliseconds;
	if(addDays<0){
		yesterday_milliseconds=today.getTime()+1000*60*60*24*-1; 
	}else{
		yesterday_milliseconds=today.getTime()+1000*60*60*24*7; 
	}
	var   yesterday=new   Date();   
	yesterday.setTime(yesterday_milliseconds);   
	
	var strYear=yesterday.getFullYear();
	var strDay=yesterday.getDate();
	var strMonth=yesterday.getMonth()+1;
	if(strMonth<10)
	{
		strMonth="0"+strMonth;
	}
	 if(strDay<10)     
	    {     
	    	strDay="0"+strDay;     
	    }
	var strYesterday=strYear+"-"+strMonth+"-"+strDay;
	return strYesterday;
}

function getFullYMD(sysDay,flag){
	var date;   
	if(sysDay !="" && flag=="month"){
		sysDay = sysDay+"."+"01"
	}
	if(sysDay ==""){
		date= new Date();
		date = getYestoday(date);
		date= date.replace(/\./g,"/");
		date= new Date(date);
	}else{
		if(sysDay.indexOf(".")!=-1){
			sysDay = sysDay.replace(/-/g,   "/");
			sysDay = sysDay.replace(/\./g,"/");
			date= new Date(Date.parse(sysDay)); //转换成Data();
		}else{
			date= new Date(Date.parse(sysDay.replace(/-/g,   "/"))); //转换成Data();
		}
	}
	
	var month = (date.getMonth()+1)<10?"0"+(date.getMonth()+1):(date.getMonth()+1);//获取当前月份的日期，不足10补0
	var day = date.getDate()<10?"0"+date.getDate():date.getDate(); //获取当前几号，不足10补0
	var year = date.getFullYear();
	var newDay;
	if(flag=="month"){
		newDay = year+"."+month;
	}else{
		newDay = year+"."+month+"."+day;
	}
	return newDay;
}

function getYestoday(date){       
    var yesterday_milliseconds=date.getTime()-1000*60*60*24;        
    var yesterday = new Date();        
        yesterday.setTime(yesterday_milliseconds);        
         
    var strYear = yesterday.getFullYear();     
    var strDay = yesterday.getDate();     
    var strMonth = yesterday.getMonth()+1;   
    if(strMonth<10)     
    {     
        strMonth="0"+strMonth;     
    }   
    if(strDay<10)     
    {     
    	strDay="0"+strDay;     
    }
    datastr = strYear+"."+strMonth+"."+strDay;   
    return datastr;   
  } 
/**获取系统时间yyyymmdd*/
function getNowFormatDate(){
    var day = new Date();
    var Year = 0;
    var Month = 0;
    var Day = 0;
    var CurrentDate = "";
    Year= day.getFullYear();//支持IE和火狐浏览器.
    Month= day.getMonth()+1;
    Day = day.getDate();
    CurrentDate += Year+"-";
    if (Month >= 10 ){
     CurrentDate += Month+"-";
    }
    else{
     CurrentDate += "0" + Month+"-";
    }
    if (Day >= 10 ){
     CurrentDate += Day ;
    }
    else{
     CurrentDate += "0" + Day ;
    }
    return CurrentDate;
 }
