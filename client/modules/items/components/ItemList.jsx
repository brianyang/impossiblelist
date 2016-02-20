import React from 'react';
import Item from './Item.jsx';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import ItemProgress from './ItemProgress.jsx';

const ItemList = ({content = () => null }) => (
	<Row>
		<Row>
			<Col xs={12} sm={6}>
				<ItemProgress />
			</Col>
	  	</Row>
		<Row className="show-grid">
			<Col xs={12}>
				<a href="/edit"><Glyphicon glyph="plus"></Glyphicon> New Item</a>
			</Col>
			<Item />
		</Row>
	</Row>
);

export default ItemList;
