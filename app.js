
$(function() {

  $.ajax({
      url: 'https://docs.google.com/spreadsheets/d/1biSeRIuBIKtayZdOQcPn2A9AwK7RY29JkFqkA4Sjm_A/gviz/tq?gid=0&tqx=responseHandler:displayResults',
      type: "GET",
      crossDomain: true,
      dataType: 'script'
    });
  
});

var people = {};
var peopleArray = [];
  /*{ kerberos: {
      name
    availability = {
      'fri': true,
      'sat': false
      ...
    }
    eventPrefs = {
      name: {
        points
        group = []
        putInGroup: false
      }
      ...
    }
    schedule = [{
      name
      rank
      startTime
      endTime
      group: []
    }]
    }
  }
    */

var displayResults = function(data) {
    makeJSONObject(data);
    runAllIterations();
    console.log(people);
  }


var events = [
  {
    'name': 'White Water Rafting',
    'times': [
      {
        'day': 'Fri',
        'start': 8,
        'end': 18,
        'spots': 49,
        'participants': ['mhuston']
      }
    ],
    'waitlistSpots': 15,
    'waitlist': []
  },
  {
    'name': 'Kayaking',
    'times': [
      {
        'day': 'Fri',
        'start': 13,
        'end': 15,
        'spots': 45,
        'participants': ['jessmand']
      },
      {
        'day': 'Wed',
        'start': 13,
        'end': 15,
        'spots': 45,
        'participants': ['connorsg']
      }
    ],
    'waitlistSpots': 18,
    'waitlist': []
  },
  {
    'name': 'Skydiving',
    'times': [
      {
        'day': 'Sat',
        'start': 8,
        'end': 18,
        'spots': 49,
        'participants': ['mhuston']
      },
      {
        'day': 'Sun',
        'start': 8,
        'end': 18,
        'spots': 49,
        'participants': ['nancylu']
      },
      {
        'day': 'Mon',
        'start': 8,
        'end': 18,
        'spots': 48,
        'participants': ['jaclynb', 'ctowle']
      },
      {
        'day': 'Tues',
        'start': 8,
        'end': 18,
        'spots': 49,
        'participants': ['jessmand']
      }
    ],
    'waitlistSpots': 40,
    'waitlist': []
  },
  {
    'name': 'F1 Racing',
    'times': [
      {
        'day': 'Sat',
        'start': 10,
        'end': 16,
        'spots': 98,
        'participants': ['jessiepw', 'kbretl']
      },
      {
        'day': 'Sun',
        'start': 10,
        'end': 16,
        'spots': 98,
        'participants': ['arigobon', 'connorsg']
      }
    ],
    'waitlistSpots': 40,
    'waitlist': []
  },
  {
    'name': 'Glassblowing',
    'times': [
      {
        'day': 'Sat',
        'start': 17,
        'end': 20,
        'spots': 68,
        'participants': ['jessmand', 'lauracle']
      },
      {
        'day': 'Sun',
        'start': 17,
        'end': 20,
        'spots': 69,
        'participants': ['jaclynb']
      }
    ],
    'waitlistSpots': 20,
    'waitlist': []
  },
  {'name': 'Paint Nite',
    'times': [
      {
        'day': 'Sat',
        'start': 18,
        'end': 21.5,
        'spots': 37,
        'participants': ['kbretl']
      },
      {
        'day': 'Sun',
        'start': 18,
        'end': 21.5,
        'spots': 37,
        'participants': ['arigobon']
      },
      {
        'day': 'Mon',
        'start': 18,
        'end': 21.5,
        'spots': 37,
        'participants': ['mhuston']
      },
      {
        'day': 'Tues',
        'start': 18,
        'end': 21.5,
        'spots': 37,
        'participants': ['jaclynb']
      }
    ],
    'waitlistSpots': 32,
    'waitlist': []
  },
  {'name': 'Downeast Cider House',
    'times': [
      {
        'day': 'Sat',
        'start': 19,
        'end': 22,
        'spots': 98,
        'participants': ['arigobon', 'jaclynb']
      }
    ],
    'waitlistSpots': 20,
    'waitlist': []
  },
  {'name': 'Improv Asylum',
    'times': [
      {
        'day': 'Sat',
        'start': 21,
        'end': 24,
        'spots': 98,
        'participants': ['nancylu', 'jessiepw']
      }
    ],
    'waitlistSpots': 20,
    'waitlist': []
  },
  {'name': 'Boston Harbor Island Cruise',
    'times': [
      {
        'day': 'Sun',
        'start': 10,
        'end': 17,
        'spots': 98,
        'participants': ['mhuston', 'kbretl']
      }
    ],
    'waitlistSpots': 0,
    'waitlist': []
  },
  {'name': 'Six Flags',
    'times': [
      {
        'day': 'Mon',
        'start': 8,
        'end': 19,
        'spots': 196,
        'participants': ['nancylu', 'jessmand', 'jessiepw', 'kbretl']
      }
    ],
    'waitlistSpots': 40,
    'waitlist': []
  },
  {'name': 'Parasail and Beach Day',
    'times': [
      {
        'day': 'Mon',
        'start': 9,
        'end': 19,
        'spots': 49,
        'participants': ['jiwonk']
      }
    ],
    'waitlistSpots': 15,
    'waitlist': []
  },
  {'name': 'Harpoon',
    'times': [
      {
        'day': 'Mon',
        'start': 15,
        'end': 18,
        'spots': 98,
        'participants': ['connorsg', 'arigobon']
      }
    ],
    'waitlistSpots': 15,
    'waitlist': []
  },
  {'name': 'Bowling',
    'times': [
      {
        'day': 'Mon',
        'start': 19,
        'end': 21,
        'spots': 59,
        'participants': ['arigobon']
      },
      {
        'day': 'Tues',
        'start': 20,
        'end': 22,
        'spots': 59,
        'participants': ['connorsg']
      }
    ],
    'waitlistSpots': 20,
    'waitlist': []
  },
  {'name': 'Metro Rock',
    'times': [
      {
        'day': 'Tues',
        'start': 10,
        'end': 16,
        'spots': 49,
        'participants': ['classcouncil']
      }
    ],
    'waitlistSpots': 10,
    'waitlist': []
  },
  {'name': 'Laser Tag',
    'times': [
      {
        'day': 'Tues',
        'start': 12,
        'end': 16.5,
        'spots': 49,
        'participants': ['connorsg']
      }
    ],
    'waitlistSpots': 15,
    'waitlist': []
  },
  {'name': 'Winery',
    'times': [
      {
        'day': 'Tues',
        'start': 12,
        'end': 18,
        'spots': 196,
        'participants': ['arigobon', 'mhuston', 'jiwonk', 'jessiepw']
      }
    ],
    'waitlistSpots': 20,
    'waitlist': []
  },
  {'name': 'Taza Tour',
    'times': [
      {
        'day': 'Tues',
        'start': 12,
        'end': 13,
        'spots': 19,
        'participants': ['jaclynb']
      },
      {
        'day': 'Wed',
        'start': 12,
        'end': 13,
        'spots': 19,
        'participants': ['arigobon']
      }
    ],
    'waitlistSpots': 0,
    'waitlist': []
  },
  {'name': 'Skyzone',
    'times': [
      {
        //TODO: who's going? how many people (class council + conflicting info)
        'day': 'Tues',
        'start': 15,
        'end': 17,
        'spots': 49,
        'participants': ['classcouncil']
      }
    ],
    'waitlistSpots': 10,
    'waitlist': []
  },
  {'name': 'Cirque du Soleil',
    'times': [
      {
        'day': 'Tues',
        'start': 19,
        'end': 23,
        'spots': 49,
        'participants': ['arigobon']
      }
    ],
    'waitlistSpots': 10,
    'waitlist': []
  },
  {'name': 'Duck Tour',
    'times': [
      {
        'day': 'Wed',
        'start': 11,
        'end': 12,
        'spots': 71,
        'participants': ['kbretl']
      }
    ],
    'waitlistSpots': 0,
    'waitlist': []
  },
  {'name': 'Paintball',
    'times': [
      {
        'day': 'Wed',
        'start': 12,
        'end': 16.5,
        'spots': 49,
        'participants': ['jiwonk']
      }
    ],
    'waitlistSpots': 15,
    'waitlist': []
  },
]

