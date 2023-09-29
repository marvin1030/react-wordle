import axios from 'axios';

const getWords = () => {

    axios.get('https://random-word-api.herokuapp.com/word?length=3&number=10&lang=en')
        .then((res) => {
            console.log('users', res.data)
            const secretWord = res.data[0];
            const split = [...secretWord];
            setData(split);
        })
        .catch((err) => {
            return null
        })

}