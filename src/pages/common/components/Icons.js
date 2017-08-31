import React, { Component } from 'react';

export default class Icons extends Component {
  render() {
    const iconsList = [  // collapse when not in use
      "p-icon-plus",
      "p-icon-minus",
      "p-icon-search",
      "p-icon-heart",
      "p-icon-star",
      "p-icon-star-o",
      "p-icon-film",
      "p-icon-th",
      "p-icon-check",
      "p-icon-close",
      "p-icon-remove",
      "p-icon-times",
      "p-icon-search-plus",
      "p-icon-search-minus",
      "p-icon-cog",
      "p-icon-gear",
      "p-icon-print",
      "p-icon-image",
      "p-icon-photo",
      "p-icon-picture-o",
      "p-icon-pencil",
      "p-icon-map-marker",
      "p-icon-edit",
      "p-icon-pencil-square-o",
      "p-icon-check-square-o",
      "p-icon-chevron-left",
      "p-icon-chevron-right",
      "p-icon-crosshairs",
      "p-icon-arrow-left",
      "p-icon-arrow-right",
      "p-icon-arrow-up",
      "p-icon-arrow-down",
      "p-icon-chevron-up",
      "p-icon-chevron-down",
      "p-icon-thumbs-o-up",
      "p-icon-thumbs-o-down",
      "p-icon-heart-o",
      "p-icon-tasks",
      "p-icon-filter",
      "p-icon-bars",
      "p-icon-navicon",
      "p-icon-reorder",
      "p-icon-caret-down",
      "p-icon-caret-up",
      "p-icon-envelope",
      "p-icon-dashboard",
      "p-icon-tachometer",
      "p-icon-bell",
      "p-icon-star-half-empty",
      "p-icon-star-half-full",
      "p-icon-star-half-o",
      "p-icon-thumbs-up",
      "p-icon-thumbs-down",
      "p-icon-newspaper-o",
      "p-icon-bell-slash",
      "p-icon-bell-slash-o",
      "p-icon-area-chart",
      "p-icon-pie-chart",
      "p-icon-line-chart",
      "p-icon-toggle-on",
      "p-icon-user-circle-o",
    ];

    return (
      <section className="app-icons">
        { iconsList.map(this.renderIcons) }
      </section>
    )
  }

  renderIcons(icon) {
    return (
      <div className="icon-info">
        <span className="icon-preview"><span className={ icon }/></span>
        <span className="icon-label">{ icon }</span>
      </div>
    )
  }
}
