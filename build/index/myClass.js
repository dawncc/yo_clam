/**
 * @fileoverview Yo_test - myClass.
 * @author  CC
 */
/**
 * KISSY.use('yo_test/index/myClass',function(S,Index){
 *       var cls = new myClass();

    // 绑定事件
    cls.on('afterSizeChange', function(ev){
        console.log('change '+ ev.attrName + ': '+ev.prevVal+' --> '+ev.newVal);
    });

    // 设置属性
    cls.set('size', 20);

    // 获取属性
    alert(cls.get('size'));

    // 重置
    cls.reset();
    alert(cls.get('size'));
 * });
*/
KISSY.add('yo_test/index/myClass', function(S, Base) {
    // 自定义类
    // 继承 Base
    var myClass = Base.extend({},{
        size: {
            value: 0,
            setter: function(v) {
                if (S.isString(v) && v.indexOf('inch')!== -1) {
                    return parseFloat(v)*10/3;
                }
                return parseFloat(v);
            },
            getter: function(v) {
                return v;
            }
        }
    });
    return myClass;
}, {
    requires:['base']   
});