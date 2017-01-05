import React from 'react';
import Autocomplete from 'react-autocomplete';
import {matchTerm} from './util.js'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
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
          onSelect = { value => {
            this.setState({ value })
          }}
        />
      </div>
    )
  }
}

export default Search;
