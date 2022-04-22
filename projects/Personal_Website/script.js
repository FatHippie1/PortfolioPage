$(document).ready(function () {

    $(".icons").hover(function () {
        $(this).css("font-size", "48px");
    }, function () {
        $(this).css("font-size", "16px");
    });
});



let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let gitObject = JSON.parse(this.responseText);
        for (var i = 0; i < gitObject.length; i++) {
            $("#gitRepos").append("<li>" + gitObject[i].name + "</li > ");
        }
    }
};
gitHubRequest.open("GET", "https://api.github.com/users/Fathippie1/repos", true);
gitHubRequest.send();
