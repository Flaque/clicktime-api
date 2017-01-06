import React from 'react';
import Autocomplete from 'react-autocomplete';
import {matchTerm} from './util.js'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onSelect = this.onSelect.bind(this)
  }

  renderItem(item, isHighlighted) {
    return (
      <div
        className = {isHighlighted
            ? 'searchItem searchItem--highlighted'
            : 'searchItem'}
        key = {item.id}
        id = {item.id}
      >{item.name}</div>
    )
  }

  onSelect(value, item) {
    this.setState({ value })
    this.props.onSelect(item.id)
  }

  render() {
    return (
      <div className="search">
        <Autocomplete
          ref = "autocomplete"
          value = {this.state.value}
          items = {this.props.items}
          getItemValue = { (item) => item.name }
          renderItem = {this.renderItem}
          shouldItemRender={matchTerm}
          onChange = { (event, value) => {
            this.setState({ value })
          }}
          onSelect = {this.onSelect}
        />
      </div>
    )
  }
}

export default Search;
