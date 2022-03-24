import logo from './logo.svg';
import './App.css';

function App() {

  
  var el = document.getElementById('table');
  var dragger = tableDragger(el, {
    mode: 'row',
    dragHandler: '.handle',
    onlyBody: true,
    animation: 300
  });
  dragger.on('drop', function (from, to) {
    console(from);
    console(to);
  });


  return (
    <div className="App">
      <table id="table">
        <thead>
          <tr>
            <th class='handle'>header1</th>
            <th class='handle'>header2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>conten1</td>
            <td>conten2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
