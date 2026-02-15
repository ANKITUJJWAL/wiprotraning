const salaries = [25000, 40000, 32000, 50000, 28000];
const highSalaries = salaries.filter(sal => sal > 30000);
const totalPayout = highSalaries.reduce((sum, sal) => sum + sal, 0);
const sortedSalaries = highSalaries.sort((a, b) => b - a);
console.log("High Salaries:", highSalaries);
console.log("Total Payout:", totalPayout);
console.log("Sorted Desc:", sortedSalaries);