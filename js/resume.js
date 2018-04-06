$(document).ready(function() {
    var year = new Date();
    $("#copyrightYear").html('<p>&copy;' + year.getFullYear() + 'Built and maintained with &hearts; by <a href="https://github.com/landrews" target="_blank">@landrews</a>.</p>');

    GitHubCalendar(".calender", "landrews");
});