function logged(originalMethod: any, context: any): any {
    return function (this: any, ...args: any[]): any {
        console.log("called decorator");
        return originalMethod.call(this, ...args);
    };
}

class Greeter {
    @logged
    hello(): string {
        return "Hi";
    }
}

let r = new Greeter().hello();
console.log(r);





// function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (this: any, ...args: any[]): any {
//         console.log("called decorator");
//         return originalMethod.apply(this, args);
//     };
// }

// class Greeter {
//     @logged
//     hello(): string {
//         return "Hi";
//     }
// }

// let r = new Greeter().hello();
// console.log(r);


