function checkCashRegister(price, cash, cid) {
  //create a function that can calculate what the change due is

  var changeDue = cash - price;

  //takeout the numbers from cid array
  var sortedCashArr = cid.map(e => {
    return e[1];
  });

  //add all those numbers
  var totalCashInDrawer = sortedCashArr.reduce((a, b) => {
    return parseInt(a + b);
  });

  if (totalCashInDrawer < changeDue) {
    return "Insufficient Funds";
  } else if (totalCashInDrawer === changeDue) {
    return "Closed";
  } else {
    //convert the change into Currency Array from highest to lowest order

    var denomArr = [{
        name: "ONE HUNDRED",
        denom: 100,
        qty: ""
      },
      {
        name: "TWENTY",
        denom: 20,
        qty: ""
      },
      {
        name: "TEN",
        denom: 10,
        qty: ""
      },
      {
        name: "FIVE",
        denom: 5,
        qty: ""
      },
      {
        name: "ONE",
        denom: 1,
        qty: ""
      },
      {
        name: "QUARTER",
        denom: 0.25,
        qty: ""
      },
      {
        name: "DIME",
        denom: 0.1,
        qty: ""
      },
      {
        name: "NICKEL",
        denom: 0.05,
        qty: ""
      },
      {
        name: "PENNY",
        denom: 0.01,
        qty: ""
      },
    ];

    cid.reverse().forEach((e) => {
      var myIndex = cid.indexOf(e);
      denomArr[myIndex].qty = e[1];
    });


    function reducingChange() {
      console.log("changeDue is", changeDue);
      var denomToGiveBack = denomArr.find((e) => {
        return changeDue / (e.denom) >= 1;
      });

      if (denomToGiveBack.qty > 0) {
        changeDue -= denomToGiveBack.denom;
        denomToGiveBack.qty -= denomToGiveBack.denom;
        var arrEntryInResult = [denomToGiveBack.name, denomToGiveBack.qty];

        if (result.length > 0) {
          result.forEach((e) => {
            if (e[0] === denomToGiveBack.name) {
              var fooIndex = result.indexOf(e);
              result[fooIndex][1] += denomToGiveBack.denom;
            } else {
              result.push(arrEntryInResult);
            }
          });
        } else {
          result.push(arrEntryInResult);
        }

        console.log("changeDue is", changeDue);
      }
      if (changeDue !== 0) {
        reducingChange();
      } else {
        return;
      }
    }

    var result = [];

    reducingChange();

    //     return result;
    console.log(result);

  }
}

checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);