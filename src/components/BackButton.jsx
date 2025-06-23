import {useNavigate} from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button className='back-btn' onClick={() => navigate('/')}>
            ⬅️ Retour à la boutique
        </button>
    );
};

export default BackButton;