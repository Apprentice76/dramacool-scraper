import Title from './Title';

const Titles = (props) => {
    const obj = props.data;
    const ids = Object.keys(obj);
    return (
        <div className='container'>
            {ids.map((id) => (
                <Title key={id} title={obj[id]} />
            ))}
        </div>
    );
};

export default Titles;
