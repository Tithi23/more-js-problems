/*
chairwood = 3cft/chair
tablewood = 10cft/table
bedwood = 40cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const parChairWood = 3;
    const parTableWood = 10;
    const parBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * parChairWood;
    const tableWoodQuantity = tableQuantity * parTableWood;
    const bedWoodQuantity = bedQuantity * parBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption);