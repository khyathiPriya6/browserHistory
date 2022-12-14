import {Component} from 'react'

import HistoryItem from '../historyItem/index'

import './index.css'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteHistory = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const {searchInput} = this.state
    const filteredList = this.filterHistoryList()
    return (
      <div className="main-container">
        <div className="top-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history-logo"
            alt="app logo"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              placeholder="Search History"
              className="search-input-style"
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>
        <div className="history-list-container">
          <ul>
            {filteredList.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                key={eachItem.id}
                deleteTheItem={this.onDeleteHistory}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