//make data from google spreadsheet into a JSON object
var makeJSONObject = function(data) {

  for (var i=0; i<data.table.rows.length; i++) {

    var row = data.table.rows[i].c;

    var availability = {
      'Fri': false,
      'Sat': false,
      'Sun': false,
      'Mon': false,
      'Tues': false,
      'Wed': false
    }
    var availabilityColumn = row[3].v.split(', ');
    if (availabilityColumn.indexOf('Friday 5/27')>-1) {
      availability['Fri'] = true;
    }
    if (availabilityColumn.indexOf('Saturday 5/28')>-1) {
      availability['Sat'] = true;
    }
    if (availabilityColumn.indexOf('Sunday 5/29')>-1) {
      availability['Sun'] = true;
    }
    if (availabilityColumn.indexOf('Monday 5/30')>-1) {
      availability['Mon'] = true;
    }
    if (availabilityColumn.indexOf('Tuesday 5/31')>-1) {
      availability['Tues'] = true;
    }
    if (availabilityColumn.indexOf('Wednesday 6/1')>-1) {
      availability['Wed'] = true;
    }

    var eventPrefs = [];
    for (var j=0; j<21; j++) {
      var eventPref = {
        'name': events[j].name,
        'rank': parseInt(row[j+4].v),
        //verify group and average ranks later
        'group': [],
        'groupVerified': true,
        'placed': false
      }
      if (row[j+21+4] != null && row[j+21+4].v != null) {
        eventPref.group = row[j+21+4].v.split(', ');
        eventPref['groupVerified'] = false;
      }
      eventPrefs.push(eventPref);
    }
    eventPrefs.sort(function(a,b) {
        return (a.rank - b.rank);
    });

    //kerberos as key
    var person = {
      'name': row[1].v,
      'happiness': 0,
      'availability': availability,
      'eventPrefs': eventPrefs,
      'schedule': []
    };

    people[row[2].v] = person;

  }

  verifyGroups();
  peopleArray = Object.keys(people).map(function (key) {return [key, people[key]]});

}

