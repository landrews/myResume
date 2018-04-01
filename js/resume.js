$(document).ready(function() {
    var year = new Date();
    $("#copyrightYear").html("<p>&copy; " + year.getFullYear() + " All rights reserved.</p>");

    GitHubCalendar(".calender", "landrews", );
});