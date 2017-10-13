import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import RepCard from './RepCard';

export default class RepList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRepIdx: 0,
        }
    }

    render() {
        const { repListData } = this.props;
        const { offices } = repListData;
        const { selectedRepIdx } = this.state;
        // console.log(offices);
        // const { officials } = repListData;
        console.log(selectedRepIdx);
        const selectedRep = selectedRepIdx > 0 ? <div>{selectedRepIdx}</div> : <div>nothing selected</div>;


        return (
            <div className="rep-info-wrapper">
                <div className={ cx('rep-offices') }>
                    { offices.map(this.renderOffices.bind(this)) }
                </div>
                <div className={ cx('rep-detail') }>
                    <div className="rep-detail__inner">{ selectedRepIdx }</div>
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
                    <RepCard onCardClick={ this.onCardDidClick.bind(this, index) } repData={ rep } office={ office } />
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

    onCardDidClick(idx) {
        this.setState({ selectedRepIdx: idx });
    }
}