var verifyGroups = function() {
  for (var kerberos in people) {
    var person = people[kerberos];
    for (var i=0; i<21; i++) {
      var eventPref = person.eventPrefs[i];
      //if group has not been verified, we need to verify the group
      if (!eventPref.groupVerified) {
        var totalRanking = eventPref.rank;
        if (eventPref.group.length == 1) {
          var member = people[eventPref.group[0]];
          if (member != undefined && member.eventPrefs[i].group.length == 1 && member.eventPrefs[i].group[0] == kerberos) {
            member.eventPrefs[i].groupVerified = true;
            eventPref.groupVerified = true;
            totalRanking += member.eventPrefs[i].rank;
            var averageRank = totalRanking/2;
            eventPref.rank = averageRank;
            member.eventPrefs[i].rank = averageRank;
            eventPrefs.sort(function(a,b) {
                return (a.rank - b.rank);
            });
            member.eventPrefs.sort(function(a,b) {
                return (a.rank - b.rank);
            });
          } else {
            eventPref.group = [];
          }
        } else if (eventPref.group.length == 2) {
          var member1 = people[eventPref.group[0]];
          var member2 = people[eventPref.group[1]];
          if (member1 != undefined && member1.eventPrefs[i].group.length == 2 && member1.indexOf(kerberos)!=-1 && member1.indexOf(eventPref.group[1])!=-1) {
            if (member2 != undefined && member2.eventPrefs[i].group.length == 2 && member2.indexOf(kerberos)!=-1 && member2.indexOf(eventPref.group[0])!=-1) {
              member1.eventPrefs[i].groupVerified = true;
              member2.eventPrefs[i].groupVerified = true;
              eventPref.groupVerified = true;
              totalRanking += member1.eventPrefs[i].rank;
              totalRanking += member2.eventPrefs[i].rank;
              var averageRank = totalRanking/3;
              eventPref.rank = averageRank;
              member1.eventPrefs[i].rank = averageRank;
              member2.eventPrefs[i].rank = averageRank;
              eventPrefs.sort(function(a,b) {
                  return (a.rank - b.rank);
              });
              member1.eventPrefs.sort(function(a,b) {
                  return (a.rank - b.rank);
              });
              member2.eventPrefs.sort(function(a,b) {
                  return (a.rank - b.rank);
              });
            } else {
              eventPref.group = [];
            }
          } else {
            eventPref.group = [];
          }
  
        }
      }
    }
  }
}

var sortByHappiness = function() {
  peopleArray.sort(function(a, b) {
    return (a[1].happiness-b[1].happiness);
  });
}

