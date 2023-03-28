import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import moment from 'moment';
import { FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, FormText } from 'reactstrap';
import { gettext } from '../utils/constants';
import { Utils } from '../utils/utils';
import DateTimePicker from './date-and-time-picker';

const propTypes = {
  shareLinkNum: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onShareLinkNumChanged: PropTypes.func.isRequired,
  shareLinkForceUsePassword: PropTypes.bool.isRequired,
  onMultiShareLinksAutoGeneratePasswordChecked: PropTypes.func.isRequired
};

const inputWidth = Utils.isDesktop() ? 250 : 210;

class SetMultiShareLinks extends React.Component {

  constructor(props) {
    super(props);
    let shareLinksNumLimitTip = gettext('Greater than or equal to 2');
    this.shareLinksNumLimitTip = shareLinksNumLimitTip;
  }

  render() {
    return (
      <Fragment>
        <FormGroup>
          <Fragment>
            <InputGroup style={{width: inputWidth}}>
              <Input type="text" value={this.props.shareLinkNum} onChange={this.props.onShareLinkNumChanged} />
              <InputGroupAddon addonType="append">
                <InputGroupText>{gettext('Share Links')}</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FormText color="muted">{this.shareLinksNumLimitTip}</FormText>
          </Fragment>
        </FormGroup>
        <FormGroup check>
          <Label check>
	    {this.props.shareLinkForceUsePassword ?
            <Input type="checkbox" checked readOnly disabled /> :
            <Input type="checkbox" onChange={this.props.onMultiShareLinksAutoGeneratePasswordChecked} />
            }
            <span>{gettext('Auto generate password')}</span>
          </Label>
        </FormGroup>
      </Fragment>
    );
  }
}

SetMultiShareLinks.propTypes = propTypes;

export default SetMultiShareLinks;
