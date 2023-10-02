import moment from 'moment';

const Heder = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <img className='mx-auto' src="https://i.ibb.co/4fBSb7B/logo.png" alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Heder;