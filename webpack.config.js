const path = require('path');

module.exports = {
   mode: 'development',

  /* There are two entry points (js files), one ./src/index.js (e.g. for index.html )
     and the other .src/vue_page.js for another page (say vue_page.html)
     For each index (entry point js file), we specify a name and the js file
     The name will be used in the output section to create the corresponding named 
     webpack output files (to be used with index.html and vue_page.html)
  */
  entry: {
    index: './src/index.js',
    vue_page: './src/vue_page.js',
  },
  
 /* for each 'name' in the entry section, it creates corresponding bundled 
    output file in the 
    dist folder. e.g it will create index.js and vue_page.js files in the dist folder
 */
 output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },


  // copied from https://medium.com/@stefanledin/solve-the-you-are-using-the-runtime-only-build-of-vue-error-e675031f2c50
  resolve: {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
},
module: {
    rules: [
        // added for vue files
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        // added for css 
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                ],
        },
        // added for loading images
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                    'file-loader',
                 ],
        },
        // added for loading fonts
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                 'file-loader',
                ],
       },
       // added to handle csv and tsv (Tab Separated Values) files
        {
            test: /\.(csv|tsv)$/,
            use: [
            'csv-loader',
            ],
        },
        // added for xml files
        {
            test: /\.xml$/,
            use: [
            'xml-loader',
            ],
        },
// added for xml files
{
    test: /.xml$/,
    include: [
        path.resolve(__dirname, "src/xml")
    ],
    use: [
    'xml-loader',
    ],
},


    ]
}
// end of chanhes for vue runtime error message

};