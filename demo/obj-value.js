//遍历数组自身属性 返回对象自身可以迭代属性值（values）为数组类型

// Object.keys
let obj = {a: 1, b: 2, c: 3};
Object.keys(obj).forEach((key, index) => {
  console.log(key,obj[key])
})

for(let key of Object.keys(obj)){
  console.log(key,obj[key]);
}


// Object.values
Object.values(obj).forEach(value => console.log(value))

for(let value of Object.values(obj)){
  console.log(value)
}

//Object.entries(obj)    [[a,1],[b,2],[c,3]]  //解构
Object.entries(obj).forEach(([key,value]) => {
  console.log(`${key} is ${value}`)
})

for(let [key,value] of Object.entries(obj)){
  console.log(`${key} is ${value}`)
}