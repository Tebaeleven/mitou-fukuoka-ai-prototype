export function calcXOR(x1,x2,w1,w2,w3,w4,w5,w6){
    let s1 = x1 * w1 + x2 * w3 - 0.2;
    let s2 = x1 * w2 + x2 * w4 + 0.7;
    let f1
    let f2
    if (s1>0) {
        f1=1
    }else{
        f1=0
    }
    if (s2>0) {
        f2=1
    }else{
        f2=0
    }
    let y = f1 * w5 + f2 * w6 - 0.8
    if (y>0) {
        y=1
    }else{
        y=0
    }
    return y
}

export function calcXORSigmoid(x1, x2,w1,w2,w3,w4,w5,w6) {
    let s1 = x1 * 0.5 + x2 * 0.5 - 0.2;
    let s2 = x1 * -0.5 + x2 * -0.5 + 0.7;
    let f1 = 1 / (1 + Math.exp(-s1)); // シグモイド関数を適用
    let f2 = 1 / (1 + Math.exp(-s2));
    return 1 / (1 + Math.exp(-(f1 * 0.5 + f2 * 0.5 - 0.8))); // XORの計算とシグモイド関数の適用
}

export function calcOR(x1,x2){
    let result =x1+x2-0.5
    if (result>0) {
        result=1
    }else{
        result=0
    }
    return result
}