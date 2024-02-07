const HtmlWebpackPlugin = require("html-webpack-plugin"); // подключаем соответствующие плагины
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path"); //поможет нам с абсолютным путем, что бы не гадать где проект она уже есть в node.js не надо устанавливать

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode, //настраиваем режим сборки, код выше
  entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
  // entry: {
  //   main: "./src/index.js", // точка входа, куда заглянет вебпак в первую очередь
  // },
  output: {
    //точка выхода , аналог bandle.js из browserify
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/[hash][ext][query]", //куда будут падать картинки
    clean: true,
    path: path.resolve(__dirname, "dist"), // всегда должен быть абсолютный путь (от корневой папки) в нашем случае npm_webpack - название папки в которой лежит проект path: './dist/' - нет. сейчас вызываем методо path.resolve и передаем ему два параметра __dirname - ссылка на текущую папку, так и пишется и dist - относительный путь до папки в которую будем все сохранять
    filename: "main.js",
    assetModuleFilename: (path) => {
      if(typeof path.filename !== "undefined" && path.filename.match(/(img)/)) {
          path.filename = path.filename.replace('src/', '');
          return `${path.filename}/[name].[ext]`;
      }
      return '[name].[ext]';
  },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", //настраиваем хеширование
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/catalog.html",
      filename: "catalog.html",
    }),
  ], //https://www.npmjs.com/package/html-webpack-plugin дока template - путь, откуда и какой файл брать что бы скопмилировать в папку dist
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        //style-loader встраивает стили напрямуе в дом дерево а MiniCssExtractPlugin - в dist
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env", //афтопрефиксер (позволяет поддерживать стили из старых браузеров)
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/i,
        type: "asset/resource",
      },
      {
        //работа с изображениями в html
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, //игнорируется
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
