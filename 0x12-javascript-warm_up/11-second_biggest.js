#!/usr/bin/node

// Get command line arguments, excluding the first two (node executable and script path)
const args = process.argv.slice(2);

// Check the number of arguments
if (args.length <= 1) {
  console.log(0);
} else {
  // Convert arguments to integers
  const numbers = args.map(arg => parseInt(arg, 10));

  // Remove duplicates and sort the numbers in descending order
  const uniqueNumbers = [...new Set(numbers)].sort((a, b) => b - a);

  // Print the second biggest number
  console.log(uniqueNumbers[1]);
}
