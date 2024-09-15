$(document).ready(function () {
    // Capture form submit event
    $('#ajaxForm').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = {
            // id: $('#id').val(),
            userName: $('#userName').val(),
            userPhoneNo: $('#userPhoneNo').val(),
            userEmail: $('#userEmail').val()
        };

        // AJAX request of Post
        $.ajax({
            url: 'http://localhost:8080/sav', // Spring Boot API endpoint
            type: 'POST', // HTTP method
            contentType: 'application/json', // Send data as JSON
            data: JSON.stringify(formData), // Convert form data to JSON
            success: function () {
                // Handle the success response
                $('#responseMessage').html('<div class="alert alert-success">' + "From Submitted sucess" + '</div>');
            },
            error: function () {
                // Handle the error response
                $('#responseMessage').html('<div class="alert alert-danger">Error: ' + "Opps! Problem Occred Try Again" + '</div>');
            }
        });
    });

    //AJAX request of get 

    $.ajax({
        url: 'http://localhost:8080/findAll', // Spring Boot API endpoint
        type: 'GET',
        dataType: 'json', // Expected data format
        success: function (users) {
            // Loop through each user and append them to the table
            var tableBody = $('#userTableBody');
            users.forEach(function (user) {
                var row = '<tr>' +
                    '<td>' + user.id + '</td>' +
                    '<td>' + user.userName + '</td>' +
                    '<td>' + user.userPhoneNo + '</td>' +
                    '<td>' + user.userEmail + '</td>' +
                    '</tr>';
                tableBody.append(row); // Add the row to the table
            });
        },
        error: function () {
            // Handle any errors
            alert('Error: not fetching');
        }
    });


// this function won't work properly
    $('#toggleTable').click(function () {
        if ($(this).val() == "") {
            $('#showDataTable').removeClass('hidden').addClass('slide-down');
        }
        else {
            $('#showDataTable').removeClass('slide-down').addClass('slide-up');
            setTimeout(function () {
                $('#showDataTable').addClass('hidden');
            }, 500); // Delay hiding to allow animation to finish
        }

    })



});
