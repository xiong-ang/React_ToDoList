# React总结        

## 数据绑定              
### model-->UI         
* 使用jsx语法，{}绑定数据       
* state用于标识数据            
* setState用户修改数据以更新UI
### UI-->model          
* 事件响应，调用响应函数修改model数据的值，和微信小程序用法一致                  


## 组件数据传递           
### 父组件传递数据到子组件              
* 通过props，父组件给子组件指定属性并赋值           
* 子组件从props中获取父组件指定的属性值                    
### 子组件传递数据到父组件              
* 通过callback函数，函数通过props传递给子组件         
* 子组件传递数据时，调用父组件的callback             
* 而angular和vue使用事件方式，父组件on（监听）事件，子组件emit（发送）事件                        

## 增加样式            
### style属性         
* 通过style属性指定style          
```
style = {{prop1:value1, prop2:value2}}         
```
### className属性          
* 由于class是关键字，react使用className指定dom节点的class属性            

## 基本知识          
### es6结构化赋值           
```javascript
let {value1, value2} = {
    value0: 0,
    value1: 1,
    value2: 2,
    value3: 3
};

//value1 is 1
//value2 is 2
```
### Array.map/forEach                  
* Array.map数组每个元素执行映射，返回新数据         
* Array.forEach对数组每个元素进行操作          
### ...array/Array.slice                    
* ...array展开数组元素，一般用于形成新的数组          
* Array.slice()取数组切片组成新的数组                
### Arrar.splice(index, 1)--删除数组元素                             
### jsx最外层可以不是div，用Rect.Fragment                   
### localStorage 用于存储前端数据             
```javascript
//存储数据              
localStorage.setItem("key1", "value1");
//读取数据
localStorage.getItem("key1");
```
### Json.stringify/parse js原生Json处理：序列化/反序列化                   
### Object.assign 
* S6新添加的接口，主要的用途是用来合并多个JavaScript的对象
* [参考](https://blog.csdn.net/qs8lk88/article/details/79018481)      

