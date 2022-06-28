var Script = function () {


    /* initialize the external events
     -----------------------------------------------------------------*/

    $('#external-events div.external-event').each(function() {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
            title: $.trim($(this).text()) // use the element's text as the event title
        };

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject);

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });

    });


    /* initialize the calendar
     -----------------------------------------------------------------*/

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar !!!
        drop: function(date, allDay) { // this function is called when something is dropped

            // retrieve the dropped element's stored Event Object
            var originalEventObject = $(this).data('eventObject');

            // we need to copy it, so that multiple events don't have a reference to the same object
            var copiedEventObject = $.extend({}, originalEventObject);

            // assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

            // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
            }

        },
        events: [

 	{
                title: 'Sprint 5',
                start: new Date(y, 5, 6),
                end: new Date(y, 5, 15),
	    color:"#111E6C"
            },
 	{
                title: 'Sprint 4',
                start: new Date(y, 4, 23),
                end: new Date(y, 5, 5),
	    color:"#0080FF"
            },
 	{
                title: 'Sprint 3',
                start: new Date(y, 4, 9),
                end: new Date(y, 4, 22),
	    color:"#89CFFO"
            },
 	{
                title: 'Sprint 2',
                start: new Date(y, 3, 25),
                end: new Date(y, 4, 8),
	    color:"#003152"
            },
	{
                title: 'Sprint 1',
                start: new Date(y, 3, 11),
                end: new Date(y, 3, 24),
	    color:"#008081"
            },
	{
                title: 'Sprint 0',
                start: new Date(y, 3, 4),
                end: new Date(y, 3, 10),
	    color:"#81D8DO"
            }
        ]
    });


}();