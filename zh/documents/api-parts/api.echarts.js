window.__EC_DOC_api_echarts = {
  "init": {
    "desc": "<pre><code class=\"lang-js\">(dom: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?: {\n    devicePixelRatio?: number,\n    renderer?: string,\n    useDirtyRect?: boolean, // 从 `v5.0.0` 开始支持\n    width?: number|string,\n    height?: number|string,\n    locale?: string\n}) =&gt; ECharts\n</code></pre>\n<p>创建一个 ECharts 实例，返回 <a href=\"#echartsInstance\">echartsInstance</a>，不能在单个容器上初始化多个 ECharts 实例。</p>\n<p><strong>参数</strong></p>\n<ul>\n<li><p><code class=\"codespan\">dom</code></p>\n<p>  实例容器，一般是一个具有高宽的<code class=\"codespan\">div</code>元素。</p>\n<p>  <strong>注：</strong>如果<code class=\"codespan\">div</code>是隐藏的，ECharts 可能会获取不到<code class=\"codespan\">div</code>的高宽导致初始化失败，这时候可以明确指定<code class=\"codespan\">div</code>的<code class=\"codespan\">style.width</code>和<code class=\"codespan\">style.height</code>，或者在<code class=\"codespan\">div</code>显示后手动调用 <a href=\"#echartsInstance.resize\">echartsInstance.resize</a> 调整尺寸。</p>\n<p>  ECharts 3 中支持直接使用<code class=\"codespan\">canvas</code>元素作为容器，这样绘制完图表可以直接将 canvas 作为图片应用到其它地方，例如在 WebGL 中作为贴图，这跟使用 <a href=\"#echartsInstance.getDataURL\">echartsInstance.getDataURL</a> 生成图片链接相比可以支持图表的实时刷新。</p>\n</li>\n<li><p><code class=\"codespan\">theme</code></p>\n<p>  应用的主题。可以是一个主题的配置对象，也可以是使用已经通过 <a href=\"#echarts.registerTheme\">echarts.registerTheme</a> 注册的主题名称。参见 <a href=\"https://echarts.apache.org/zh/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E6%A0%B7%E5%BC%8F%E7%AE%80%E4%BB%8B\" target=\"_blank\">ECharts 中的样式简介</a>。</p>\n</li>\n<li><p><code class=\"codespan\">opts</code></p>\n<p>  附加参数。有下面几个可选项：</p>\n<ul>\n<li><code class=\"codespan\">devicePixelRatio</code> 设备像素比，默认取浏览器的值<code class=\"codespan\">window.devicePixelRatio</code>。</li>\n<li><code class=\"codespan\">renderer</code> 渲染器，支持 <code class=\"codespan\">&#39;canvas&#39;</code> 或者 <code class=\"codespan\">&#39;svg&#39;</code>。参见 <a href=\"tutorial.html#%E4%BD%BF%E7%94%A8%20Canvas%20%E6%88%96%E8%80%85%20SVG%20%E6%B8%B2%E6%9F%93\" target=\"_blank\">使用 Canvas 或者 SVG 渲染</a>。</li>\n<li><code class=\"codespan\">useDirtyRect</code> 是否开启脏矩形渲染，默认为<code class=\"codespan\">false</code>。参见 <a href=\"https://echarts.apache.org/zh/tutorial.html#ECharts%205%20%E6%96%B0%E7%89%B9%E6%80%A7\" target=\"_blank\">ECharts 5 新特性</a>。</li>\n<li><code class=\"codespan\">width</code> 可显式指定实例宽度，单位为像素。如果传入值为 <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>，则表示自动取 <code class=\"codespan\">dom</code>（实例容器）的宽度。</li>\n<li><code class=\"codespan\">height</code> 可显式指定实例高度，单位为像素。如果传入值为 <code class=\"codespan\">null</code>/<code class=\"codespan\">undefined</code>/<code class=\"codespan\">&#39;auto&#39;</code>，则表示自动取 <code class=\"codespan\">dom</code>（实例容器）的高度。</li>\n<li><p><code class=\"codespan\">locale</code> 使用的语言，内置 <code class=\"codespan\">&#39;ZH&#39;</code> 和 <code class=\"codespan\">&#39;EN&#39;</code> 两个语言，也可以使用 <a href=\"#echarts.registerLocale\">echarts.registerLocale</a> 方法注册新的语言包。目前支持的语言见 <a href=\"https://github.com/apache/echarts/tree/release/src/i18n\" target=\"_blank\">src/i18n</a>。</p>\n<p>如果不指定主题，也需在传入<code class=\"codespan\">opts</code>前先传入<code class=\"codespan\">null</code>，如：</p>\n<pre><code class=\"lang-js\">const chart = echarts.init(dom, null, {renderer: &#39;svg&#39;});\n</code></pre>\n</li>\n</ul>\n</li>\n</ul>\n"
  },
  "connect": {
    "desc": "<pre><code class=\"lang-js\">(group:string|Array)\n</code></pre>\n<p>多个图表实例实现联动。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><code class=\"codespan\">group</code>\n  group 的 id，或者图表实例的数组。</li>\n</ul>\n<p><strong>示例：</strong></p>\n<pre><code class=\"lang-js\">// 分别设置每个实例的 group id\nchart1.group = &#39;group1&#39;;\nchart2.group = &#39;group1&#39;;\necharts.connect(&#39;group1&#39;);\n// 或者可以直接传入需要联动的实例数组\necharts.connect([chart1, chart2]);\n</code></pre>\n"
  },
  "disconnect": {
    "desc": "<pre><code class=\"lang-js\">(group:string)\n</code></pre>\n<p>解除图表实例的联动，如果只需要移除单个实例，可以将通过将该图表实例 <code class=\"codespan\">group</code> 设为空。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><p><code class=\"codespan\">group</code></p>\n<p>  group 的 id。</p>\n</li>\n</ul>\n"
  },
  "dispose": {
    "desc": "<pre><code class=\"lang-js\">(target: ECharts|HTMLDivElement|HTMLCanvasElement)\n</code></pre>\n<p>销毁实例，实例销毁后无法再被使用。</p>\n"
  },
  "getInstanceByDom": {
    "desc": "<pre><code class=\"lang-js\">(target: HTMLDivElement|HTMLCanvasElement) =&gt; ECharts\n</code></pre>\n<p>获取 dom 容器上的实例。</p>\n"
  },
  "use": {
    "desc": "<blockquote>\n<p><code class=\"codespan\">5.0.1</code> 开始支持</p>\n</blockquote>\n<p>使用组件，配合新的按需引入的接口使用。</p>\n<p>注意：该方法必须在<code class=\"codespan\">echarts.init</code>之前使用。</p>\n<pre><code class=\"lang-js\">// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。\nimport * as echarts from &#39;echarts/core&#39;;\n// 引入柱状图图表，图表后缀都为 Chart\nimport {\n    BarChart\n} from &#39;echarts/charts&#39;;\n// 引入直角坐标系组件，组件后缀都为 Component\nimport {\n    GridComponent\n} from &#39;echarts/components&#39;;\n// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步\nimport {\n    CanvasRenderer\n} from &#39;echarts/renderers&#39;;\n\n// 注册必须的组件\necharts.use(\n    [GridComponent, BarChart, CanvasRenderer]\n);\n</code></pre>\n<p>更详细的使用方式见 <a href=\"tutorial.html#在打包环境中使用%20ECharts\" target=\"_blank\">在打包环境中使用 ECharts</a> 一文</p>\n"
  },
  "registerMap": {
    "desc": "<pre><code class=\"lang-js\">(mapName: string, geoJson: Object, specialAreas?: Object)\n</code></pre>\n<p>注册可用的地图，必须在包括 <a href=\"option.html#geo\" target=\"_blank\">geo</a> 组件或者 <a href=\"option.html#series-map\" target=\"_blank\">map</a> 图表类型的时候才能使用。</p>\n<p>使用方法见 <a href=\"option.html#geo.map\" target=\"_blank\">option.geo</a>。</p>\n<p><strong>参数：</strong></p>\n<ul>\n<li><p><code class=\"codespan\">mapName</code></p>\n<p>  地图名称，在 <a href=\"option.html#geo\" target=\"_blank\">geo</a> 组件或者 <a href=\"option.html#series-map\" target=\"_blank\">map</a> 图表类型中设置的 <code class=\"codespan\">map</code> 对应的就是该值。</p>\n</li>\n<li><p><code class=\"codespan\">geoJson</code></p>\n<p>  GeoJson 格式的数据，具体格式见 <a href=\"https://geojson.org/\" target=\"_blank\">https://geojson.org/</a>。</p>\n</li>\n<li><p><code class=\"codespan\">specialAreas</code></p>\n<p>  可选。将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看。</p>\n<p>  <strong>示例 <a href=\"https://echarts.apache.org/examples/zh/editor.html?c=map-usa\" target=\"_blank\">USA Population Estimates</a>：</strong></p>\n<pre><code class=\"lang-js\">echarts.registerMap(&#39;USA&#39;, usaJson, {\n  // 把阿拉斯加移到美国主大陆左下方\n  Alaska: {\n      // 左上角经度\n      left: -131,\n      // 左上角纬度\n      top: 25,\n      // 经度横跨的范围\n      width: 15\n  },\n  // 夏威夷\n  Hawaii: {\n      left: -110,\n      top: 28,\n      width: 5\n  },\n  // 波多黎各\n  &#39;Puerto Rico&#39;: {\n      left: -76,\n      top: 26,\n      width: 2\n  }\n});\n</code></pre>\n</li>\n</ul>\n"
  },
  "getMap": {
    "desc": "<pre><code class=\"lang-js\">(mapName: string) =&gt; Object\n</code></pre>\n<p>获取已注册的地图，返回的对象类型如下</p>\n<pre><code class=\"lang-js\">{\n    // 地图的 geoJson 数据\n    geoJson: Object,\n    // 地图的特殊区域，见 registerMap\n    specialAreas: Object\n}\n</code></pre>\n"
  },
  "registerTheme": {
    "desc": "<pre><code class=\"lang-js\">(themeName: string, theme: Object)\n</code></pre>\n<p>注册主题，用于<a href=\"#echarts.init\">初始化实例</a>的时候指定。</p>\n"
  },
  "registerLocale": {
    "desc": "<blockquote>\n<p>从 <code class=\"codespan\">5.0.0</code> 开始支持</p>\n</blockquote>\n<pre><code class=\"lang-js\">(locale: string, localeCfg: Object)\n</code></pre>\n<p>注册语言包，用于<a href=\"#echarts.init\">初始化实例</a>的时候指定。语言包格式见 <a href=\"https://github.com/apache/echarts/blob/release/src/i18n/langEN.ts\" target=\"_blank\">src/i18n/langEN.ts</a></p>\n"
  },
  "graphic": {
    "desc": "<p>图形相关帮助方法。</p>\n"
  },
  "graphic.extendShape": {
    "desc": "<p>创建一个新的 shape class。</p>\n<pre><code class=\"lang-js\">(\n    opts: Object\n) =&gt; zrender.graphic.Path\n</code></pre>\n<p>更多的关于参数 <code class=\"codespan\">opts</code> 的细节，请参阅 <a href=\"https://ecomfe.github.io/zrender-doc/public/api.html#zrenderpath\" target=\"_blank\">zrender.graphic.Path</a>。</p>\n"
  },
  "graphic.registerShape": {
    "desc": "<p>注册一个开发者定义的 shape class。</p>\n<pre><code class=\"lang-js\">(\n    name: string,\n    ShapeClass: zrender.graphic.Path\n)\n</code></pre>\n<p><code class=\"codespan\">ShapeClass</code> 须用 <a href=\"#echarts.graphic.extendShape\">echarts.graphic.extendShape</a> 生成。\n注册后，这个 class 可以用 <a href=\"#echarts.graphic.getShapeClass\">echarts.graphic.getShapeClass</a> 方法得到。\n<code class=\"codespan\">registerShape</code> 会覆盖已注册的 class，如果用相同的 <code class=\"codespan\">name</code> 的话。\n注册的 class，可以被用于 <a href=\"option.html#series-custom\" target=\"_blank\">自定义系列（custom series）</a> 和\n<a href=\"option.html#graphic\" target=\"_blank\">图形组件（graphic component）</a>，声明 <code class=\"codespan\">{type: name}</code> 即可。</p>\n<p>例如：</p>\n<pre><code class=\"lang-js\">var MyShape = echarts.graphic.extendShape({\n    shape: {\n        x: 0,\n        y: 0,\n        width: 0,\n        height: 0\n    },\n    buildPath: function (ctx, shape) {\n        ctx.moveTo(shape.x, shape.y);\n        ctx.lineTo(shape.x + shape.width, shape.y);\n        ctx.lineTo(shape.x, shape.y + shape.height);\n        ctx.lineTo(shape.x + shape.width, shape.y + shape.height);\n        ctx.closePath();\n    }\n});\necharts.graphic.registerShape(&#39;myCustomShape&#39;, MyShape);\n\nvar option = {\n    series: {\n        type: &#39;custom&#39;,\n        coordinateSystem: &#39;none&#39;,\n        renderItem: function (params, api) {\n            return {\n                type: &#39;myCustomShape&#39;,\n                shape: {\n                    x: api.value(0),\n                    y: api.value(1),\n                    width: api.value(2),\n                    height: api.value(3)\n                },\n                style: {\n                    fill: &#39;red&#39;\n                }\n            };\n        },\n        data: [[10, 20, 30, 40]]\n    }\n};\n</code></pre>\n"
  },
  "graphic.getShapeClass": {
    "desc": "<p>得到一个 <a href=\"#echarts.graphic.registerShape\">注册</a> 好的 class。</p>\n<pre><code class=\"lang-js\">(\n    name: String\n) =&gt; zrender.graphic.Path\n</code></pre>\n<p>这些内置 shape class 会被默认预先注册进去:\n<code class=\"codespan\">&#39;circle&#39;</code>, <code class=\"codespan\">&#39;sector&#39;</code>, <code class=\"codespan\">&#39;ring&#39;</code>, <code class=\"codespan\">&#39;polygon&#39;</code>, <code class=\"codespan\">&#39;polyline&#39;</code>, <code class=\"codespan\">&#39;rect&#39;</code>, <code class=\"codespan\">&#39;line&#39;</code>, <code class=\"codespan\">&#39;bezierCurve&#39;</code>, <code class=\"codespan\">&#39;arc&#39;</code>.</p>\n"
  },
  "graphic.clipPointsByRect": {
    "desc": "<p>输入一组点，和一个矩形，返回被矩形截取过的点。</p>\n<pre><code class=\"lang-js\">(\n    // 要被截取的点列表，如 [[23, 44], [12, 15], ...]。\n    points: Array.&lt;Array.&lt;number&gt;&gt;,\n    // 用于截取点的矩形。\n    rect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    }\n) =&gt; Array.&lt;Array.&lt;number&gt;&gt; // 截取结果。\n</code></pre>\n"
  },
  "graphic.clipRectByRect": {
    "desc": "<p>输入两个矩形，返回第二个矩形截取第一个矩形的结果。</p>\n<pre><code class=\"lang-js\">(\n    // 要被截取的矩形。\n    targetRect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    },\n    // 用于截取点的矩形。\n    rect: {\n        x: number,\n        y: number,\n        width: number,\n        height: number\n    }\n) =&gt; { // 截取结果。\n    x: number,\n    y: number,\n    width: number,\n    height: number\n}\n</code></pre>\n<p>注意：如果矩形完全被截干净，会返回 <code class=\"codespan\">undefined</code>。</p>\n"
  }
}