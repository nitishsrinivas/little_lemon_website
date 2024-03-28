export function fetchAPI(date) {
  let result = [];
 
  for (let i = 18; i <= 22; i++) {
    const random = Math.random();
    if (random < 0.5) {
      result.push(i + ":00");
    }
    if(random < 0.5){
      result.push(i + ":45"); 
    }
    if (random > 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
