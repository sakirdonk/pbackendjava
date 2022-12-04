var {index, store, update, destroy} = require("./FruitController.js");

const main = () => {
    index();
    console.log("");
    update(2, "Strawberry");
    console.log("");
    store("Banana");
    console.log("");
    destroy(3);
    console.log("");
};

main();