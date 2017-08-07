var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        filename: 'js/[name].js?v=[chunkhash]',
        path: __dirname+'/dist',  //path:path.join(__dirname,"dist"), 打包目录
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        //<script type="text/javascript" src="<%= htmlWebpackPlugin.files.chunks.main.entry %>"></script>
        new htmlWebpackPlugin({
            filename: 'index.html',           //'index-[hash].html'
            template: 'index.html',
            inject: false,                   //'head'
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true,        //删除注释
                collapseWhitespace: true     //删除空格
            },
            excludeChunks: ['a','c']        //chunks 添加
        }),
        new htmlWebpackPlugin({
            filename: 'a.html', 
            template: 'index.html',
            inject: false,         //body 
            title: 'this is a.html',
            excludeChunks: ['b','c']  //除去 b 和 main 不加
        }),
        new htmlWebpackPlugin({
            filename: 'b.html', 
            template: 'index.html',
            inject: false,        
            title: 'this is b.html',
            excludeChunks: ['a','c']
           
        }),
        new htmlWebpackPlugin({
            filename: 'c.html', 
            template: 'index.html',
            inject: false,          
            title: 'this is c.html',
            excludeChunks: ['a','b']
        })
    ]
}