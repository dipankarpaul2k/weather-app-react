// Convert ISO time to Indian Standard Time
export function convertToIST(isoDateTime) {
  const date = new Date(isoDateTime);

  // Calculate IST offset from UTC
  // 5 hours 30 minutes in milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000;

  // Convert UTC time to IST time
  const istTime = new Date(date.getTime() + istOffset);
  const options = { hour: "numeric", minute: "numeric" };


  // Format IST time in HH:MM format
  const istTimeString = istTime.toLocaleTimeString("en-US", options);

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
  const options = { month: "long", day: "numeric" };

  // Format IST date as May 31,2024
  const istDate = istTime.toLocaleDateString("en-US", options);

  return `${istDate}`;
}