var oneIteration = function(rank) {
  sortByHappiness();
  for (var i=0; i<peopleArray.length; i++) {
    var kerberos = peopleArray[i][0];
    var nextEvent = people[kerberos].eventPrefs[rank-1];
    if (!nextEvent.placed) {
      var eventFromList = $.grep(events, function(e){ return e.name == nextEvent.name; })[0];
      var possibleTimes = [];

      //narrow down the possible times for all group members
      for (var j=0; j<eventFromList.times.length; j++) {
        var possible = people[kerberos].availability[eventFromList.times[j].day];
        possible = checkSchedule(kerberos, eventFromList.times[j]) && possible;
        for (var m=0; m<nextEvent.group.length; m++) {
          possible = people[nextEvent.group[m]].availability[eventFromList.times[j].day] && possible;
          possible = checkSchedule(nextEvent.group[m], eventFromList.times[j]) && possible;
        }
        if (possible) {
          possibleTimes.push(j);
        }
      }
      //if there are no possible times, nothing to do :(
      if (possibleTimes.length>0) {
        var mostSpots = possibleTimes[0];

        for (var j=1; j<possibleTimes.length; j++) {
          if (eventFromList.times[possibleTimes[j]].spots>eventFromList.times[mostSpots]) {
            mostSpots = j;
          }
        }

        var timeSlot = eventFromList.times[mostSpots]
        if (timeSlot.spots >= (nextEvent.group.length+1)) {
          timeSlot.spots--;
          timeSlot.participants.push(kerberos);
          incrementHappiness(kerberos, rank);
          nextEvent.placed = true;
          people[kerberos].schedule.push({
            'name': nextEvent.name,
            'day': timeSlot.day,
            'start': timeSlot.start,
            'end': timeSlot.end,
            'waitlist': false
          });
          for (var m=0; m<nextEvent.group.length; m++) {
            people[nextEvent.group[m]].schedule.push({
              'name': nextEvent.name,
              'day': timeSlot.day,
              'start': timeSlot.start,
              'end': timeSlot.end,
              'waitlist': false
            });
            var memberEvent = $.grep(people[nextEvent.group[m]].eventPrefs, function(e){ return e.name == nextEvent.name; })[0];
            memberEvent.placed = true;
            timeSlot.spots--;
            timeSlot.participants.push(nextEvent.group[m]);
            incrementHappiness(nextEvent.group[0], rank);
          }
        } else {
          if (eventFromList.waitlistSpots >= (nextEvent.group.length+1)) {
            eventFromList.waitlistSpots--;
            eventFromList.waitListSpots -= nextEvent.group.length;
            eventFromList.waitlist.push(kerberos);
            Array.prototype.push.apply(eventFromList.waitlist,nextEvent.group);
            people[kerberos].schedule.push({
              'name': nextEvent.name,
              'waitlist': true
            })
            nextEvent.placed = true;
            for (var m=0; m<nextEvent.group.length; m++) {
              people[nextEvent.group[m]].schedule.push({
                'name': nextEvent.name,
                'waitlist': true
              });
              var memberEvent = $.grep(people[nextEvent.group[m]].eventPrefs, function(e){ return e.name == nextEvent.name; })[0];
              memberEvent.placed = true;
            }
          }
        }
      }
    }
  }
}

//two ways we need to check for availability:
//1. are they available on that day?
//2. are they available at that time? (no other events scheduled then)
/*
timeblock {
  day:
  start:
  end:
}
schedule {
  name:
  day:
  start:
  end:
  waitlist:
}
*/
var checkSchedule = function(kerberos, timeBlock) {
  var schedule = people[kerberos].schedule;
  for (var i=0; i<schedule.length; i++) {
    if (!schedule[i].waitlist && schedule[i].day == timeBlock.day) {
      if ((schedule[i].start>timeBlock.start && schedule[i].start<timeBlock.end) || (schedule[i].end>timeBlock.start && schedule[i].end<timeBlock.end) || (schedule[i].start<=timeBlock.start && schedule[i].end>=timeBlock.start)) {
        return false;
      }
    }
  }
  return true;
}

var incrementHappiness = function(kerberos, rank) {
  people[kerberos].happiness += 23-rank;
}

var runAllIterations = function() {
  for (var i=1; i<23; i++) {
    oneIteration(i);
  }
}
