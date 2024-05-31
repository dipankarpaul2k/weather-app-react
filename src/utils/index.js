// Convert ISO time to Indian Standard Time
export function convertToIST(isoDateTime) {
  const date = new Date(isoDateTime);

  // Calculate IST offset from UTC
  // 5 hours 30 minutes in milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000;

  // Convert UTC time to IST time
  const istTime = new Date(date.getTime() + istOffset);

  // Format IST time in HH:MM format
  const istTimeString = istTime.toTimeString().split(" ")[0].slice(0, 5);

  return `${istTimeString}`;
}

// Convert ISO time to IST date
export function convertToISTDate(isoDateTime) {
  const date = new Date(isoDateTime);

  // Calculate IST offset from UTC
  // 5 hours 30 minutes in milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000;

  // Convert UTC time to IST time
  const istTime = new Date(date.getTime() + istOffset);
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format IST date as DD/MM/YYYY
  const istDate = istTime.toLocaleDateString("en-US", options);

  return `${istDate}`;
}
