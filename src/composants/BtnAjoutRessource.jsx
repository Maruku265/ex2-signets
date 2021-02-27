import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {

  const divStyle = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#303030',
    color: 'white'
  };

  return (
    <Fab className="BtnAjoutRessource" aria-label="add" style={divStyle}>
      <AddIcon />
    </Fab>
  );
}