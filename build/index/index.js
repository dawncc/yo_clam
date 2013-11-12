/**
 * @fileoverview Yo_test - Index.
 * @author 
 */
/**
 * KISSY.use('yo_test/index/index',function(S,Index){
 *		new Index();
 * });
 */
KISSY.add('yo_test/index/index',function(S,Base) {

/*
 整合了 attribute 功能, 让继承 base 的子类自动具有 attribute 的功能.
 提供属性的获取和设置操作, 即属性的 getter 和 setter 动作.
*/
	var Index = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			A:{
				value:'abc'
			}aaaa
		}
	});

	return Index;
	
},{
	requires:['base']	
});
