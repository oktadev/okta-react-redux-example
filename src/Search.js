import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import { searchShows, selectShow } from './actions';

const Search = ({ shows, fetchShows, selectShow, onChange }) => {
  const [value, setValue] = useState('');
  const options = (shows.search[value] || []).map(id => shows.detail[id]);

  return (
    <AsyncTypeahead
      autoFocus
      labelKey="name"
      filterBy={() => true}
      onSearch={term => {
        fetchShows(term);
        setValue(term);
      }}
      onChange={selectShow}
      placeholder="Search for a TV show..."
      isLoading={Boolean(value) && !shows.search[value]}
      options={options}
    />
  );
};

const mapStateToProps = state => ({
  shows: state.shows,
});

const mapDispatchToProps = dispatch => ({
  fetchShows: value => dispatch(searchShows(value)),
  selectShow: ([show]) => dispatch(selectShow(show && show.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
