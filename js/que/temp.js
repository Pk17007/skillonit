let a=[1,33,2,14,87,6,34]
/// Bubble shot
for (let i=0;i<a.length-1;i++){
    for (let j=0;j<a.length-i-1;j++){
        if(a[j]>a[j+1]){
            let swap = a[j]
            a[j]=a[j+1]
            a[j+1] = swap
        }
    }
}console.log(a);




























