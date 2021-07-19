//初级
// function getSkill(status:number){
//     if(status === 1){
//         return 'vue';
//     }else if(status === 2){
//         return 'react';
//     }else if(status === 3){
//         return 'angular';
//     }else{
//         return 'jquery';
//     }
// }
// const result = getSkill(1);
// console.log(`我会的框架是${result}`);


//中级
// const frameType = {
//     vue:1,
//     react:2,
//     angular:3,
//     jquery:4
// }
// function getSkill(status:any){
//     if(status === frameType.vue){
//         return 'vue';
//     }else if(status === frameType.react){
//         return 'react';
//     }else if(status === frameType.angular){
//         return 'angular';
//     }else{
//         return 'jquery';
//     }
// }
// const result = getSkill(frameType.react);
// console.log(`我会的框架是${result}`);

//高级
enum frameType{
    vue,
    react,
    angular,
    jquery
}
function getSkill(status:any){
    if(status === frameType.vue){
        return 'vue';
    }else if(status === frameType.react){
        return 'react';
    }else if(status === frameType.angular){
        return 'angular';
    }else{
        return 'jquery';
    }
}
const result = getSkill(3);
console.log(`我会的框架是${result}`);