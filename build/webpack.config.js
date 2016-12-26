var path = require("path");
var webpack = require("webpack");
var nodeEnv = process.env.NODE_ENV || "development";
// 产出路径
var DIST_PATH = ROOT_PATH + '/dist';
console.log(nodeEnv);
module.exports = {
    entry: [
        "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
        "webpack/hot/dev-server",
        "./index.js"
    ],

    output: {
        path: DIST_PATH,
        // chunkhash 不能与 --hot 同时使用
        // see https://github.com/webpack/webpack-dev-server/issues/377
        filename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js',
        chunkFilename: __DEV__ ? 'js/[name].js' : 'js/[name].[chunkhash].js'
    },

    module: {
        loader: [
            {
                test: /\.scss?$/,
                exclude: /node_module/,
                loader: "sass-loader",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: "babel",
                query: {
                    presets: ["es2015","react"]
                }
            }
        ]
    },

    resolve: {
        root: path.resolve(__dirname),
        extensions: ["",".json",".js", ".jsx"],
        alias: {
            AppDispatcher: "Dispatcher/AppDispatcher",

            HttpMethodType: "Constants/ApiConstants/HttpMethodType",
            SubSystemType: "Constants/ApiConstants/SubSystemType",
            NavType: "Constants/NavType",
            GraphType: "Constants/GraphType",
            SymbolType: "Constants/SymbolType",
            SmartViewType: "Constants/SmartViewType.js",
            DayOfWeek:"Constants/DayOfWeek.js",
            TimeZoneMaps:"Constants/TimeZoneMaps.js",


            SettingsAction: "Actions/SettingsActions",
            ListActions: "Actions/ListActions",
            GridActions: "Actions/GridActions",

            ListExplorerConstants: "Constants/ListExplorerConstants.js",
            GridConstants: "Constants/GridConstants.js",
            ListManagerTabType: "Constants/ListManagerTabType.js",
            ListManagerViewType: "Constants/ListManagerViewType.js",
            BlockType: "Constants/BlockType.js",

            LoginStore: "Stores/Login/LoginStore",
            SettingsStore: "Stores/ConsoleWindow/Settings/SettingsStore",
            ListStore: "Stores/NavModules/NavList/ListStore",
            ListExplorerStore: "Stores/NavModules/NavList/Explorer/ListExplorerStore",
            ONeilViewStore: "Stores/NavModules/NavList/TabONeil/ONeilViewStore",

            BaseServiceApi: "ServiceApi/BaseServiceApi",
            BaseServiceApiWCF: "ServiceApi/BaseServiceApiWCF",
            BaseServiceRequest: "ServiceApi/BaseServiceRequest",
            BaseServiceRequestIIS: "ServiceApi/BaseIISServiceRequest",
            ListApi: "ServiceApi/Apis/ListApi",

            StorageUtil: "Utils/StorageUtil",
            StringUtil: "Utils/StringUtil",
            ArrayUtil:"Utils/ArrayUtil",
            UserInfoUtil: "Utils/UserInfoUtil",
            PeriodicityHelper: "Utils/PeriodicityHelper",
            ExtremeDataValue: "Utils/ExtremeDataValue.js",
            CurrencyHelper: "Utils/CurrencyHelper.js",
            DateHelper: "Utils/TimeLineHelper/DateHelper.js",

            Base64Serialization: "Serialization/Base64Serialization.js",
            Serializable: "Serialization/Serializable.js",

            VirtualList:"RayCustomControls/VirtualList/VirtualList.jsx",
            RayChart: "RayCustomControls/Chart/RayChart.jsx",
            BarVisual: "RayCustomControls/Chart/Visuals/BarVisual.jsx",
            LineVisual: "RayCustomControls/Chart/Visuals/LineVisual.jsx",
            HorizontalLineVisual: "RayCustomControls/Chart/Visuals/HorizontalLineVisual.jsx",
            CorpEvents: "RayCustomControls/Chart/Visuals/CorpEvents.jsx",
            QuarterlyLine: "RayCustomControls/Chart/Visuals/QuarterlyLine.jsx",
            EventCalendar: "RayCustomControls/CalenderControl/EventCalendar.jsx",
            PeriodicityControl: "RayCustomControls/PeriodicityControl/PeriodicityControl.jsx",
            SymbolEntry: "RayCustomControls/SymbolEntry/SymbolEntry.jsx",
            Alerts: "RayCustomControls/Alerts/Alerts",
            ContextMenu: "RayCustomControls/ContextMenu/ContextMenu"

        }
    },

    plugins:  [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
