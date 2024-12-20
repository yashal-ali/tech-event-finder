export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(":");

  const date = new Date();
  date.setHours(parseInt(hours), parseInt(minutes), 0, 0);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const isFutureDate = (value:string) => {
  const parsedDate = Date.parse(value);
  const today = new Date().setHours(0, 0, 0, 0);
  return parsedDate >= today;
};