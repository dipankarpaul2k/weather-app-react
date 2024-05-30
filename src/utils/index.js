export function convertToIST(isoDateTime) {
  const date = new Date(isoDateTime);

  // Calculate IST offset from UTC
  // 5 hours 30 minutes in milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000;

  // Convert UTC time to IST time
  const istTime = new Date(date.getTime() + istOffset);

  // Format IST time in HH:MM:SS format
  const istTimeString = istTime.toTimeString().split(" ")[0];

  return `${istTimeString}`;
}
export function convertToISTDate(isoDateTime) {
  const date = new Date(isoDateTime);

  // Calculate IST offset from UTC
  // 5 hours 30 minutes in milliseconds
  const istOffset = 5.5 * 60 * 60 * 1000;

  // Convert UTC time to IST time
  const istTime = new Date(date.getTime() + istOffset);

  // Format IST date as DD/MM/YYYY
  const istDate = istTime.toLocaleDateString("en-GB");

  return `${istDate}`;
}
