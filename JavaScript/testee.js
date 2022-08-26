var boxObject = {
    red: 0,
    blue: 200,
    green: 100
};
for (var i = 0; i < 54; i++) {
    boxObject.red = boxObject.red + 5;
    drawBox(boxObject);
}