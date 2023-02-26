import react from "react"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const courses=[
  {id:"CSCI103-session1",
   courseName:"test0",
   start:new Date(2023,1,27,12,30),
   end:new Date(2023,1,27,13,50)},
   {id:"CSCI103-session1",
   courseName:"test0",
   start:new Date(2023,2,1,12,30,0),
   end:new Date(2023,2,1,13,50,0)},
   {id:"CSCI104-session1",
   courseName:"test0",
   start:new Date(2023,1,28,11,0,0),
   end:new Date(2023,1,28,12,20,0)},
   {id:"CSCI104-session1",
   courseName:"test0",
   start:new Date(2023,2,2,11,0,0),
   end:new Date(2023,2,2,12,20,0,)},
   {id:"CSCI170-session1",
   courseName:"test1",
   start:new Date(2023,1,28,9,30,0),
   end:new Date(2023,1,28,10,50,0)},
  {id:"CSCI170-session1",
   courseName:"test2",
   start:new Date(2023,2,2,9,30,0),
   end:new Date(2023,2,2,10,50,0)},
   {id:"CSCI102-session1",
   courseName:"test0",
   start:new Date(2023,1,27,9,0,0),
   end:new Date(2023,1,27,10,0,0)},
   {id:"CSCI102-session1",
   courseName:"test0",
   start:new Date(2023,2,1,9,0,0),
   end:new Date(2023,2,1,10,0,0)},
]


const localizer = momentLocalizer(moment)

class SchedulePage extends react.Component{
  constructor( ...args) {
    super(...args)

    var theEvents=[];
    for (let i=0; i<courses.length; i++){
      var newEvent = 
        {
          start:courses[i].start,
          end:courses[i].end,
          title:courses[i].id,
        };
      theEvents.push(newEvent);
      
    };

    console.log(theEvents);

    this.state ={
      events:theEvents,
    };
    
  }

  
  // handleSelect =({ start, end}) => {
  //   const title = window.prompt('New Event name')
  //   console.log(start, end)
  //   debugger
  //   if (title)
  //       this.setState({
  //         events:[
  //           ...this.state.events,
  //           {
  //             start,
  //             end,
  //             title,
  //           },
  //         ],
  //       })
  // }

  render(){
    return (
      <div className="Calender">
        <Calendar
          selectable={true}
          onSelectEvent={this.handleSelect}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ }}
          //
          // resizable={true}
          // onEventDrop={console.log}
          // onEventResize={console.log}
          // onDragStart={console.log}
          // onDropFromOutside={console.log}
          // draggableAccessor={() => true}
          // resizableAccessor={() => true}
        />
      </div>
    )
  }
}

export default SchedulePage;
