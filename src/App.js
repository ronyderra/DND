import "./styles.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import Ellipse77 from './Ellipse77.png'
import Group73 from './Group73.png'
import barChart6 from './barChart6.png'
import { useState } from "react";
import { addRow } from './slices/employeeTable'

export default function App() {
  const employeeTableData = useSelector((state) => state.employeeTable.data)
  const [employees, setEmployees] = useState(employeeTableData);
  const dispatch = useDispatch()

  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(employees);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setEmployees(tempData);
  };

  return (
    <div className="container">
      <div className="table-responsive">
        <DragDropContext onDragEnd={handleDragEnd}>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th className="noWidth"></th>
                <th className="noWidth">אפשרויות</th>
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
                  {employees?.map((employe, index) => (
                    <Draggable
                      key={employe.name}
                      draggableId={employe.name}
                      index={index}
                    >
                      {(provider) => (
                        <tr {...provider.draggableProps} ref={provider.innerRef}>
                          <td {...provider.dragHandleProps}><img src={Group73} /></td>
                          <td {...provider.dragHandleProps}><img src={barChart6} /></td>
                          <td>{employe.sumHours}</td>
                          <td>{employe.hours}</td>
                          <td>{employe.overLimitHours}</td>
                          <td>{employe.name}<img className="nameImage" src={Ellipse77} /></td>
                          <td>{employe.id}</td>
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
        <button onClick={() => dispatch(addRow({
          "id": 316287341,
          "name": "יואל",
          "overLimitHours": '4:00',
          "manualHours": '4:00',
          "hours": '155:00',
          "sumHours": '159:00'
        }))}>add</button>
      </div>
    </div>
  );
}