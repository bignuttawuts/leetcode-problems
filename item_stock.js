
let itemStock = [], itemStockHistory = [];

function doUpdateStock(action, itemId, amount) {

    if (action === 'add') {
        itemStockHistory.push({ itemId, action, amount });
        itemStock.find((val)=> val.)
    }
    return true;
}

function test(action, itemId, amount) {
    itemStock = [];
    itemStockHistory = [];
    itemStock.push({ itemId: "001", itemRemain: 0 });

    doUpdateStock(action, itemId, amount);

    console.log('itemStock', itemStock);
    console.log('itemStockHistory', itemStockHistory);
}

test("add", "001", 10);
