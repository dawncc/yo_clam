/**
 * @fileoverview Yo_test - Mod1.
 * @author 
 */
/**
 * KISSY.use('yo_test/mod1/index',function(S,Mod1){
 *		new Mod1();
 * });
 */
KISSY.add(function(S,Base) {

	var Mod1 = Base.extend({
		initializer:function(){
			var self = this;

			// Your Code
			alert('ok');
		}
	},{
		ATTRS: {
			// 这里是初始参数和默认值
			A:{
				value:'abc'
			}
		}
	});

	return Mod1;
	
},{
	requires:['base']	
});
