(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{436:function(a,t,e){"use strict";e.r(t);var s=e(49),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"node新手课（15）图片上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node新手课（15）图片上传"}},[a._v("#")]),a._v(" node新手课（15）图片上传")]),a._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),e("p",[a._v("上节课我们讲了修改用户信息功能，今天我们来讲图片上传。")]),a._v(" "),e("h2",{attrs:{id:"需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[a._v("#")]),a._v(" 需求")]),a._v(" "),e("p",[a._v("用户在打卡功能中，选择图片上传。类似微信发朋友圈的功能。")]),a._v(" "),e("h2",{attrs:{id:"功能流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能流程"}},[a._v("#")]),a._v(" 功能流程")]),a._v(" "),e("p",[a._v("安装koa-body包，用来接收图片上传的文件流。然后保存到public目录。")]),a._v(" "),e("h2",{attrs:{id:"代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[a._v("#")]),a._v(" 代码")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("$ npm i koa-body --save\n")])])]),e("blockquote",[e("p",[a._v("app.js")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("const koaBody = require('koa-body');\n\napp.use(koaBody({\n    multipart: true,\n    formidable: {\n        maxFileSize: 1200*1024*1024,\t// 设置上传文件大小最大限制，默认2M\n    }\n}));\n")])])]),e("blockquote",[e("p",[a._v("routes/index.js")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("router.post('/upload', async (ctx, next) => {\n  return indexApi.upload(ctx)\n})\n")])])]),e("blockquote",[e("p",[a._v("api/index.js")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  const file = ctx.request.files.file;\n    const fileName = file.name;\n    // 创建可读流\n    const render = fs.createReadStream(file.path);\n    let filePath = path.join('public/images',fileName);\n    const fileDir = path.join('public/images');\n    if (!fs.existsSync(fileDir)) {\n      fs.mkdirSync(fileDir, err => {\n        console.log('创建失败',err)\n      });\n      return\n    }\n    // 创建写入流\n    const upStream = fs.createWriteStream(filePath);\n    render.pipe(upStream);\n    ctx.body = resp.succeed()\n    return\n")])])]),e("h2",{attrs:{id:"运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("POST http://localhost:3000/upload\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{\n    "message": "OK",\n    "data": {\n        "url": "http://localhost:3000/public\\\\images\\\\f9a15976ab.jpg"\n    }\n}\n')])])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("图片上传就讲完了，你掌握了吗？有问题欢迎到群里和志同道合的小伙伴一起交流。")]),a._v(" "),e("p",[a._v("下节课我们讲解打卡，继续加油吧，Let's go！")])])}),[],!1,null,null,null);t.default=r.exports}}]);