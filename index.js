const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteries =  [4, 5, 3, 4, 4, 6, 5]; 
const totalBatteries = batteries.reduce((sum, battery) => sum + battery, 0);  
