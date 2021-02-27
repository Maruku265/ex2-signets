import './Dossier.scss';
import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Dossier({id, titre, couleur, dateModif}) {

    const divStyle = {
      backgroundColor: couleur

    };

    const deplaceStyle = {
      borderRadius: '100px',
      backgroundColor: '#303030',
      position: 'absolute',
      float: 'left',
      marginLeft: '5px',
      marginTop: '5px',
      opacity: '60%',
      zIndex: '0'
    }

    const buttonStyle = {
      color:'white'
    }

  return (
    <article style={divStyle} className="Dossier">
      <div className="couverture">
        <SortIcon className="deplacer" style={deplaceStyle}/>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <Button>
        <MoreVertIcon style={buttonStyle}/>
      </Button>
    </article>
  );
}