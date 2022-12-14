import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteTheItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const clickingDeleteBtn = () => {
    deleteTheItem(id)
  }

  return (
    <li className="history-iem-container">
      <div className="icon-container">
        <p className="time-style">{timeAccessed}</p>
        <img src={logoUrl} className="logo-style" alt="domain logo" />
        <p className="title-style">{title}</p>
        <p className="url-style">{domainUrl}</p>
      </div>
      <div className="delete-container">
        <button
          type="submit"
          id="delete"
          className="delete-btn"
          onClick={clickingDeleteBtn}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete-style"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
