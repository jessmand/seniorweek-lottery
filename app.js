
$(function() {
  console.log('hi');

  $.ajax({
      url: 'https://docs.google.com/spreadsheets/d/1VAsZ3tyYZYntzwshC6nTDwa1PezkgK_9Ku9Y6ZvEhG4/gviz/tq?gid=0&tqx=responseHandler:displayResults',
      type: "GET",
      crossDomain: true,
      dataType: 'script'
    });
  
});
var displayResults = function(data) {
    var people = makeJSONObject(data);
  }

//make data from google spreadsheet into a JSON object
var makeJSONObject = function(data) {
  var people = {};
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
  return people;

}

//checks rep to make sure that schedule of a person has no overlapping events
var checkSchedule = function(person) {

}

var makeEventGroupLists = function() {
  for (var i=0; i<events.length; i++) {
    var event = events[i];
    var groups = []; //[{people:[],points:0}]
    for (var kerberos in people.keys()) {
      var person = people[kerberos];
      
      //if they gave the events points and haven't been put in the list already
      //as a part of a group
      if (person.eventPrefs[event.name].points>0 && person.eventPrefs[event.name].putInGroup == false){
        var totalPoints = person.eventPrefs[event.name].points;
        var totalPeople = 1;
        var group = person.eventPrefs[event.name].group;
        var groupPeople = [person];
        person.eventPrefs[event.name].putInGroup = true;

        //for each person they listed as part of their group
        if (group.length == 1) {
          if (people[group[0]].eventPrefs[event.name].group[0] == kerberos && people[group[0]].eventPrefs[event.name].group.length == 1) {

          }
        } else if (group.length == 2) {
          if (people[group[0]].eventPrefs[event.name].group[0] == kerberos && people[group[0]].eventPrefs[event.name].group.length == 1) {

          }
        }
        group.forEach(groupMemberKerberos){
          if(people[groupMemberKerberos].eventPrefs[event.name].group.contains(kerberos) ){
            totalPoints += people[groupMemberKerberos].eventPrefs[event.name].points;
            totalPeople++;
            groupPeople.push(people[groupMemberKerberos]);
            people[groupMemberKerberos].eventPrefs[event.name].putInGroup = true;
          }
        }
        groups.push({people:groupForThisEvent, points:totalPoints/totalPeople});
     }
    }
  }
}
