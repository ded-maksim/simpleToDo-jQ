$(document).ready(function (e) {
    $('#add-todo').button({
        icons: {
            primary: "ui-icon-circle-plus"
        }
    }).click(function () {
        $('#new-todo').dialog('open');
    });

    // build dialog box and add functionality
    $('#new-todo').dialog({
        modal: true,
        autoOpen: false,
        buttons: {
            "Add": function () {
                var taskName = $('#task').val();
                if (taskName === '') {
                    return false;
                }
                var taskHTML = '<li><span class="done">%</span>';
                taskHTML += '<span class="delete">x</span>';
                taskHTML += '<span class="task"></span></li>';

                // convert HTML string to jQuery Object 
                var $newTask = $(taskHTML);

                // add taskname, but make sure HTML is escaped
                $newTask.find('.task').text(taskName);

                //hide new task
                $newTask.hide();

                // append to To Do list 
                $('#todo-list').prepend($newTask);

                // show with effect and highlight
                $newTask.show('clip', 250).effect('highlight', 1000);
                $(this).dialog('close');
            },
            "Cancel": function () {
                $(this).dialog('close');
            }
        },
        close: function () {
            $('#new-todo input').val(''); /*clear fields*/
        }
    }); // end dialog
}); // end ready
