const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes , second] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours) + 12;
    }
  
    return `${hours}:${minutes}:${second}`;
  }
  
  console.log(convertTime12to24('01:02:25 PM'));
  console.log(convertTime12to24('05:06:53 PM'));
  console.log(convertTime12to24('12:00:24 PM'));
  console.log(convertTime12to24('12:00:60 AM'));

  