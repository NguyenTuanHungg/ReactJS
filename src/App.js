import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const option1=[
  { id: 1, label: "Không lặp lại" },
  { id: 2, label: "Lặp lại" },
]

const option2=[
  { id: 3, label: "+" },
  { id: 4, label: "-" },
]

const option3=[
  { id: 1, label: "tỷ lệ" },
  { id: 2, label: "Thành tiền " },
]

function App() {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleAddRow = () => {
    setRows([...rows, { id: count }]);
    setCount(count + 1);
  };

  const handleDeleteRow = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
    setCount(count - 1);
  };

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }
  function toggleDropdown1() {
    setIsOpen1(!isOpen1);
  }

  function handleOptionClick1(option) {
    setSelectedOption1(option);
    setIsOpen1(false);
  }
  function toggleDropdown2() {
    setIsOpen2(!isOpen2);
  }

  function handleOptionClick2(option) {
    setSelectedOption2(option);
    setIsOpen2(false);
  }
 
 
  return (
    <div className="container">
      <div>
      <div className="combobox">
      <div className="input-wrapper" onClick={toggleDropdown}>
        <input
          type="text"
          placeholder="Loại phụ phí"
          value={selectedOption ? selectedOption.label : ""}
          readOnly
        />
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`arrow-icon ${isOpen ? "open" : ""}`}
        />
      </div>
      
      {isOpen && (
        <ul className="options">
          {option1.map((option) => (
            <li className='value' key={option.id} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
      <input type="text" className='text2' />
      <button onClick={handleAddRow}  className="add">
      <span className="add-icon">
        <FontAwesomeIcon icon={faPlus} />
      </span>
       <span>Thêm mới</span> 
      </button>

      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
              <div className="combobox">
              <div className="input-wrapper" onClick={toggleDropdown1}>
                <input
                  type="text"
                  placeholder="Phụ thu"
                  value={selectedOption1 ? selectedOption1.label : ""}
                  readOnly
                />
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`arrow-icon ${isOpen1 ? "open" : ""}`}
                />
              </div>
              
              {isOpen1 && (
                <ul className="options">
                  {option2.map((option1) => (
                    <li className='value' key={option1.id} onClick={() => handleOptionClick1(option1)}>
                      {option1.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
              </td>
              <td>
              <div className="combobox">
              <div className="input-wrapper" onClick={toggleDropdown2}>
                <input
                  type="text"
                  placeholder="Kiểu tính phụ phí"
                  value={selectedOption2 ? selectedOption2.label : ""}
                  readOnly
                />
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`arrow-icon ${isOpen2 ? "open" : ""}`}
                />
              </div>
              
              {isOpen2 && (
                <ul className="options">
                  {option3.map((option) => (
                    <li className='value' key={option.id} onClick={() => handleOptionClick2(option)}>
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
              </td>
              <td>
                <input type="text" className='text3'/>
              </td>
              <td>
                <button onClick={() => handleDeleteRow(row.id)} style={{ backgroundColor: 'red', color: 'white',border:'none',height:'34px' }}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
