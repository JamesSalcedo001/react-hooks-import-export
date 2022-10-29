import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
// import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain"
// import { trees, wildlife } from "./parks/RockyMountain"
// import {
//   trees as parkTrees,
//   wildlife as parkWildLife,
// } from "./parks/RockyMountain"

// console.log(parkTrees)
// parkWildLife();

// console.log(trees)
// wildlife()

// console.log(trees);
// wildlife();

// console.log(RMFunctions.trees)

// RMFunctions.wildlife();

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  <div>
  <MesaVerde />
  </div>
  return <h1>Colorado State Parks!</h1>;

}

// export default ColoradoStateParks;