import React from 'react';
import './card-footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardFooter = (props) =>{
	return (
		<div className="card-footer">
						<div className="card-footer-icons">
							<div className="left-icons">
								<FontAwesomeIcon icon={['far', 'heart']} />
								<FontAwesomeIcon icon={['far', 'comment']} />
								<FontAwesomeIcon icon={['far', 'share-square']} />
							</div>
							<div className="right-icons">
								<FontAwesomeIcon icon={['fas', 'tag']} />
							</div>
						</div>
						<span>{props.likes} me gusta</span>
						<div className="comment">
							<form>
								<input type="text" name="" placeholder="Agregar un comentario..." />
							</form>
						</div>
					</div>

		)
}

export default CardFooter;