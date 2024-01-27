// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, tabClicked, isActive} = props
  const {tabId, displayText} = tabsList

  const onclickTabItem = () => {
    tabClicked(tabId)
  }

  const activeClass = isActive ? 'selected-tab' : ''

  return (
    <li className={`tab-item-container ${activeClass}`}>
      <button type="button" className="button" onClick={onclickTabItem}>
        <h1 className={`tab-item ${activeClass}`}>{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem
