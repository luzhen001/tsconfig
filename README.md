### 此文件为ts的配置文件  tsconfig.json

### 地址为 https://github.com/luzhen001/tsconfig


    "include":[],
        /*
            include 指定要编译的路径列表， 用来指定哪些ts文件需要被编译
        */

    "exclude":[],
        /*
            exclude 指定不需要被编译的文件目录，exclude表示要排除的，不编译的文件，它也可以指定一个列表，
            规则和include一样，可以是文件可以是文件夹，可以是相对路径或绝对路径，可以使用通配符
            默认值：["node_modules","bower_components","jspm_packages"]
        */

    "extends":[],
        /*
            extends 定义被继承的配置文件
            例如："extends":"./config/base"  表示当前配置文件中会自动包含config目录下base.json中的所有配置信息
        */

    "files":[],
        /*
            files 指定被编译的文件列表，只有需要编译的文件少时才会用到
            "files":["index.ts","test.ts","normal.ts","public.ts"]
        */

    "compilerOptions": {
        "incremental": true,
            /*
                incremental 指定TS编译器在第一次编译之后会生成一个存储编译信息的文件，
                第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
            */

        "target":"ES6",
            /*
                target 用来指定ts被编译ES的版本  默认ES3
                target 值的范围：'ES3', 'ES5', 'ES6', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019',
                'ES2020',  'ES2021', 'ESNext'
            */

        "module":"ES6",
            /*
                模块化方式
                module 值的范围：'CommonJS', 'AMD', 'System", 'UMD', 'ES6', 'ES2015', 'ES2020', 'ESNext', 'None'
            */

        "lib": ["dom"],
            /*
                lib 用来指定项目需要用到哪些库  一般不需要调整 除非在其他平台运行时，例如：node */
                lib 值的范围：'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020',
                    'es2021','esnext', 'dom', 'dom.iterable', 'webworker', 'webworker.importscripts',
                    'webworker.iterable', 'scripthost', 'es2015.core', 'es2015.collection', 'es2015.generator',
                    'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.reflect', 'es2015.symbol',
                    'es2015.symbol.wellknown', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory',
                    'es2017.string', 'es2017.intl', 'es2017.typedarrays', 'es2018.asyncgenerator',
                    'es2018.asynciterable', 'es2018.intl', 'es2018.promise', 'es2018.regexp', 'es2019.array',
                    'es2019.object', 'es2019.string', 'es2019.symbol', 'es2020.bigint', 'es2020.promise',
                    'es2020.sharedmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl',
                    'es2021.promise', 'es2021.string', 'es2021.weakref', 'esnext.array', 'esnext.symbol',
                    'esnext.asynciterable', 'esnext.intl', 'esnext.bigint', 'esnext.string',
                    'esnext.promise', 'esnext.weakref'
            */

        "allowJs":false,
            /*
                allowJs 用来指定是否允许编译JS文件，默认false,即不编译JS文件
            */

        "checkJs": false,
            /*
                checkJs 用来指定是否检查和报告JS文件中的错误，默认false
            */

        "jsx": "preserve",
            /*
                jsx 指定代码用于的开发环境 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'
            */

        "declaration": true,
            /*
                declaration 用来指定是否在编译的时候生成相的d.ts声明文件，
                如果设为true,编译每个ts文件之后会生成一个js文件和一个声明文件，但是declaration和allowJs不能同时设为true
            */

        "declarationMap": true,
            /*
                declarationMap 用来指定编译时是否生成.map文件
            */

        "sourceMap": true,
            /*
                socuceMap 用来指定编译时是否生成.map文件
            */

        "outFile": "./dist/app.js",
            /*
                outFile 用于指定输出文件合并为一个文件，只有设置module的值为amd和system模块时才支持这个配置
            */

        "outDir": "./dist",
            /*
                outDir 用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹
            */

        "rootDir": "./src",
            /*
                rootDir 用来指定编译文件的根目录，编译器会在根目录查找入口文件
            */

        "composite": true,
            /*
                composite 是否编译构建引用项目
            */

        "tsBuildInfoFile": "./",
            /*
                tsBuildInfoFile 指定文件以存储增量编译信息
            */

        "removeComments": true,
            /*
                removeComments 是否移除注释 默认false
            */

        "noEmit":false,
            /*
                noEmit 不生成编译后的文件，默认false
            */

        "importHelpers": true,
            /*
                importHelpers 指定是否引入tslib里的复制工具函数，默认为false
            */

        "downlevelIteration": true,
            /*
                downlevelIteration 当target为"ES5"或"ES3"时，
                为"for-of" "spread"和"destructuring"中的迭代器提供完全支持
            */

        "isolatedModules": true,
            /*
                isolatedModules 指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定
            */

        /* 严格类型检查选项 */
        "strict": true,
            /*
                strict 所有严格检查的总开关 默认false  一般设置为true 即所有的检查都打开，下面几个可以不写
            */

        "noImplicitAny": true,
            /*
                noImplicitAny 如果我们没有一些值设置明确类型，编译器会默认认为这个值为any类型，
                如果将noImplicitAny设为true,则如果没有设置明确的类型会报错，默认值为false
            */

        "strictNullChecks": true,
            /*
                strictNullChecks 当设为true时，null和undefined值不能赋值给非这两种类型的值
                别的类型的值也不能赋给他们，除了any类型，还有个例外就是undefined可以赋值给void类型
            */

        "strictFunctionTypes": true,
            /*
                strictFunctionTypes 用来指定是否使用函数参数双向协变检查
            */

        "strictBindCallApply": true,
            /*
                strictBindCallApply 设为true后对bind、call和apply绑定的方法的参数的检测是严格检测
            */

        "strictPropertyInitialization": true,
            /*
                strictPropertyInitialization 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，
                如果要开启这项，需要同时开启strictNullChecks,默认为false
            */

        "noImplicitThis": true,
            /*
                noImplicitThis 当this表达式的值为any类型的时候，生成一个错误
            */

        "alwaysStrict": true,
            /*
                alwaysStrict 指定始终以严格模式检查每个模块，并且在编译之后的JS文件中加入"use strict"字符串，
                用来告诉浏览器该JS为严格模式
            */

        /* 附加检查*/
        "noUnusedLocals": true,
            /*
                noUnusedLocals 用于检查是否有定义了但是没有使用变量，对于这一点的检测，
                使用ESLint可以在你书写代码的时候做提示，你可以配合使用，他的默认值为false
            */

        "noUnusedParameters": true,
            /*
                noUnusedParameters 用于检测是否在函数中没有使用的参数(只提示不报错)
            */

        "noImplicitReturns": true,
            /*
                noImplicitReturns 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false
            */

        "noFallthroughCasesInSwitch": true,
            /*
                noFallthroughCasesInSwitch 用于检查switch中是否有case没有使用break跳出switch,
                默认为false(即如果没有break语句后面不会执行)
            */

        "noUncheckedIndexedAccess": true,
            /*
                noUncheckedIndexedAccess 在索引签名结果中包含“未定义”
            */

        "noImplicitOverride": true,
            /*
                noImplicitOverride 确保用“override”修饰符标记派生类中的重写成员
            */

        "noPropertyAccessFromIndexSignature": true,
            /*
                noPropertyAccessFromIndexSignature 需要索引签名中未声明的属性才能使用元素访问
            */

        /* 模块选项 */
        "moduleResolution": "node",
            /*
                moduleResolution 用于选择模块解析策略，有"node"和"classic"两种类型
            */

        "baseUrl": "./",
            /*
                baseUrl 用于设置解析非相对模块名称的基本目录，相对模块不会受到baseUrl的影响
            */

        "paths": {},
            /*
                paths 用于设置模块名到基于baseUrl的路径映射
            */

        "rootDirs": [],
            /*
                rootDirs 可以指定一个路径列表，在构建时编译器会将这个路径中的内容都放到一个文件夹中
            */

        "typeRoots": [],
            /*
                typeRoots 用来指定声明文件或文件夹的路径列表，如果指定了此项，
                则只有在这里列出的声明文件才会被加载
            */

        "types": [],
            /*
                types 用于指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载
            */

        "allowSyntheticDefaultImports": true,
            /*
                allowSyntheticDefaultImports 用来指定允许从没有默认导出的模块中默认导入
            */

        "esModuleInterop": true,
            /*
                esModuleInterop 通过导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性
            */

        "preserveSymlinks": true,
            /*
                preserveSymlinks 不把符号链接解析为真实路径，
                具体可以了解下webpack和node.js的symlink相关知识
            */

        "allowUmdGlobalAccess": true,
            /*
                allowUmdGlobalAccess 允许在模块中全局变量的方式访问umd模块
            */

        /* Source Map 选项 */
        "sourceRoot": "",
            /*
                sourceRoot 用于指定调试器应该找到TypeScript文件而不是源文件的位置，这个值会被写进.map文件里
            */

        "mapRoot": "",
            /*
                mapRoot 用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，
                该选项会影响.map文件中的sources属性
            */

        "inlineSourceMap": true,
            /*
                inlineSourceMap 指定是否将map文件内容和js文件编译在一个同一个js文件中，如果设为true,
                则map的内容会以//#soureMappingURL=开头，然后接base64字符串的形式插入在js文件底部
            */

        "inlineSources": true,
            /*
                inlineSources 用于指定是否进一步将ts文件的内容也包含到输出文件中
            */

        /* 实验选项 */
        "experimentalDecorators": true,
            /*
                xperimentalDecorators 用于指定是否启用实验性的装饰器特性
            */

        "emitDecoratorMetadata": true,
            /*
                emitDecoratorMetadata 用于指定是否为装上去提供元数据支持，关于元数据，也是ES6的新标准，
                可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引用ES2015.Reflect这个库
            */

        /* 高级选项*/
        "skipLibCheck": true,
            /*
                skipLibCheck 跳过声明文件的类型检查
            */

        "forceConsistentCasingInFileNames": true
            /*
                forceConsistentCasingInFileNames 不允许对同一文件的大小写不一致的引用
            */
    }