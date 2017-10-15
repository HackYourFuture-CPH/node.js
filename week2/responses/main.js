let state = 10;
addState = () => {
    state ++;
    document.getElementById("result").innerHTML = state;
};

subState = () => {
    state --;
    document.getElementById("result2").innerHTML = state;
};

setState = () => {
    state = 10;
    document.getElementById("result3").innerHTML = state;
};
