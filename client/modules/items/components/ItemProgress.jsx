import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const ItemProgress = ({percentage}) => (
	<ProgressBar now={percentage} label="%(percent)s%"></ProgressBar>
);

export default ItemProgress;