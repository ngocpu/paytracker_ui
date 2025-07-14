export const getPeriodTime = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) return "morning";
  if (currentHour < 18) return "afternoon";
  return "evening";
};
export default getPeriodTime;