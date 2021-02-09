let printMe: (string, number) => void = function(name:string, age:number): void {
    console.log('str',name,'num',age)
}

let test: () => void = function(): void {
    console.log('for test')
}


console.log("🚀 ~ file: comments.ts ~ line 6 ~ test", test())