var app = angular.module("app", []);


function MainCtrl ($filter) {
this.data = [
  
  {
 "event_id":"1",
 "event_name":"Event 1",
 "event_date":"2014-05-26 00:00:00",
 "event_venue":"Limerick",
 "event_description":"stuff"
},{
 "event_id":"2",
 "event_name":"Event 1",
 "event_date":"2015-09-26 00:00:00",
 "event_venue":"Limerick",
 "event_description":"stuff"
},{
 "event_id":"3",
 "event_name":"Event 1",
 "event_date":"2014-9-27 00:00:00",
 "event_venue":"Limerick",
 "event_description":"stuff"
}
  
];
 this.lastOne =$filter('orderBy')(this.data,'-event_date')[this.data.length-1].event_date ;
 }





angular.module("app").controller("MainCtrl", MainCtrl);