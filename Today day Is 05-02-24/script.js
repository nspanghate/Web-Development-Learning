document.addEventListener('DOMContentLoaded', function () {
    // Header mouseover/mouseout effect
    var header = document.getElementById('resumeHeader');

    header.addEventListener('mouseover', function () {
        header.style.color = getRandomColor();
    });

    header.addEventListener('mouseout', function () {
        header.style.color = ''; // Reset to default color
    });

    // Skills hover effect
    var skillsListItems = document.querySelectorAll('.skills li');

    skillsListItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            item.style.color = getRandomColor();
        });

        item.addEventListener('mouseout', function () {
            item.style.color = ''; // Reset to default color
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
