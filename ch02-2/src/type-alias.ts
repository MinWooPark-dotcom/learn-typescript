type stringNumberFunc = (string, number) => void
let f : stringNumberFunc = function(name:string, age:number) : void {}
console.log("🚀 ~ file: type-alias.ts ~ line 3 ~ f", f)
let g : stringNumberFunc = function(c: string, d:number) : void {}
console.log("🚀 ~ file: type-alias.ts ~ line 5 ~ g", g)

let h : stringNumberFunc = function(c: string, d:number) : void {}
console.log("🚀 ~ file: type-alias.ts ~ line 8 ~ h", h())
