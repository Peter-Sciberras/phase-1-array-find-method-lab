const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]

function superbowlWin(records){
    let winRecord = records.find((record) => record.result === "W");
    return winRecord ? winRecord.year : undefined;
  }