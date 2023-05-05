type a1 = number;
type a2 = string;
type a3 = boolean;

type d = a1 extends number ? never : a2 extends string ? string : a3 extends string ? never : a3;


type SeikhType = {
    name: "rabil",
    wife1: "jahura",
    wife2: "tahura"
}


// type checkProperty<T> = T extends { wife1: "jahura" } ? never : T
type checkProperty<T, K> = K extends keyof T ? never : T
type checkWife = checkProperty<SeikhType, "wife1">