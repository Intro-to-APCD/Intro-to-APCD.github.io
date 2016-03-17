// Spiro Ganas
// 11/13/15
//
// Creates a variable that stores the DC data dictionary in the JSON format.
// This is used to feed data to the AngularJS website.

var RN_JSON = [

	{
 
     "ReleaseNoteName":"Tufts Facility Claims"
    ,"ReleaseNoteDate":"12/7/2015"
    ,"SortOrder":"1"
    ,"ReleaseNoteText":"Tufts mistakenly identified too many of the commercial facility claims in the MC files as secondary as noted in the April 9, 2014 email.\n\nWork-around to determine actual claims paid as secondary: \nIf any row in the claim has a non-zero value in MC096 (payments by other insurers), the claim paid as secondary.  Otherwise, THP is primary.\n\nFrom Tufts statements  this would have been a going forward fix - so when you say Release 4.0 - yes, but potentially for March/April 2014 onward.  Though they did resubmit Oct 2013 - April 2014 in July 2014 so that may have been fixed as well.  "
    }
];