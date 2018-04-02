var btn = document.getElementById("btn")
var docDiv = document.getElementById("divDoc")
var node = [{
      name:'变宽',
      attr:'width',
      oVal:'200px'
    },{
      name:'变高',
      attr:'height',
      oVal:'200px'
    },{
      name:'变色',
      attr:'background-color',
      oVal:'red'
    },{
      name:'隐藏',
      attr:'display',
      oVal:'none'
    },{
      name:'恢复',
      attr:'display',
      oVal:'block'
    },{
      name:'重置',
      attr:'cssText',
      oVal:''
    }]
btn.addEventListener("click",function(e){
  curNode = node[e.target.name];
  docDiv.style[curNode.attr] = curNode.oVal
})

window.onload = function(){
  var btnList = '';
  for (var i = 0; i < node.length; i++) {
    btnList += '<button type="button" name="'+ i +'">'+node[i].name+'</button>'
  }
  btn.innerHTML = (btnList)
}