class Calendar {
  constructor() {
     this.days = {
        'Sun': 'Sunday',
        'Mon': 'Monday',
        'Tue': 'Tuesday',
        'Wed': 'Wednesday',
        'Thu': 'Thursday',
        'Fri':'Friday',
        'Sat': 'Saturday'
    };
    this.months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    this.ordinals = {
      '1st': 1,
      '2nd': 2,
      '3rd': 3,
      '4th': 4,
      '5th': 5,
      '6th': 6,
      '7th': 7,
      '8th': 8,
      '9th': 9,
      '10th': 10,
      '11th': 11,
      '12th': 12,
      '13th': 13,
      '14th': 14,
      '15th': 15,
      '16th': 16,
      '17th': 17,
      '18th': 18,
      '19th': 19,
      '20th': 20,
      '21st': 21,
      '22nd': 22,
      '23rd': 23,
      '24th': 24,
      '25th': 25,
      '26th': 26,
      '27th': 27,
      '28th': 28,
      '29th': 29,
      '30th': 30,
      '31st': 31,
    };
  }
  
  get(param) {
      let eloquent = ''
      if (param) {
        eloquent = param.split(' ');
      }
      this.day = this.enumerateFirstWord(eloquent[0])
      this.month = this.enumerateFourthWord(eloquent[3])
      if (eloquent[4]) {
        this.year = this.enumerateFiftWord(eloquent[4])
      }
      if (!this.year) {
          this.year = new Date().getFullYear()
      }
      return this.getDay(this.month, this.day, this.year)
  }
  
  enumerateFirstWord(word) {
      if (word.toUpperCase() === 'LAST') {
        return 30;
      }
      if (word.toUpperCase() === 'FIRST') {
        return 1;
      }
      return this.ordinals[word]
    }
    enumerateSecondWord(word) {
        if (word.toUpperCase() === 'DAY') {
            return days
        }
        if (word.toUpperCase() === 'MONTH') {
            return days
        }
    }
    enumerateFourthWord(word) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if(format.test(word)){
          return true;
        } else {
         for(let x in this.months) {
             if (this.months[x].toUpperCase() === word.toUpperCase()) {
                return this.months.indexOf(word.charAt(0).toUpperCase()+word.slice(1))+1;
             }
         }
        }
    }
    enumerateFiftWord(word) {
        return word
    }
    getDaysInMonth(month, year) {
      this.month = month;
      this.year = year;
      month--;
      let date = new Date(year, month, 1);
      let days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    }
    getAllDateInMonth(month, year) {
      let days = this.getDaysInMonth(month, year);
      let result = [];
      for(day in days) {
        result.push(days[day].toDateString());
      }
      return result;
    }
    getDay(month, day, year) {
      let date = new Date(year, month-1, day);
      return this.months[date.getMonth()] + ' '+ day + ' ' + year;
    }
    getMonth() {

    }
    getDayString() {
        string = date.toString().split(' ')
        return days[string[0]]
    }
 
}