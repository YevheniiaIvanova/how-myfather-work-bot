class FatherWork {
  _startDate = new Date("10 February, 2021");
  _schedule = ["в день", "в ночь", "отсыпной", "выходной"];
  
  howWorkToday() {
    const time = this._diffGetTime();
    const day = this._howDay(time);
    const index = day % this._schedule.length;
    return this._schedule[index];
  }

  _diffGetTime() {
    const nowDate = new Date();
    return nowDate.getTime() - this._startDate.getTime();
  
  }
  
  _howDay(time) {
    return Math.floor(time / (60*60*24*1000));
  }
}

module.exports = new FatherWork();