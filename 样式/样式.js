//选择样式表2
var sheet = document.styleSheets[1]
function red() {
//cssRules[0]:选择规则/.rules[0]:选择元素 IE
//document.styleSheets[0].rules[0].style（选择样式表1的元素1）
var declaration = document.styleSheets[0].rules[0].style
var setprop = declaration.setProperty("background-color", "red", "important")
}
function aqua() {
var declaration = document.styleSheets[0].cssRules[0].style
var setprop = declaration.setProperty("background-color", "aqua", "important")
}
function original(){
var declaration = document.styleSheets[0].cssRules[0].style
var setprop = declaration.setProperty("background-color", "#ffffff", "important")
}
function add(){
//获取.ex
  sheet.insertRule(".ex2{font-size:80px;}",1) // insertRule(“规则”，在第几个样式表)
  }
var del = function(){
  sheet.deleteRule(1)
}
