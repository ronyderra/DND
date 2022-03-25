import "./styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import Ellipse77 from './Ellipse77.png'
import Group73 from './Group73.png'
import { useState } from "react";

export default function App() {
  const employeeTableData = useSelector((state) => state.employeeTable.data)
  const [users, setUsers] = useState(employeeTableData);
  const dispatch = useDispatch()

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(users);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setUsers(tempData);
  };
  return (
    <div className="container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>אפשרויות</th>
              <th>סך הכל שעות</th>
              <th>שעות</th>
              <th>שעות חריגות</th>
              <th>שם עובד</th>
              <th>מספר תז</th>
            </tr>
          </thead>
          <Droppable droppableId="droppable-1">
            {(provider) => (
              <tbody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
              >
                {users?.map((user, index) => (
                  <Draggable
                    key={user.name}
                    draggableId={user.name}
                    index={index}
                  >
                    {(provider) => (
                      <tr {...provider.draggableProps} ref={provider.innerRef}>
                        <td {...provider.dragHandleProps}><img src={Group73} /></td>
                        <td>{user.sumHours}</td>
                        <td>{user.hours}</td>
                        <td>{user.overLimitHours}</td>
                        <td>{user.name}<img className="nameImage" src={Ellipse77} /></td>
                        <td>{user.id}</td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>
    </div>
  );
}