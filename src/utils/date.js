const date = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const hour = new Date().getHours();
const minutes = new Date().getMinutes();

const currentDate = `${year}-${month}-${date} ${hour}:${minutes}`;

export default currentDate;
