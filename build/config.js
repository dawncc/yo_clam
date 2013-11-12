/*
combined files : 

src/config

*/

/*
 * http://g.tbcdn.cn/dawncc/yo_test/0.0.1/config.js
 */
 (function(){
 	KISSY.config({
        debug: true, //启用debug模式
    });
 	if (KISSY.Config.debug) {
 		var srcPath = "../";
 		KISSY.config({
 			packages:[
 			{
 				name:"yo_test",
 				path:srcPath,
 				charset:"utf-8",
 				ignorePackageNameInUri:true,
 				debug:true
 			}
 			]
 		});
 	} else {
 		KISSY.config({
 			packages: [
 			{
 				name: 'yo_test',
					// 修改 abc.json 中的 version 字段来生成版本号
					path: 'http://localhost/build/0.0.1/',
					ignorePackageNameInUri: true
				}
				]
			});
 	}
 })();

