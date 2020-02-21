# 进阶设置

修改根目录下\`labelplus\_config.xml\`文件可以修改一些默认设置.

## 修改默认分组信息

编辑labelplus\_config.xml，GroupDefine中的项目

可更改分组项目的名称和RGB颜色

请确保：存在Name的Group项目连续，且第一个Group项的Name不为空

## 修改QuickText功能\(快速输入\)项目

编辑labelplus\_config.xml，QuickText中的项目

Text为文本，Key为快捷键

## 修改输入模式下 图片自动跳转功能中标签的位置

编辑SetLabelVisualRatio的内容 , 两个数字分别为x轴、y轴比例，以半角逗号隔开，0&lt;x,y&lt;1 .

如"0.5,0.4",标签将会出现在中心偏上的位置.

