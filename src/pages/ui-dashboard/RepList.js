import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import RepCard from './RepCard';
import RepDetails from './RepDetails';

export default class RepList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRep: null,
        }
    }

    render() {
        const { repListData } = this.props;
        const { offices, officials } = repListData;
        const { selectedRep } = this.state;

        const repDetails = selectedRep ?
            <RepDetails repData={ selectedRep } /> :
            <div>Select a representative to see details</div>;


        return (
            <div className="rep-info-wrapper">
                <div className={ cx('rep-offices') }>
                    { offices.map(this.renderOffices.bind(this)) }
                </div>
                <div className={ cx('rep-detail') }>
                    <div className="rep-detail__inner">{ repDetails }</div>
                </div>
            </div>

        )
    }

    renderOffices(office, idx) {
        const { repListData } = this.props;
        const { officials } = repListData;
        const { officialIndices, name } = office;

        const repCard = officialIndices.map((index) => {
            const rep = (officials[index]);

            return (
                <li className="rep-list__item">
                    <RepCard
                        onCardClick={ this.onCardDidClick.bind(this, rep) }
                        repData={ rep }
                        office={ office } />
                </li>
            );
        });

        return (
            <div className="rep-offices__office" key={ `rep-${idx}` }>
                <h3 className="small-caps">{ name }</h3>
                <ul className="rep-list">{ repCard }</ul>
            </div>
        )
    }

    onCardDidClick(data) {
        this.setState({ selectedRep: data });
    }
}
