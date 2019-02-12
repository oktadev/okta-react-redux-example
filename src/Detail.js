import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';

const Detail = ({ show }) =>
  show ? (
    <div className="media">
      {show.image && (
        <img
          className="align-self-start mr-3"
          width={200}
          src={show.image.original}
          alt={show.name}
        />
      )}
      <div className="media-body">
        <h5 className="mt-0">
          {show.name}
          {show.network && <small className="ml-2">{show.network.name}</small>}
        </h5>
        {ReactHtmlParser(show.summary)}
      </div>
    </div>
  ) : (
    <div>Select a show to view detail</div>
  );

const mapStateToProps = ({ shows }) => ({
  show: shows.detail[shows.selected],
});

export default connect(mapStateToProps)(Detail);
