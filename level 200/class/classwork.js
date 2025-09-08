const archersReady = (archers) => 
  archers.length > 0 && archers.every(arrows => arrows >= 5);

function changeCount(coinString) {
  if (!coinString.trim()) return "$0.00"; // handle empty string

  const coins = coinString.split(" ");
  const total = coins.reduce((sum, coin) => sum + CHANGE[coin], 0);

  return `$${total.toFixed(2)}`;
}